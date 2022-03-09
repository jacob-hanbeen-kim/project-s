const functions = require('firebase-functions');
const admin = require('firebase-admin')
const serviceAccount = require('./ServiceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KY5NXLufHWgSCuMPZB2PoCXl8z5TDkM5vWOWk7xu16gGGwfakArJieMFU1idt7Du09YYW50e6rHFf0a2MhyCX9p00aYwrGqXz');
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
const endpointSecret = "whsec_2ddc73e72983d0f2530966141f54fa3e27fb92e9e3487f4ce8fc2cf0a4dca701"; // for cli testing
// const endpointSecret = "whsec_O4IUVzanRmyp71KyWC1nTThfW6OGVyjV"; // for defiact stripe
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
  app.use(cors({origin:true}));
  app.use(bodyParser.raw({type: "*/*"}));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
      res.send('Hello from server!');
  });
  app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
    let event = request.body;
    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
      const signature = request.headers['stripe-signature'];
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

//   exports.stripeServerApp = functions.https.onRequest(app);


// for local testing
  app.listen(4242, () => console.log('Running on port 4242')); 











// const uid = 'some-uid';
// admin.auth().createCustomToken(uid)
//     .then((customToken) => {
//         console.log(customToken);
//     })
//     .catch((error) => {
//         console.log('Error creating ustom token:', error);
//     })


// // functions.region('us-east1')
// exports.getCustomToken = functions.https.onRequest(async (request, response) => {
//     // createCustomToken can only be used in server side
//     // https://stackoverflow.com/questions/39197279/firebase-auth-createcustomtoken-is-undefined-on-web-app

//     const options = {
//         // origin: 'http://localhost:5100'
//     }

//     return cors(options)(request, response, async () => {
//         if (request.method !== 'POST') {
//             return response.sendStatus(403);
//         }

//         if (!request.body.address) {
//             return response.sendStatus(400);
//         }

//         try {
//             // Create a custom token for the specified address
//             console.log('request address', request.body.address);

//             /**
//              * can include additional claims
//              * 
//              * const additionalClaims = {
//              *      premiumAccount: true,
//              * };
//              * 
//              * createCustomToken(uid, additionalClaims)
//              */

//             let firebaseToken = await admin.auth().createCustomToken(`${request.body.address}`);

//             if (firebaseToken) {
//                 // Return the token
//                 return response.status(200).json({ token: firebaseToken });

//             } else {

//                 // The signature could not be verified
//                 return response.sendStatus(401);
//             }
//         } catch (err) {
//             console.log(err);
//             return response.status(500).json({ code: err.code, message: err.message });
//         }
//     })

// });


// // export const setUserType = functions.https.onCall((data, context) => {
// //     // get user
// //     return firebaseAdmin.auth().getUserByEmail(data.email).then(user => {
// //         // add custom claim (uesrtype)
// //         return firebaseAdmin.auth().setCustomUserClaims(user.uid, {
// //             usertype: data.usertype
// //         });
// //     }).then(() => {
// //         return {
// //             message: `Success! Set ${data.email} usertype to ${data.usertype}`
// //         }
// //     }).catch(err => {
// //         return err;
// //     });
// // });


// const toHex = (stringToConvert) =>
//     stringToConvert
//         .split('')
//         .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
//         .join('');




