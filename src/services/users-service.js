import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config";

const getUsers = async (filter = null) => {
  let usersCollectionRef = collection(db, "users");

  /* 
    Filter example

    {
        "membership": "basic",
        "userstype:" sponsor"
    }

    */
  if (filter) {
    var i = Object.keys(filter).length;
    var key;
    var value;
    while (i > 0) {
      key = Object.keys(filter)[i - 1];
      value = filter[key].toLowerCase();
      console.log(key, value);
      usersCollectionRef = query(usersCollectionRef, where(key, "==", value));
      i--;
    }
  }

  const data = await getDocs(usersCollectionRef);
  const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return users;
};

const getUserById = async (id) => {
  const userDoc = doc(db, "users", id);
  const data = await getDoc(userDoc);
  if (data.data()) {
    const user = { ...data.data(), id: data.id };
    console.log("res", user);
    return user;
  } else {
    console.log({ ...data.data(), id: data.id });
    return false;
  }
};

const getAllSponsorUsers = async () => {
  const usersCollectionRef = collection(db, "users");
  const data = await getDocs(usersCollectionRef);
  const sponsors = data.docs
    .filter((x) => x.data().usertype == "sponsor")
    .map((doc) => ({ ...doc.data(), id: doc.id }));
  return sponsors;
};

const getAllSponseeUsers = async () => {
  const usersCollectionRef = collection(db, "users");
  const data = await getDocs(usersCollectionRef);
  const sponsees = data.docs
    .filter((x) => x.data().usertype == "sponsee")
    .map((doc) => ({ ...doc.data(), id: doc.id }));
  return sponsees;
};

const getAllAgencyUsers = async () => {
  const usersCollectionRef = collection(db, "users");
  const data = await getDocs(usersCollectionRef);
  const agencies = data.docs
    .filter((x) => x.data().usertype == "agency")
    .map((doc) => ({ ...doc.data(), id: doc.id }));
  return agencies;
};

const getAllSponsorProfiles = async () => {
  const profileCollectionRef = collection(db, "sponsor");
  const data = await getDocs(profileCollectionRef);
  const sponsors = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return sponsors;
};

const getAllSponseeProfiles = async () => {
  const profileCollectionRef = collection(db, "sponsee");
  const data = await getDocs(profileCollectionRef);
  const sponsees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return sponsees;
};

const getAllAgencyProfiles = async () => {
  const profileCollectionRef = collection(db, "agency");
  const data = await getDocs(profileCollectionRef);
  const agencies = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return agencies;
};

const getSponsorProfile = async (id) => {
  const profileCollectionRef = collection(db, "sponsor");
  const profileDocRef = doc(profileCollectionRef, id);
  const data = await getDoc(profileDocRef);
  const profile = { ...data.data(), id: data.id };
  return profile;
};

const getSponseeProfile = async (id) => {
  const profileCollectionRef = collection(db, "sponsee");
  const profileDocRef = doc(profileCollectionRef, id);
  const data = await getDoc(profileDocRef);
  const profile = { ...data.data(), id: data.id };
  return profile;
};

const getAgencyProfile = async (id) => {
  const profileCollectionRef = collection(db, "agency");
  const profileDocRef = doc(profileCollectionRef, id);
  const data = await getDoc(profileDocRef);
  const profile = { ...data.data(), id: data.id };
  return profile;
};

const createUser = async (id, fields) => {
  const userDoc = doc(db, "users", id);
  await setDoc(userDoc, fields);
};

const updateUser = async (id, fields) => {
  const userDoc = doc(db, "users", id);
  await updateDoc(userDoc, fields);
};

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};

class UserFields {
  fields = {};

  clear() {
    this.fields = {};
    return this;
  }

  setMembership(membership) {
    this.fields["membership"] = membership;
    return this;
  }

  setUsertype(usertype) {
    this.fields["usertype"] = usertype;
    return this;
  }

  setNonce(nonce) {
    this.fields["nonce"] = nonce;
    return this;
  }

  setFavorites(favorites) {
    this.fields["favorites"] = favorites;
    return this;
  }

  getFields() {
    return this.fields;
  }
}
export const userFields = new UserFields();

const UserService = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllSponsorUsers,
  getAllSponseeUsers,
  getAllAgencyUsers,
  getAllSponsorProfiles,
  getAllSponseeProfiles,
  getAllAgencyProfiles,
  getSponsorProfile,
  getSponseeProfile,
  getAgencyProfile,
  UserFields,
};

export default UserService;

/* Outdated Methods */

// const getAllSponsor = () => {
//   const baseUrl =
//     "https://us-central1-project-s-backend.cloudfunctions.net/userServiceApp";

//   return fetch(`${baseUrl}/user/sponsor/all`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // return `Bearer ${data.token}`
//       console.log("get all sponsee", data);
//       return data;
//     })
//     .catch((err) => {
//       // Do something for an error here
//       console.log("Error Reading data " + err);
//     });
// };

// const getAllSponsee = () => {
//   const baseUrl =
//     "https://us-central1-project-s-backend.cloudfunctions.net/userServiceApp";

//   return fetch(`${baseUrl}/user/sponsee/all`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // return `Bearer ${data.token}`
//       console.log("get all sponsee", data);
//       return data;
//     })
//     .catch((err) => {
//       // Do something for an error here
//       console.log("Error Reading data " + err);
//     });
// };

// const getAllAgent = () => {
//   const baseUrl =
//     "https://us-central1-project-s-backend.cloudfunctions.net/userServiceApp";

//   return fetch(`${baseUrl}/user/agency/all`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // return `Bearer ${data.token}`
//       console.log("get all sponsee", data);
//       return data;
//     })
//     .catch((err) => {
//       // Do something for an error here
//       console.log("Error Reading data " + err);
//     });
// };

// const getUserProfiles = async (filter = null) => {
//   let users = await getUsers();
//   console.log("users", users);
//   const profiles = [];
//   users.forEach(async (user) => {
//     const profileCollectionRef = collection(db, "users", user.id, "profile");
//     const data = await getDocs(profileCollectionRef);
//     const profile = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0];
//     profile && profiles.push(profile);
//   });

//   return profiles;
// };
