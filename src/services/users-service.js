import { collection, getDocs, getDoc, query, where, setDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
// firebase
import { db } from '../firbase-config';

const getUsers = async (filter = null) => {
    const usersCollectionRef = collection(db, "users");

    if (filter) {
        const w = [];
        filter.forEach((f) => {
            w.push(f.key, '==', f.value);
        })
        usersCollectionRef = query(usersCollectionRef, w)
    }

    const data = await getDocs(usersCollectionRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users;
}

const getUserById = async (id) => {
    const userDoc = doc(db, "users", id);
    const data = await getDoc(userDoc);
    if (data.data()) {
        const user = { ...data.data(), id: data.id };
        console.log('res', user);
        return user;
    } else {
        console.log({ ...data.data(), id: data.id });
        return false;
    }
}

const createUser = async (id, fields) => {
    const userDoc = doc(db, "users", id);
    await setDoc(userDoc, fields);
}

const updateUser = async (id, fields) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, fields);
}

const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
}

class UserFields {
    fields = {}

    clear() {
        this.fields = {};
        return this;
    }

    setName(name) {
        this.fields['name'] = name;
        return this;
    }

    setEmail(email) {
        this.fields['email'] = email;
        return this;
    }

    setMembership(membership) {
        this.fields['membership'] = membership;
        return this;
    }

    setUsertype(usertype) {
        this.fields['usertype'] = usertype;
        return this;
    }

    setNonce(nonce) {
        this.fields['nonce'] = nonce;
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
    UserFields,
}

export default UserService;