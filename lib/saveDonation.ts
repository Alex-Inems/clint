// src/lib/saveDonation.ts or similar

import { db } from '../firebaseConfig'; // ✅ re-use from central config
import { collection, doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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
