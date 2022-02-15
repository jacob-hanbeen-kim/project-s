// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth"

// Firebase configuration - for Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2VppbBbjkKiZWLkzbTiOCsyMp3syYjvw",
    authDomain: "project-s-backend.firebaseapp.com",
    projectId: "project-s-backend",
    storageBucket: "project-s-backend.appspot.com",
    messagingSenderId: "1024709888570",
    appId: "1:1024709888570:web:05a5e90adc5f62ffd04303",
    measurementId: "G-7ZMDCPVH4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = app.auth();
