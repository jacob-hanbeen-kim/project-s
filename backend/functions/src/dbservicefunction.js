const {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  getFirestore,
  arrayRemove,
  arrayUnion,
} = require("firebase/firestore");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const db = getFirestore();

const createUser = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const userDoc = doc(db, "users", id);
    await setDoc(userDoc, fields);
    res.status(200).send({
      status: "success",
      message: "created user successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, fields);
    res.status(200).send({
      status: "success",
      message: "updated user successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    res.status(200).send({
      status: "success",
      message: "deleted user successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createSponsorProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const sponsorCollectionRef = collection(db, "sponsor");
    const sponsorDoc = doc(sponsorCollectionRef, id);
    await addDoc(sponsorDoc, fields);
    res.status(200).send({
      status: "success",
      message: "created sponsor profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createSponseeProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const sponseeCollectionRef = collection(db, "sponsee");
    const sponseeDoc = doc(sponseeCollectionRef, id);
    await addDoc(sponseeDoc, fields);
    res.status(200).send({
      status: "success",
      message: "created sponsee profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createAgencyProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const agencyCollectionRef = collection(db, "agency");
    const agencyDoc = doc(agencyCollectionRef, id);
    await addDoc(agencyDoc, fields);
    res.status(200).send({
      status: "success",
      message: "created agency profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateSponsorProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(db, "sponsor");
    const profileDocRef = doc(profileCollectionRef, id);
    await updateDoc(profileDocRef, fields);
    res.status(200).send({
      status: "success",
      message: "updated sponsor profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateSponseeProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(db, "sponsee");
    const profileDocRef = doc(profileCollectionRef, id);
    await updateDoc(profileDocRef, fields);
    res.status(200).send({
      status: "success",
      message: "updated sponsee profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateAgencyProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(db, "agency");
    const profileDocRef = doc(profileCollectionRef, id);
    await updateDoc(profileDocRef, fields);
    res.status(200).send({
      status: "success",
      message: "updated agency profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteSponsorProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(db, "sponsor");
    const profileDocRef = doc(profileCollectionRef, id);
    await deleteDoc(profileDocRef);
    res.status(200).send({
      status: "success",
      message: "deleted sponsor profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteSponseeProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(db, "sponsee");
    const profileDocRef = doc(profileCollectionRef, id);
    await deleteDoc(profileDocRef);
    res.status(200).send({
      status: "success",
      message: "deleted sponsee profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteAgencyProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(db, "agency");
    const profileDocRef = doc(profileCollectionRef, id);
    await deleteDoc(profileDocRef);
    res.status(200).send({
      status: "success",
      message: "deleted agency profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const addFavorite = async (req, res) => {
  const {
    params: { id, incomingId },
  } = req;
  try {
    const userDocRef = doc(db, "users", id);
    await updateDoc(userDocRef, {
      favorites: arrayUnion(doc(db, "users", incomingId)),
    });
    res.status(200).send({
      status: "success",
      message: "added user's favorite successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const removeFavorite = async (req, res) => {
  const {
    params: { id, incomingId },
  } = req;
  try {
    const userDocRef = doc(db, "users", id);
    await updateDoc(userDocRef, {
      favorites: arrayRemove(doc(db, "users", incomingId)),
    });

    res.status(200).send({
      status: "success",
      message: "removed user's favorite successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const app = express();
app.use(cors({ origin: true }));

/* 
Note

All "Get" requests will not reside in cloud functions due to latency.
All "Get" request will be performed directly on Client side through Firestore SDK.

For example, all user getters will reside in users-service.js
*/

/* User API */
app.post("/user/:id", createUser);
app.put("/user/:id", updateUser);
app.delete("/user/:id", deleteUser);

/* Profile API */
app.post("/profile/sponsor/:id", createSponsorProfile);
app.post("/profile/sponsee/:id", createSponseeProfile);
app.post("/profile/agency/:id", createAgencyProfile);
app.put("/profile/sponsor/:id", updateSponsorProfile);
app.put("/profile/sponsee/:id", updateSponseeProfile);
app.put("/profile/agency/:id", updateAgencyProfile);
app.delete("/profile/sponsor/:id", deleteSponsorProfile);
app.delete("/profile/sponsee/:id", deleteSponseeProfile);
app.delete("/profile/agency/:id", deleteAgencyProfile);

/* Favorite API */
app.put("/user/:id/favorite/:incomingId", addFavorite);
app.delete("/user/:id/favorite/:incomingId", removeFavorite);

/* Cloud Function Export */
exports.dbServiceFunctionApp = functions.https.onRequest(app);
