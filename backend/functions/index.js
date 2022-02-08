const functions = require("firebase-functions");
const firebaseAdmin = require('firebase-admin')
const corsLib = require('cors');


const admin = firebaseAdmin.initializeApp();

const cors = corsLib({ origin: true });

export const getNonceToSign = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        try {
            if (request.method !== 'POST') {
                return response.sendStatus(403);
            }

            if (!request.body.address) {
                return response.sendStatus(400);
            }

            const address = request.body.address;

            // Get the user document for that address
            const userDocRef = admin.firestore().collection('users').doc(address);
            const userDoc = await userDocRef.get();

            if (userDoc.exists) {
                // The user document exists already, so just return the nonce
                const existingNonce = userDoc.data()?.nonce;

                return response.status(200).json({ nonce: existingNonce });

            } else {
                // The user document does not exist, create it first
                const generatedNonce = Math.floor(Math.random() * 1000000).toString();

                // Create an Auth user
                const createdUser = await admin.auth().createUser({
                    uid: request.body.address,
                });

                // Associate the nonce with that user
                await admin.firestore().collection('users').doc(createdUser.uid).set({
                    nonce: generatedNonce,
                });

                return response.status(200).json({ nonce: generatedNonce });
            }
        } catch (err) {
            console.log(err);
            return response.sendStatus(500);
        }
    })
})

export const verifySignedMessage = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        try {
            if (request.method !== 'POST') {
                return response.sendStatus(403);
            }

            if (!request.body.address || !request.body.signature) {
                return response.sendStatus(400);
            }

            const address = request.body.address;
            const sig = request.body.signature;

            // Get the nonce for this address
            const userDocRef = admin.firestore().collection('users').doc(address);
            const userDoc = await userDocRef.get();

            if (userDoc.exists) {
                const existingNonce = userDoc.data()?.nonce;
                // Recover the address of the account used to create the given Ethereum signature.
                const recoveredAddress = recoverPersonalSignature({
                    data: `0x${toHex(existingNonce)}`,
                    signature: sig,
                });

                // See if that matches the address the user is claiming the signature is from
                if (recoveredAddress === address) {
                    // The signature was verified - update the nonce to prevent replay attacks

                    // update nonce
                    await userDocRef.update({
                        nonce: Math.floor(Math.random() * 1000000).toString(),
                    });

                    // Create a custom token for the specified address
                    const firebaseToken = await admin.auth().createCustomToken(address);

                    // Return the token
                    return response.status(200).json({ token: firebaseToken });

                } else {

                    // The signature could not be verified
                    return response.sendStatus(401);
                }
            } else {
                console.log('user doc does not exist');
                return response.sendStatus(500);
            }
        } catch (err) {
            console.log(err);
            return response.sendStatus(500);
        }
    })
})


export const setUserType = functions.https.onCall((data, context) => {
    // get user
    return firebaseAdmin.auth().getUserByEmail(data.email).then(user => {
        // add custom claim (uesrtype)
        return firebaseAdmin.auth().setCustomUserClaims(user.uid, {
            usertype: data.usertype
        });
    }).then(() => {
        return {
            message: `Success! Set ${data.email} usertype to ${data.usertype}`
        }
    }).catch(err => {
        return err;
    });
});


const toHex = (stringToConvert) =>
    stringToConvert
        .split('')
        .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');