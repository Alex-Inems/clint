'use client'
import { useEffect, useState } from "react";
import { db, collection, addDoc } from "@/firebaseConfig"; // adjust path if different
import Link from "next/link";

// Define the type for the donation data
interface DonationData {
  name: string;
  amount: number;
  message?: string;
  createdAt: string; // use createdAt instead of submittedAt
}

export default function SuccessPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donationData, setDonationData] = useState<DonationData | null>(null);

  useEffect(() => {
    // Retrieve the donation data from localStorage
    const savedDonationData = localStorage.getItem("donationData");
    if (savedDonationData) {
      const parsedDonationData = JSON.parse(savedDonationData);
      // Convert the createdAt string to a Date object if necessary
      parsedDonationData.createdAt = new Date(parsedDonationData.createdAt).toISOString();
      setDonationData(parsedDonationData);
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
            message: donationData.message || "",
            createdAt: donationData.createdAt, // save createdAt (ISO string) to Firebase
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
            <strong>Created At:</strong> {new Date(donationData.createdAt).toLocaleString()}
          </p>
        </div>
      )}

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
