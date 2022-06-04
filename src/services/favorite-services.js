import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

const getFavorites = async (id) => {
  const userDoc = doc(db, "users", id);
  const userSnap = await getDoc(userDoc);
  const userFavoriteArray = await userSnap.get("favorites");

  var responseArray = await Promise.all(
    userFavoriteArray.map((x) => {
      return getDoc(x);
    })
  );

  var result = [];
  responseArray.forEach((doc) => {
    result.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return result;
};

const FavoriteService = {
  getFavorites,
};

export default FavoriteService;
