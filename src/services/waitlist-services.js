import { collection, getDocs, getDoc, setDoc, addDoc, doc, serverTimestamp } from 'firebase/firestore'
// firebase
import { db } from '../firebase-config';
const waitlistCollectionRef = collection(db, "waitlist");

const getWaitlist = async () => {
    const data = await getDocs(waitlistCollectionRef);
    const waitlist = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return waitlist;
}

const getWaitlistById = async (id) => {
    const waitlistDoc = doc(waitlistCollectionRef, id);
    const data = await getDoc(waitlistDoc);
    if (data.data()) {
        const waitlist = { ...data.data(), id: data.id };
        console.log('successfully fetched', waitlist);
        return waitlist;
    } else {
        console.log('failed to fetch', { ...data.data(), id: data.id });
        return false;
    }
}

const addToWaitlist = async (email) => {
    const waitlistDoc = doc(waitlistCollectionRef, email);
    return setDoc(waitlistDoc, {
        email: email,
        createdOn: serverTimestamp()
    }).then(() => {
        console.log('added successfully');
        return true;
    }).catch((e) => {
        console.log('failed to add', e);
        return false;
    });

    // return response;
    // return await addDoc(waitlistCollectionRef, {
    //     email: email,
    //     createdOn: serverTimestamp()
    // });
}

const WaitlistService = {
    getWaitlist,
    getWaitlistById,
    addToWaitlist,
}

export default WaitlistService;