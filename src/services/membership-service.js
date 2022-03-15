import { collection, getDocs, query, orderBy } from 'firebase/firestore'
// firebase
import { db } from '../firbase-config';

const getMemberships = async () => {
    let membershipRef = collection(db, "membership");
    const q = query(membershipRef, orderBy("monthly_price"));
    const data = await getDocs(q);
    const memberships = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return memberships;
}

export const MembershipService = {
    getMemberships
}