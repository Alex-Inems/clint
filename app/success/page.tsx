"use client";

import { useEffect, useState } from "react";
import { db, collection, addDoc } from "@/firebaseConfig"; // adjust path if different
import Link from "next/link";

export default function SuccessPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donationData, setDonationData] = useState<any>(null);

  useEffect(() => {
    // Retrieve the donation data from localStorage
    const savedDonationData = localStorage.getItem("donationData");
    if (savedDonationData) {
      setDonationData(JSON.parse(savedDonationData));
    } else {
      setError("No donation data found.");
    }
  }, []);

  useEffect(() => {
    // Save the donation data to Firebase when the component is mounted
    if (donationData) {
      const saveToFirebase = async () => {
        try {
          setIsSaving(true);
          await addDoc(collection(db, "donations"), {
            name: donationData.name,
            amount: donationData.amount,
            message: donationData.message,
            createdAt: new Date(),
          });
          // Remove the data from localStorage after saving it
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
      <p className="text-gray-700 mb-8 text-center">
        Your support helps provide relief to Gaza and Palestine refugees. We deeply appreciate your generosity.
      </p>

      {/* Show saving/loading state */}
      {isSaving && <p className="text-gray-500">Saving your donation...</p>}

      {/* Show error if saving fails */}
      {error && <p className="text-red-500">{error}</p>}

      <Link
        href="/"
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
