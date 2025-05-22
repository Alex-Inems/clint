import { db } from '../firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';

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
