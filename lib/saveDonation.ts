import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp, getApps } from "firebase/app";
import { v4 as uuidv4 } from "uuid";

// Your Firebase config - replace with your actual config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ...
};

// Initialize Firebase app if not already initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export type DonationData = {
  id: string;
  name: string;
  amount: number;
  message?: string;
  createdAt: number;
  savedToDb?: boolean;
};

export async function saveDonation(donation: DonationData) {
  const donationsRef = collection(db, "donations");
  const docRef = doc(donationsRef, donation.id);
  await setDoc(docRef, donation);
}
