const {
  collection,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
  getFirestore,
} = require("firebase/firestore");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const db = getFirestore();

/* 
Migration API

Renames initialUserId's (1) user document id and (2) profile document id to its 'firstName + lastName'.

@params
initialUserId (string): user id to migrate from. usually a person's wallet address.
userType (string): type of user. lowercased.[sponsee, sponsor, agency]
 */
const migrateUserIdToFirstAndLastNameAsync = async (req, res) => {
  const {
    params: { initialUserId, userType },
  } = req;
  try {
    console.log("Begin Migration!");

    // pre-setting db paths
    const userDocumentPath = `/users/${initialUserId}`;
    const profileDocumentPath = `/${userType}/${initialUserId}`;

    // get old user doc reference and profile doc reference
    console.log("get old user doc reference and profile doc reference");
    const userDocRef = doc(db, userDocumentPath);
    const profileDocRef = doc(db, profileDocumentPath);

    // get old user doc snapshot data and old profile doc snapshot data
    console.log(
      "get old user doc snapshot data and old profile doc snapshot data"
    );
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();
    const profileDocSnapshot = await getDoc(profileDocRef);
    const profileData = profileDocSnapshot.data();

    // create a temporary user id for this user
    const tempUserId = `${profileData.firstName}` + `${profileData.lastName}`;

    // create new user document with temp userid
    console.log("create new user document with temp userid");
    const userCollectionRef = collection(db, "users");
    const newUserDoc = doc(userCollectionRef, tempUserId);
    await setDoc(newUserDoc, userData);

    // create new profile document with temp userid
    console.log("create new profile document with temp userid");
    const profileCollectionRef = collection(db, userType);
    const newProfileDoc = doc(profileCollectionRef, tempUserId);
    await setDoc(newProfileDoc, profileData);

    // delete old user document
    console.log("delete old user document");
    await deleteDoc(userDocRef);

    // delete old profile document
    console.log("delete old profile document");
    await deleteDoc(profileDocRef);

    console.log("Migration Complete!");

    res.status(200).send({
      status: "success",
      message: "Migrated user document and profile document successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

/* Express app */
const app = express();
app.use(cors({ origin: true }));

/* Migration API */
app.put(
  "/migrate/:initialUserId/:userType",
  migrateUserIdToFirstAndLastNameAsync
);

/* Cloud Function Export */
exports.migrateServiceFunctionApp = functions.https.onRequest(app);
