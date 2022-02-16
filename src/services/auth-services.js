import Web3 from 'web3';
import UserService from './users-service';
import { signInWithCustomToken, signOut, updateProfile } from 'firebase/auth'
import { getFunctions, httpsCallable } from 'firebase/functions';
import { auth } from '../firbase-config';

//#region helper

const CustomException = (message, code) => {
    const error = new Error(message);
    error.code = code;
    throw error;
}

const detectProvider = () => {
    let provider;
    if (window.ethereum) {
        provider = window.ethereum;
    } else if (window.web3) {
        provider = window.web3.currentProvider;
    } else {
        throw CustomException('No Ethereum browser detected! Check out MetaMask');
    }

    if (!provider) {
        throw CustomException('Metamask Not Found. Please install Metamask');
    }

    if (provider !== window.ethereum) {
        throw CustomException('Not Ethereum Provider. Do you have multiple wallet installed?');
    }

    return provider;
};

async function getUser(address) {
    const user = await UserService.getUserById(address);

    if (user === null) {
        throw CustomException('User does not exist', 'USER_NOT_EXIST');
    }

    return user;
}

async function verifySignedbody(user, sig, web3) {

    if (user === null || !sig) {
        // return response.sendStatus(400);
        throw CustomException("Error: User or Signiture Not Found.");
    }

    try {
        // Recover Address for signature
        const recoveredAddress = await web3.eth.personal.ecRecover(`0x${toHex(user.nonce)}`, sig);
        console.log('recover', recoveredAddress);

        // See if that matches the address the user is claiming the signature is from
        if (recoveredAddress === user.id.toLowerCase()) {
            // The signature was verified - update the nonce to prevent replay attacks

            // update nonce
            const generatedNonce = Math.floor(Math.random() * 1000000).toString();
            console.log('verify nonce', generatedNonce);

            const userFields = new UserService.UserFields();
            await UserService.updateUser(user.id,
                userFields
                    .setNonce(generatedNonce)
                    .getFields()
            )

            return true
        } else {

            // The signature could not be verified
            // return response.sendStatus(401);
            throw CustomException("Error: The signature could not be verified.");
        }
    } catch (error) {
        throw CustomException(error);
    }
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

        await provider.request({
            method: "eth_requestAccounts",
        });

        // get accounts
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();

        if (accounts.length === 0) {
            throw CustomException('Error: Please connect to MetaMask!');
        }

        // Step 2: Retrieve the current nonce for the requested address
        const user = await getUser(accounts[0]);

        const nonce = user.nonce
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
        const isVerified = await verifySignedbody(user, signature, web3);

        if (isVerified) {
            // Step 5: Retrieve a custom auth token for Firebase
            // Create a custom token for the specified address
            const token = await getCustomToken(accounts[0])
            console.log('token', token);

            // Step 6: Use the auth token to auth with Firebase
            const userCredential = await signInWithCustomToken(auth, token);
            console.log(userCredential.user)
            return userCredential.user;
        }
    } catch (error) {
        if (error.code === 4001) {
            console.log('denied signature');
        }

        if (error.code === 'USER_NOT_EXIST') {
            console.log('sign up new user');
        }

        return error;
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

const signUp = (address, name, usertype, membership) => {
    // Generate nonce
    const nonce = Math.floor(Math.random() * 1000000).toString();

    // Create an new user
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