"use client";

import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "@/firebaseConfig";
import { formatDistanceToNow } from "date-fns";

interface DonationData {
  name: string;
  amount: number;
  message?: string;
  createdAt: string; // createdAt is a string (ISO string or timestamp)
}

const GOAL = 100000;

const DonationProgress: React.FC = () => {
  const [donors, setDonors] = useState<DonationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "donations"));
        let donorList: DonationData[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            name: data.name,
            message: data.message || "",
            amount: data.amount,
            // Keep createdAt as string (Firebase stores it as string)
            createdAt: data.createdAt,
          };
        });

        // 🔥 Sort by latest & show only top 7
        donorList.sort((a, b) => {
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        });
        donorList = donorList.slice(0, 7); // Show top 7 donors

        setDonors(donorList);
      } catch (err) {
        console.error("Failed to fetch donors:", err);
        setError("Failed to load donor data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const totalRaised = donors.reduce((sum, donor) => sum + donor.amount, 0);
  const percentage = Math.min((totalRaised / GOAL) * 100, 100);

  if (loading) {
    return <div className="text-center py-10">Loading donations...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-20 space-y-10">
      {/* Progress Bar */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Donation Goal</h2>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="bg-green-600 h-full text-white text-sm flex items-center justify-center transition-all duration-500"
            style={{ width: `${percentage}%` }}
          >
            {Math.floor(percentage)}%
          </div>
        </div>
        <p className="text-gray-600 mt-2">
          ${totalRaised.toLocaleString()} raised of ${GOAL.toLocaleString()} goal
        </p>
      </div>

      {/* Donor List */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Donors</h3>
        {donors.length === 0 ? (
          <p className="text-gray-500">No donations yet. Be the first to donate!</p>
        ) : (
          <ul className="space-y-4">
            {donors.map((donor, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-800 font-medium">{donor.name}</p>
                {donor.message && (
                  <p className="text-sm text-gray-600 mt-1">“{donor.message}”</p>
                )}
                <p className="text-sm text-green-700 font-semibold mt-2">
                  Donated ${donor.amount}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {/* Always compare to current time */}
                  {formatDistanceToNow(new Date(donor.createdAt), { addSuffix: true })}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default DonationProgress;
