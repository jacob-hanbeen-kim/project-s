const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

// TODO: put all secret keys in .env.

// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51KY5NXLufHWgSCuMPZB2PoCXl8z5TDkM5vWOWk7xu16gGGwfakArJieMFU1idt7Du09YYW50e6rHFf0a2MhyCX9p00aYwrGqXz"
);

// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
// const endpointSecret = "whsec_2ddc73e72983d0f2530966141f54fa3e27fb92e9e3487f4ce8fc2cf0a4dca701"; // for cli testing
const endpointSecret = "whsec_O4IUVzanRmyp71KyWC1nTThfW6OGVyjV";

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.raw({ type: "*/*" }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from server!");
  handlePaymentIntentSucceeded(null);
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
      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;
        console.log(
          `PaymentIntent for ${paymentIntentSucceeded.amount} was successful!`
        );
        handlePaymentIntentSucceeded(paymentIntentSucceeded);
        break;
      case "payment_intent.failed":
        const paymentIntentFailed = event.data.object;
        console.log(`PaymentIntent for ${paymentIntentFailed.amount} failed!`);
        handlePaymentIntentFailed(paymentIntentFailed);
        break;
      case "payment_intent.processing":
        const paymentIntentProcessing = event.data.object;
        console.log(
          `PaymentIntent for ${paymentIntentProcessing.amount} is processing. Customer's payment was submitted to Stripe successfully. Waiting for initiated payment to pass or fail. Typically due to ACH debit purchase which delays the payment itself.`
        );
        handlePaymentIntentProcessing(paymentIntentProcessing);
        break;
      default:
        // Unexpected, unhandled event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

function handlePaymentIntentSucceeded(paymentIntent) {
  // Customer completed payment on your checkout page
  // Give user subscription level (elite / vip) on firestore database - api call to cloud functions?
  // TODO: payment intent 안에 있는 user information을 이용해서 db에서 해당 유저를 찾고 membership을 업데이트 해줘야한다.
  // payment intent의 유저 정보와 DB의 유저 정보를 어떻게 매칭해야하나? 이름만으로는 부족.
  // payment intent에서 elite로 업그레이드인지, vip로 업그레이드인지 알 수 있어야한다.
  fetch(
    "https://us-central1-project-s-backend.cloudfunctions.net/userServiceApp/user/update/0x8E4124DD649198F41D1443D0253de7d4F7438648",
    {
      method: "PATCH",
      body: JSON.stringify({
        fields: {
          membership: "basic",
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function handlePaymentIntentFailed(paymentIntent) {
  // Customer’s payment was declined by card network or otherwise expired
  // Reach out to your customer through email or push notification and prompt them to provide another payment method
  // 유저가 보고있는 페이지에 notification block 띄우기?
}

function handlePaymentIntentProcessing(paymentIntent) {
  // The customer’s payment was submitted to Stripe successfully. Only applicable to payment methods with delayed notification.
  // Wait for the initiated payment to succeed or fail.
}

exports.stripeServerApp = functions.https.onRequest(app);

// app.listen(4242, () => console.log('Running on port 4242'));
