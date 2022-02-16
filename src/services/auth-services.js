import Web3 from 'web3';
import UserService from './users-service';
import { getAuth, signInWithCustomToken, signOut, updateProfile } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions';

const detectProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        window.alert("No Ethereum browser detected! Check out MetaMask");
    }
    return provider;
};

function getNonceToSign(address) {
    console.log('id', address);
    return UserService.getUserById(address).then((user) => {
        console.log('user', user);
        if (user) {
            // The user document exists already, so just return the nonce
            console.log('exist');
            const existingNonce = user?.nonce;
            return existingNonce;
        } else {
            console.log('create');
            // The user document does not exist, create it first
            const generatedNonce = Math.floor(Math.random() * 1000000).toString();

            // Create an Auth user
            // Associate the nonce with that user
            const userFields = new UserService.UserFields();
            UserService.createUser(address,
                userFields
                    .setName('someone')
                    .setNonce(generatedNonce)
                    .setUsertype('sponsee')
                    .setMembership('basic')
                    .getFields()
            )

            return generatedNonce;
        }
    });
}

function verifySignedMessage(address, sig, web3) {

    if (!address || !sig) {
        // return response.sendStatus(400);
        return false;
    }

    return UserService.getUserById(address).then(async (user) => {
        console.log('verifySignedMessage user', user);
        if (user) {
            // Get the nonce for this address
            console.log('verifySignedMessage exist');
            const existingNonce = user?.nonce;

            // Recover the address of the account used to create the given Ethereum signature.
            // const recoveredAddress = recoverPersonalSignature({
            //     data: `0x${toHex(existingNonce)}`,
            //     signature: sig,
            // });

            const recoveredAddress = await web3.eth.personal.ecRecover(`0x${toHex(existingNonce)}`, sig);
            console.log('recover', recoveredAddress);

            // See if that matches the address the user is claiming the signature is from
            if (recoveredAddress === address.toLowerCase()) {
                // The signature was verified - update the nonce to prevent replay attacks

                // update nonce
                const generatedNonce = Math.floor(Math.random() * 1000000).toString();
                console.log('verify nonce', generatedNonce);

                const userFields = new UserService.UserFields();
                await UserService.updateUser(address,
                    userFields
                        .setNonce(generatedNonce)
                        .getFields()
                )
                console.log('updated');

                return true;
            } else {

                // The signature could not be verified
                // return response.sendStatus(401);
                console.log('The signature could not be verified');
                return false;
            }

        } else {
            console.log('user doc does not exist');
            // return response.sendStatus(500);
            return false;
        }
    });
}

function getCustomToken(address) {
    const functions = getFunctions();
    const gct = httpsCallable(functions, 'getCustomToken');
    gct({ address: address })
        .then((result) => {
            console.log(result);
        })
}

const toHex = (stringToConvert) =>
    stringToConvert
        .split('')
        .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');

async function signInWithMetaMask() {

    // Step 1: Request (limited) access to user's ethereum account
    const provider = detectProvider();
    if (!provider) {
        throw new Error('Please install MetaMask');
    }

    if (provider !== window.ethereum) {
        throw new Error("Not Ethereum Provider. Do you have multiple wallet installed?");
    }

    await provider.request({
        method: "eth_requestAccounts",
    });

    // get accounts
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    if (accounts.length === 0) {
        console.log("Please connect to MetaMask!");
    }

    return accounts[0];

    // Step 2: Retrieve the current nonce for the requested address

    // const nonce = await getNonceToSign(accounts[0]);
    // // const nonce = await getNonceToSign(provider.selectedAddress);

    // console.log(nonce);

    // // Step 3: Get the user to sign the nonce with their private key

    // const signature = await provider.request({
    //     method: 'personal_sign',
    //     params: [
    //         `0x${toHex(nonce)}`,
    //         // ethereum.selectedAddress
    //         accounts[0]
    //     ]
    // })

    // console.log(signature);

    // // Step 4: Check if the signature is valid

    // const isVerified = await verifySignedMessage(accounts[0], signature, web3);

    // if (isVerified) {

    //     // Step 5: Retrieve a custom auth token for Firebase
    //     // Create a custom token for the specified address
    //     const token = getCustomToken(accounts[0])
    //     // post(
    //     //     'https://us-central1-project-s-backend.cloudfunctions.net/getCustomToken',
    //     //     {
    //     //         address: accounts[0]
    //     //     }
    //     // )

    //     // Step 6: Use the auth token to auth with Firebase

    //     // const userCredential = await getAuth().signInWithCustomToken(token);
    //     const userCredential = await signInWithCustomToken(token);
    //     return userCredential.user;
    // }

    return false;
}


function signOutOfFirebase() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign out successful
    }).catch((error) => {
        // An error happened
    })
}

const update = (user, fields) => {
    updateProfile(user, fields);
}


export const AuthServices = {
    signInWithMetaMask,
    signOutOfFirebase,
    update
}