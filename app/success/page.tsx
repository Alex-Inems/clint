"use client";

import { useEffect, useState } from "react";
import { db, collection, addDoc, Timestamp } from "@/firebaseConfig"; // Ensure Timestamp is imported from Firebase
import Link from "next/link";

// Adjusted type to reflect timestamp format
interface DonationData {
  name: string;
  amount: number;
  message?: string;
  createdAt: number; // timestamp
}

export default function SuccessPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donationData, setDonationData] = useState<DonationData | null>(null);

  useEffect(() => {
    const savedDonationData = localStorage.getItem("donationData");
    if (savedDonationData) {
      const parsedData: DonationData = JSON.parse(savedDonationData);
      setDonationData(parsedData);
    } else {
      setError("No donation data found.");
    }
  }, []);

  useEffect(() => {
    if (donationData) {
      const saveToFirebase = async () => {
        try {
          setIsSaving(true);
          // Use Firebase Timestamp for createdAt
          await addDoc(collection(db, "donations"), {
            name: donationData.name,
            amount: donationData.amount,
            message: donationData.message || "",
            createdAt: Timestamp.fromMillis(donationData.createdAt), // Convert to Firebase Timestamp
          });
          localStorage.removeItem("donationData");
        } catch (error) {
          console.error("Error saving donation:", error);
          setError("Failed to save donation data.");
        } finally {
          setIsSaving(false);
        }
      };

      saveToFirebase();
    }
  }, [donationData]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank you for your donation!</h1>
      <p className="text-gray-700 mb-4 text-center">
        Your support helps provide relief to Gaza and Palestine refugees. We deeply appreciate your generosity.
      </p>

      {donationData && (
        <div className="text-center mb-8">
          <p className="text-gray-800">
            <strong>Name:</strong> {donationData.name}
          </p>
          <p className="text-gray-800">
            <strong>Amount:</strong> ${donationData.amount}
          </p>
          {donationData.message && (
            <p className="text-gray-800">
              <strong>Message:</strong> {donationData.message}
            </p>
          )}
          <p className="text-gray-600 mt-2">
            <strong>Created At:</strong>{" "}
            {new Date(donationData.createdAt).toLocaleString()}
          </p>
        </div>
      )}

      {isSaving && <p className="text-gray-500">Saving your donation...</p>}
      {error && <p className="text-red-500 hidden">{error}</p>}

      <Link
        href="/"
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
