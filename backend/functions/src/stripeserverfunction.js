const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const stripe = require("stripe")(
  process.env.STRIPE_TEST_SECRET_API_KEY
);
require('dotenv').config()

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.raw({ type: "*/*" }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from stripe server!");
  handlePaymentIntentSucceeded(null);
});

app.post("/paymentlink", async (req, res) => {
  try {
    let payload = req.body;
    console.log("starting payment linke creation");
    const product = await stripe.products.create({
      name: payload.membership,
    });
  
    const price = await stripe.prices.create({
      unit_amount: payload.price,
      currency: 'usd',
      recurring: {interval: payload.recurring},
      product: product.id,
    });

    const paymentLink = await stripe.paymentLinks.create({
      line_items: [{price: price.id, quantity: 1}],
      metadata: {
        "membership": payload.membership,
        "recurring": payload.recurring,
        "price": payload.price,
        "account_id": payload.account_id,
      }
    });
  
    res.status(200).send({'url': paymentLink.url});
  } catch {
    console.log("payment link creation failed!");
    return res.sendStatus(400);
  }
});

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers["stripe-signature"];
      try {
        event = stripe.webhooks.constructEvent(
          request.rawBody, // local testing 일때는 request.body, deploy할때는 request.rawBody. Cloud Function이 json body parsing을 자동으로 하기 때문.
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        console.log(
          `CheckoutSession with payment intent ${checkoutSessionCompleted.payment_intent} completed!`
        );
        handleCheckoutSessionCompleted(checkoutSessionCompleted);
        break;
      // case "payment_intent.succeeded":
      //   const paymentIntentSucceeded = event.data.object;
      //   console.log(
      //     `PaymentIntent for ${paymentIntentSucceeded.amount} was successful!`
      //   );
      //   handlePaymentIntentSucceeded(paymentIntentSucceeded);
      //   break;
      // case "payment_intent.failed":
      //   const paymentIntentFailed = event.data.object;
      //   console.log(`PaymentIntent for ${paymentIntentFailed.amount} failed!`);
      //   handlePaymentIntentFailed(paymentIntentFailed);
      //   break;
      // case "payment_intent.processing":
      //   const paymentIntentProcessing = event.data.object;
      //   console.log(
      //     `PaymentIntent for ${paymentIntentProcessing.amount} is processing. Customer's payment was submitted to Stripe successfully. Waiting for initiated payment to pass or fail. Typically due to ACH debit purchase which delays the payment itself.`
      //   );
      //   handlePaymentIntentProcessing(paymentIntentProcessing);
      //   break;
      default:
        // Unexpected, unhandled event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

function handleCheckoutSessionCompleted(checkoutSession) {
  
  if(checkoutSession.payment_status == "paid") {
    const userId = checkoutSession.metadata.account_id;
    const membershipTo = checkoutSession.metadata.membership;
  
    const url = new URL(`/userServiceApp/user/update/${userId}`, process.env.CLOUD_FUNCTIONS_URL);
  
    // update membership through rest api call
    fetch(
      url,
      {
        method: "PATCH",
        body: JSON.stringify({
          fields: {
            membership: membershipTo,
          },
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  } else {
    console.log("Checkout Session NOT PAID!");
  }

}

function handlePaymentIntentSucceeded(paymentIntent) {
  // Customer completed payment on checkout page
  // TODO: payment intent 안에 있는 user information을 이용해서 db에서 해당 유저를 찾고 membership을 업데이트 해줘야한다.
  // payment intent의 유저 정보와 DB의 유저 정보를 어떻게 매칭해야하나? 이름만으로는 부족..
  // payment intent에서 elite로 업그레이드인지, vip로 업그레이드인지 알 수 있어야한다 (stripe payment link subscription product에 정보를 넣어야함)
  
}

function handlePaymentIntentFailed(paymentIntent) {
  // Customer’s payment was declined by card network or otherwise expired
  // Reach out to customer through email or push notification and prompt them to provide another payment method
  // 유저가 보고있는 페이지에 notification block 띄우기?
}

function handlePaymentIntentProcessing(paymentIntent) {
  // The customer’s payment was submitted to Stripe successfully. Only applicable to payment methods with delayed notification.
  // Wait for the initiated payment to succeed or fail.
}

exports.stripeServerApp = functions.https.onRequest(app);

// app.listen(4242, () => console.log('Running on port 4242'));
