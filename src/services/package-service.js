import { collection, getDocs, getDoc, setDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
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
        const package = { ...data.data(), id: data.id };
        console.log('res', package);
        return package;
    } else {
        console.log({ ...data.data(), id: data.id });
        return false;
    }
}

const postPackage = async (fields) => {
    const packageRef = await addDoc(packageCollectionRef);
    const id = packageRef.id;

    const packageDoc = await setDoc(packageRef, id, fields);

    console.log(packageDoc.data, packageDoc.id);
}

const putPackage = (id, fields) => {
    const packageDoc = doc(packageCollectionRef, id);
    await updateDoc(packageDoc, fields);
    //setDoc
}

export class PackageFields {
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

export const PackageService = {
    getPackages,
    getPackageById,
    postPackage,
    putPackage
}