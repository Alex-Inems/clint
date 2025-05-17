"use client";
import Link from "next/link";
import Image from "next/image";
import DonationProgress from "@/components/Home/DonationProgress";
import { MapPinIcon } from "@heroicons/react/24/outline";

const DonationHome: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left - Content */}
        <div className="w-full md:w-2/3 flex flex-col justify-center px-6 py-12 md:px-16 space-y-8">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Help Rebuild Palestine
            <br />
            <span className="text-blue-700">Every Donation Counts</span>
          </h1>

          {/* Author Info */}
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-gray-200 p-2">
              <MapPinIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Uta Benkelberg</h2>
              <p className="text-sm text-gray-600">Gaza, Palestine</p>
            </div>
          </div>

          {/* Story Sections */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed max-w-2xl">
            <p>
              We are raising funds to support those impacted by the ongoing war in Palestine.
              Your donations help provide shelter, food, clean water, and critical mental health support
              to families in need.
            </p>

            <ImageCard src="/images/image1.jpg" alt="Palestinian family hopeful" />

            <p>
              Every dollar you give sends a message of compassion and solidarity.
              Funds help cover evacuation costs, emergency transportation, food, and medical assistance.
            </p>

            <ImageCard src="/images/image2.jpg" alt="Children from Gaza smiling" />

            <p>
              Our mission is to ensure the safety and dignity of those displaced by conflict.
              Whether large or small, your donation makes a lasting impact. Thank you for standing with Palestine.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Link href="/donationform">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition">
                Donate Now
              </button>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              100% of your donation goes directly to those in need.
            </p>
          </div>
        </div>

        {/* Right - Progress Tracker */}
        <div className="w-full md:w-1/3 bg-gray-50 px-6 py-12 md:py-16 flex justify-center md:justify-start">
          <div className="md:sticky top-20 w-full max-w-sm">
            <DonationProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-lg overflow-hidden shadow-md">
    <div className="relative w-full h-56 md:h-64">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  </div>
);

export default DonationHome;
