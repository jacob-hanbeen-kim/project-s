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
} = require("firebase/firestore");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const db = getFirestore();

const getUsers = async (req, res) => {
  try {
    const usersCollectionRef = collection(db, "users");
    const data = await getDocs(usersCollectionRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    res.status(200).send({
      status: "success",
      message: "fetched all users successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userDoc = doc(db, "users", id);
    const data = await getDoc(userDoc);
    if (data.data()) {
      const user = { ...data.data(), id: data.id };
      res.status(200).send({
        status: "success",
        message: "fetched user successfully",
        data: user,
      });
    } else {
      console.log({ ...data.data(), id: data.id });
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

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

const createProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const usersCollectionRef = collection(db, "users");
    const profileCollectionRef = collection(usersCollectionRef, id, "profile");
    await addDoc(profileCollectionRef, fields);
    res.status(200).send({
      status: "success",
      message: "created profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(
      collection(db, "users"),
      id,
      "profile"
    );
    const profileDocsSnapshot = await getDocs(profileCollectionRef);

    const document = [];
    profileDocsSnapshot.forEach((doc) => {
      document.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    const profileDocRef = doc(profileCollectionRef, document[0].id);
    const data = await getDoc(profileDocRef);
    if (data.data()) {
      const profile = { ...data.data(), id: data.id };
      res.status(200).send({
        status: "success",
        message: "fetched profile successfully",
        data: profile,
      });
    } else {
      console.log({ ...data.data(), id: data.id });
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updateProfile = async (req, res) => {
  const {
    body: { fields },
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(
      collection(db, "users"),
      id,
      "profile"
    );
    const profileDocsSnapshot = await getDocs(profileCollectionRef);

    const document = [];
    profileDocsSnapshot.forEach((doc) => {
      document.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    const profileDocRef = doc(profileCollectionRef, document[0].id);
    await updateDoc(profileDocRef, fields);
    res.status(200).send({
      status: "success",
      message: "updated profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const profileCollectionRef = collection(
      collection(db, "users"),
      id,
      "profile"
    );
    const profileDocsSnapshot = await getDocs(profileCollectionRef);

    const document = [];
    profileDocsSnapshot.forEach((doc) => {
      document.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    const profileDocRef = doc(profileCollectionRef, document[0].id);
    await deleteDoc(profileDocRef);
    res.status(200).send({
      status: "success",
      message: "deleted profile successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const app = express();
app.use(cors({ origin: true }));
app.get("/user/all", getUsers);
app.get("/user/:id", getUserById);
app.post("/user/:id", createUser);
app.put("/user/:id", updateUser);
app.delete("/user/:id", deleteUser);
app.get("/user/:id/profile", getProfile);
app.post("/user/:id/profile", createProfile);
app.put("/user/:id/profile", updateProfile);
app.delete("/user/:id/profile", deleteProfile);

exports.userServiceFunctionApp = functions.https.onRequest(app);
