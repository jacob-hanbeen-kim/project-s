// firebase
// const { initializeApp } = require("firebase/app");
// const { getFirestore } = require("firebase/firestore");
// const { getAuth } = require("firebase/auth");
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');

// Firebase configuration - for Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2VppbBbjkKiZWLkzbTiOCsyMp3syYjvw",
    authDomain: "project-s-backend.firebaseapp.com",
    projectId: "project-s-backend",
    storageBucket: "project-s-backend.appspot.com",
    messagingSenderId: "1024709888570",
    appId: "1:1024709888570:web:05a5e90adc5f62ffd04303",
    measurementId: "G-7ZMDCPVH4N",
    credential: admin.credential.cert(serviceAccount),
};

// Initialize Firebase
const app = admin.initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);