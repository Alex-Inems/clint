"use client";

import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { saveDonation, DonationData } from "@/lib/saveDonation";

const stripePaymentLink = "https://buy.stripe.com/28EcN48h06Yvg5PbqT2go00";

const DonationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasSavedToDb = useRef(false);

  // Function to check if donation should be saved to DB
  const trySaveDonationIfNeeded = async () => {
    const timeLeftPageStr = localStorage.getItem("timeLeftPage");
    if (!timeLeftPageStr) return;

    const timeLeftPage = Number(timeLeftPageStr);
    const timeReturned = Date.now();
    const timeAway = timeReturned - timeLeftPage;

    if (timeAway >= 130000) { // 3 minute
      const donationDataJson = localStorage.getItem("donationData");
      if (!donationDataJson) return;

      const donationData: DonationData = JSON.parse(donationDataJson);

      if (!hasSavedToDb.current && !donationData.savedToDb) {
        try {
          await saveDonation(donationData);
          hasSavedToDb.current = true;

          localStorage.setItem(
            "donationData",
            JSON.stringify({ ...donationData, savedToDb: true })
          );
          console.log("Donation saved to DB after returning from Stripe.");
        } catch (error) {
          console.error("Failed to save donation after return:", error);
        }
      }
    }
  };

  useEffect(() => {
    // Check on mount if user already returned after 2 mins
    trySaveDonationIfNeeded();

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        // Save timestamp when user leaves the page
        localStorage.setItem("timeLeftPage", Date.now().toString());
      }

      if (document.visibilityState === "visible") {
        // User returned, try saving if 2 mins elapsed
        trySaveDonationIfNeeded();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;

    setIsSubmitting(true);

    try {
      const id = uuidv4();
      const donationData: DonationData = {
        id,
        name,
        amount: Number(amount),
        message,
        createdAt: Date.now(),
        savedToDb: false,
      };

      localStorage.setItem("donationData", JSON.stringify(donationData));
      // Set leave timestamp immediately before redirecting
      localStorage.setItem("timeLeftPage", Date.now().toString());

      // Redirect to Stripe checkout
      window.location.href = stripePaymentLink;
    } catch (error) {
      console.error("Failed to save donation:", error);
      alert("Something went wrong while saving your donation. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-20">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Amount (EUR)"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <textarea
            placeholder="Leave a message (optional)"
            className="w-full p-3 border rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-500 transition disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Donate Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
