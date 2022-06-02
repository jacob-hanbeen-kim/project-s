/*
Cloud Functions 기본 사용법

npm run deploy -> firebase cloud functions에 배포
firebase emulators:start -> Emulator 작동. localhost로 cloud functions 테스트 가능. deploy하기 전 테스트 추천. 작동시키고 postman으로 http request testing.
*/

require('dotenv').config();

const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require(process.env._FIREBASE_SERVICEACCOUNTKEY_PATH);

// Firebase configuration - for Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env._FIREBASE_CONFIG_APIKEY,
  authDomain: process.env._FIREBASE_CONFIG_AUTHDOMAIN,
  projectId: process.env._FIREBASE_CONFIG_PROJECTID,
  storageBucket: process.env._FIREBASE_CONFIG_STORAGEBUCKET,
  messagingSenderId: process.env._FIREBASE_CONFIG_MESSAGINGSENDERID,
  appId: process.env._FIREBASE_CONFIG_APPID,
  measurementId: process.env._FIREBASE_CONFIG_MEASUREMENTID,
  credential: admin.credential.cert(serviceAccount),
};

// initialize Firebase
initializeApp(firebaseConfig);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

// import each cloud function in src folder
const getCustomTokenFunction = require("./src/getcustomtokenfunction");
const stripeServerFunction = require("./src/stripeserverfunction");
const dbServiceFunction = require("./src/dbservicefunction");
const migrateServiceFunction = require("./src/migrateservicefunction");

// Un-comment below to update! 
// ** Important: When it asks if you would like to proceed with deletion of these commented items, say No **

// exports.getCustomToken = getCustomTokenFunction.getCustomToken;
// exports.stripeServerApp = stripeServerFunction.stripeServerApp;
exports.dbServiceApp = dbServiceFunction.dbServiceFunctionApp;
exports.migrateServiceApp = migrateServiceFunction.migrateServiceFunctionApp;