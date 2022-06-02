console.log("Setting up firestore environment...");

require("dotenv").config({ path: require("find-config")(".env") });

const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("../ServiceAccountKey.json");

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
});

const {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  getFirestore,
  arrayRemove,
  arrayUnion,
} = require("firebase/firestore");

const db = getFirestore();
const DestinationCollection = ["sponsee", "sponsor", "agency"];

/* Change These */
const DestinationCollectionIndex = 1;
const userId = "0xe4436bac6ac98e27156FC597607485FEfeE23f8c";
const profileCollectionPath = `/users/${userId}/profile`;
/* */

async function asyncCall() {
  const profileCollectionRef = collection(db, profileCollectionPath);

  console.log("getting profile collection...");
  const profileDocsSnapshot = await getDocs(profileCollectionRef);

  const document = [];
  profileDocsSnapshot.forEach((doc) => {
    document.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  const profileDocRef = doc(profileCollectionRef, document[0].id);
  const profileDoc = await getDoc(profileDocRef);

  console.log("setting new profile collection document...");
  await setDoc(
    doc(db, DestinationCollection[DestinationCollectionIndex], userId),
    profileDoc.data()
  );
}

/* Run Script */
asyncCall();
console.log("Complete!");
