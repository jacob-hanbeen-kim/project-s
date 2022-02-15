const functions = require('firebase-functions');
const admin = require('firebase-admin')
const serviceAccount = require('./ServiceAccountKey.json');
// const corsLib = require('cors');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// const uid = 'some-uid';
// admin.auth().createCustomToken(uid)
//     .then((customToken) => {
//         console.log(customToken);
//     })
//     .catch((error) => {
//         console.log('Error creating ustom token:', error);
//     })

exports.getCustomToken = functions.https.onRequest(async (request, response) => {
    // createCustomToken can only be used in server side
    // https://stackoverflow.com/questions/39197279/firebase-auth-createcustomtoken-is-undefined-on-web-app

    if (request.method !== 'POST') {
        return response.sendStatus(403);
    }

    if (!request.body.address) {
        return response.sendStatus(400);
    }

    try {
        // Create a custom token for the specified address
        console.log(request.body.address);

        /**
         * can include additional claims
         * 
         * const additionalClaims = {
         *      premiumAccount: true,
         * };
         * 
         * createCustomToken(uid, additionalClaims)
         */
        const firebaseToken = await admin.auth().createCustomToken(`${request.body.address}`);

        if (firebaseToken) {
            // Return the token
            return response.status(200).json({ token: firebaseToken });

        } else {

            // The signature could not be verified
            return response.sendStatus(401);
        }
    } catch (err) {
        console.log(err);
        return response.status(500).json({ code: err.code, message: err.message });
    }
});


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