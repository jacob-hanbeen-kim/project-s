import Web3 from 'web3';
import UserService from './users-service';
import { signInWithCustomToken, signOut, updateProfile } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions';
import { auth } from '../firbase-config';

//#region helper

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

            // Create User
            // Create an Auth user
            // Associate the nonce with that user
            signUp(address, 'someone', generatedNonce, 'sponsee', 'basic');

            return generatedNonce;
        }
    });
}

function verifySignedbody(address, sig, web3) {

    if (!address || !sig) {
        // return response.sendStatus(400);
        return {
            status: 400,
            body: "Error: Address or Signiture Not Found."
        };
    }

    return UserService.getUserById(address).then(async (user) => {
        console.log('verifySignedbody user', user);
        if (user) {
            // Get the nonce for this address
            console.log('verifySignedbody exist');
            const existingNonce = user?.nonce;
            const recoveredAddress = await web3.eth.personal.ecRecover(`0x${toHex(existingNonce)}`, sig);
            console.log('recover', recoveredAddress);

            // See if that matches the address the user is claiming the signature is from
            if (recoveredAddress === address?.toLowerCase()) {
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

                return {
                    status: 200,
                    body: "User Verified!"
                };
            } else {

                // The signature could not be verified
                // return response.sendStatus(401);
                return {
                    status: 401,
                    body: "Error: The signature could not be verified."
                };
            }

        } else {
            // return response.sendStatus(500);
            return {
                status: 500,
                body: "Error: User doc does not exist."
            };
        }
    }).catch((e) => {
        return {
            status: 500,
            body: `Error: ${e.body}`
        };
    });
}

function getCustomToken(address) {
    // const functions = getFunctions();
    // const gct = httpsCallable(functions, 'getCustomToken');
    // gct({ address: address })
    //     .then((result) => {
    //         console.log(result);
    //     })

    const baseUrl = "https://us-central1-project-s-backend.cloudfunctions.net";
    // const baseUrl = "http://localhost:5001/project-s-backend/us-central1";

    return fetch(`${baseUrl}/getCustomToken`,
        {
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                address: address
            })
        }
    ).then(response => response.json()
    ).then(data => {
        // return `Bearer ${data.token}`
        return data.token;
    });
}

const toHex = (stringToConvert) =>
    stringToConvert
        .split('')
        .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');

//#endregion helper

async function signInWithMetaMask() {

    try {
        // Step 1: Request (limited) access to user's ethereum account
        const provider = detectProvider();
        if (!provider) {
            return {
                status: 400,
                body: 'Error: Metamask Not Found. Please install Metamask'
            }
        }

        if (provider !== window.ethereum) {
            return {
                status: 400,
                body: 'Error: Not Ethereum Provider. Do you have multiple wallet installed?'
            }
        }

        await provider.request({
            method: "eth_requestAccounts",
        });

        // get accounts
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();

        if (accounts.length === 0) {
            return {
                status: 400,
                body: 'Error: Please connect to MetaMask!'
            }
        }

        // Step 2: Retrieve the current nonce for the requested address
        const nonce = await getNonceToSign(accounts[0]);
        console.log('nonce', nonce);

        // // Step 3: Get the user to sign the nonce with their private key
        const signature = await provider.request({
            method: 'personal_sign',
            params: [
                `0x${toHex(nonce)}`,
                accounts[0]
            ]
        })

        console.log(signature);

        // // Step 4: Check if the signature is valid
        const verificationResponse = await verifySignedbody(accounts[0], signature, web3);

        if (verificationResponse.status === 200) {

            // Step 5: Retrieve a custom auth token for Firebase
            // Create a custom token for the specified address
            const token = await getCustomToken(accounts[0])
            console.log('token', token);

            // Step 6: Use the auth token to auth with Firebase
            const userCredential = await signInWithCustomToken(auth, token);
            console.log(userCredential.user)
            return userCredential.user;
        } else {
            return verificationResponse;
        }
    } catch (error) {
        console.log('here', error);
        return {
            status: 500,
            body: error
        }
    }

}

function signOutOfFirebase() {
    return signOut(auth).then(() => {
        // Sign out successful
        return { status: 200, body: 'sign out succesful' };
    }).catch((error) => {
        // An error happened
        return { status: 500, body: error };
    })
}

const update = (user, fields) => {
    updateProfile(user, fields);
}

const signUp = (address, name, nonce, usertype, membership) => {
    // Create an Auth user
    // Associate the nonce with that user
    const userFields = new UserService.UserFields();
    UserService.createUser(address,
        userFields
            .setName(name)
            .setNonce(nonce)
            .setUsertype(usertype)
            .setMembership(membership)
            .getFields()
    )
}


export const AuthServices = {
    signInWithMetaMask,
    signOutOfFirebase,
    update,
    signUp
}