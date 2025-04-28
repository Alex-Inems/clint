"use client";

import React, { useState } from "react";

const stripePaymentLink = "https://buy.stripe.com/aEUdTKeke6nXfnOaEE"; // your Stripe payment link

const DonationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;

    setIsSubmitting(true);

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12'

    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;

    // Save donation data to local storage before redirecting
    localStorage.setItem(
      "donationData",
      JSON.stringify({
        name,
        amount: Number(amount),
        message,
        submittedAt: formattedDateTime,
      })
    );

    // Redirect to Stripe payment link
    window.location.href = stripePaymentLink;
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
            placeholder="Amount (USD)"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <textarea
            placeholder="Leave a message (optional)"
            className="w-full p-3 border rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-500 transition disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Donate Now"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
