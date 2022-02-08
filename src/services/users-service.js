import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const usersCollectionRef = collection(db, "users");

export const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);

    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users;
}

export const createUser = async = (name, email, usertype) => {
    const fields = {
        name: name,
        email: email,
        membership: 'basic',
        usertype: usertype
    }
    await addDoc(usersCollectionRef, fields);
}

export const updateUser = async = (id, name, email, membership, usertype) => {
    const userDoc = doc(db, "users", id);
    const fields = {
        name: name,
        email: email,
        membership: 'basic',
        usertype: usertype
    }
    await updateDoc(userDoc, fields);
}

export const deleteUser = async = (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
}