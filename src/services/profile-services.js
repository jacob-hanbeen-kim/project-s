import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

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

class SponsorFields {
  fields = {};

  clear() {
    this.fields = {};
    return this;
  }

  setRepresentativeFirstName(representativeFirstName) {
    this.fields["representativeFirstName"] = representativeFirstName;
    return this;
  }
  setRepresentativeLastName(representativeLastName) {
    this.fields["representativeLastName"] = representativeLastName;
    return this;
  }

  setEmail(email) {
    this.fields["email"] = email;
    return this;
  }

  setBudget(budget) {
    this.fields["budget"] = budget;
    return this;
  }

  setCompanyName(companyName) {
    this.fields["companyName"] = companyName;
    return this;
  }

  setEstimatedTimeframe(estimatedTimeframe) {
    this.fields["estimatedTimeframe"] = estimatedTimeframe;
    return this;
  }

  setIndustry(industry) {
    this.fields["industry"] = industry;
    return this;
  }

  setInterestedDeal(interestedDeal) {
    this.fields["interestedDeal"] = interestedDeal;
    return this;
  }

  setInterestedSport(interestedSport) {
    this.fields["interestedSport"] = interestedSport;
    return this;
  }

  setLocation(location) {
    this.fields["location"] = location;
    return this;
  }

  setWebsite(website) {
    this.fields["website"] = website;
    return this;
  }

  setRevenue(revenue) {
    this.fields["revenue"] = revenue;
    return this;
  }

  getFields() {
    return this.fields;
  }
}
export const sponsorFields = new SponsorFields();

class SponseeFields {
  fields = {};

  clear() {
    this.fields = {};
    return this;
  }

  setFirstName(FirstName) {
    this.fields["FirstName"] = FirstName;
    return this;
  }
  setLastName(LastName) {
    this.fields["LastName"] = LastName;
    return this;
  }

  setEmail(email) {
    this.fields["email"] = email;
    return this;
  }

  setAssociation(association) {
    this.fields["association"] = association;
    return this;
  }

  setAgency(agency) {
    this.fields["agency"] = agency;
    return this;
  }

  setFundingGoal(fundingGoal) {
    this.fields["fundingGoal"] = fundingGoal;
    return this;
  }

  setHasAgency(hasAgency) {
    this.fields["hasAgency"] = hasAgency;
    return this;
  }

  setMobile(mobile) {
    this.fields["mobile"] = mobile;
    return this;
  }

  setOccupation(occupation) {
    this.fields["occupation"] = occupation;
    return this;
  }

  setSponsorshipWishList(sponsorshipWishList) {
    this.fields["sponsorshipWishList"] = sponsorshipWishList;
    return this;
  }

  setSport(sport) {
    this.fields["sport"] = sport;
    return this;
  }

  getFields() {
    return this.fields;
  }
}
export const sponseeFields = new SponseeFields();

class AgencyFields {
  fields = {};

  clear() {
    this.fields = {};
    return this;
  }

  setFirstName(FirstName) {
    this.fields["FirstName"] = FirstName;
    return this;
  }
  setLastName(LastName) {
    this.fields["LastName"] = LastName;
    return this;
  }

  setEmail(email) {
    this.fields["email"] = email;
    return this;
  }

  setClients(clients) {
    this.fields["clients"] = clients;
    return this;
  }

  setFlatRate(flatRate) {
    this.fields["flatRate"] = flatRate;
    return this;
  }

  setInterestedDeal(interestedDeal) {
    this.fields["interestedDeal"] = interestedDeal;
    return this;
  }

  setPayType(payType) {
    this.fields["payType"] = payType;
    return this;
  }

  getFields() {
    return this.fields;
  }
}
export const agencyFields = new AgencyFields();

const ProfileService = {
  getAllSponsorProfiles,
  getAllSponseeProfiles,
  getAllAgencyProfiles,
  getSponsorProfile,
  getAgencyProfile,
  getSponseeProfile,
  SponsorFields,
  SponseeFields,
  AgencyFields,
};

export default ProfileService;
