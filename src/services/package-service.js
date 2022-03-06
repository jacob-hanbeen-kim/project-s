import { collection, getDocs, getDoc, setDoc, updateDoc, addDoc, deleteDoc, doc } from 'firebase/firestore'
// firebase
import { db } from '../firbase-config';

const packageCollectionRef = collection(db, 'packages');

const getPackages = async () => {
    const data = await getDocs(packageCollectionRef);
    const pacakges = data.docs.map((doc) => ({ ...doc.data(), id: doc.id}));

    return pacakges;
}

const getPackageById = async (id) => {
    const packageDoc = doc(packageCollectionRef, id);
    const data = await getDoc(packageDoc);

    if (data.data()) {
        const pack = { ...data.data(), id: data.id };
        console.log('res', pack);
        return pack;
    } else {
        console.log({ ...data.data(), id: data.id });
        return false;
    }
}

const postPackage = async (fields) => {
    await addDoc(collection(db, 'packages'), fields);
    // const id = packageRef.id;
    // console.log(id);
    // const packageDoc = await setDoc(packageRef, id, fields);

    // console.log(packageDoc.data, packageDoc.id);
    console.log('test')
}

const putPackage = async (id, fields) => {
    const packageDoc = doc(packageCollectionRef, id);
    await updateDoc(packageDoc, fields);
    //setDoc
}

const deletePackage = async () => {

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

const PackageService = {
    getPackages,
    getPackageById,
    postPackage,
    putPackage,
    deletePackage,
    PackageFields,
}

export default PackageService