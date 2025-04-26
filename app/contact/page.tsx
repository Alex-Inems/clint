// /app/contact/page.tsx
"use client";
import React from "react";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // In real production, integrate an email service like Resend, Formspree, etc.
  };

  return (
    <main className="min-h-screen py-20 px-4 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          We'd love to hear from you. Please fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-sm">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
