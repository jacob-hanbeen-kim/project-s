// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KY5NXLufHWgSCuMPZB2PoCXl8z5TDkM5vWOWk7xu16gGGwfakArJieMFU1idt7Du09YYW50e6rHFf0a2MhyCX9p00aYwrGqXz');
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
// const endpointSecret = 'whsec_...';
const endpointSecret = "whsec_2ddc73e72983d0f2530966141f54fa3e27fb92e9e3487f4ce8fc2cf0a4dca701";
const express = require('express');
const cors = require('cors');

module.exports = function() {
  const app = express();
  app.use(cors({origin:true}));
  app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
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
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
  
    // Return a 200 response to acknowledge receipt of the event
    response.send();
  });
  return app;
}
  // app.listen(4242, () => console.log('Running on port 4242'));