import { collection, getDocs, getDoc, setDoc, updateDoc, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config';

const userPackageRef = collection(db, "userPackage");

const getUserPackage = async(userId) => {
    const subPackageDoc = collection(userPackageRef, userId, "packages");
    const data = await getDocs(subPackageDoc);
    const packages = data.docs.map((doc) => ({ ...doc.data(), userId: doc.userId}));
    console.log(packages)
    // return packages
}

// const getUserPackageById = async (id) => {
//     const userPackageDoc = doc(db, "userPackage", id, package);
//     const data = await getDoc(userPackageDoc);
// }

const postUserPackage = async (userId, pack) => {
    
    const packageSubcollectionRef = collection(userPackageRef, userId, "packages");
    const docu = await addDoc(packageSubcollectionRef, pack)

    return docu.id
}

const deleteUserPackage = async (userId, package_id) => {
    const packageDoc = doc(userPackageRef, userId, 'package', package_id);
    await deleteDoc(packageDoc)
}

class PackageFields {
    fields = {}

    clear() {
        this.fields = {};
        return this;
    }

    setTitle(title) {
        this.fields['title'] = title;
        return this;
    }

    setPrice(price) {
        this.fields['price'] = price;
        return this;
    }

    setDescription(description) {
        this.fields['decriptions'] = description;
        return this;
    }
}
export const packageFields = new PackageFields();

const UserPackageService = {
    getUserPackage,
    // getUserPackageById,
    postUserPackage,
    deleteUserPackage
}

export default UserPackageService