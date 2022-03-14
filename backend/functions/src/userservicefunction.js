const {
  collection,
  getDocs,
  getDoc,
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

const app = express();
app.use(cors({ origin: true }));
app.get("/user/get/all", getUsers);
app.get("/user/get/:id", getUserById);
app.post("/user/create/:id", createUser);
app.patch("/user/update/:id", updateUser);
app.delete("/user/delete/:id", deleteUser);

exports.userServiceFunctionApp = functions.https.onRequest(app);
