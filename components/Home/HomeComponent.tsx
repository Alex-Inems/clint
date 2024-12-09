'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Define the type for the props
interface HomeComponentProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  isImageFirst?: boolean; // Optional prop, default will be false if not provided
}

const HomeComponent: React.FC<HomeComponentProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  isImageFirst = false,
}) => {
  // Local state to ensure content is rendered only when data is ready
  const [isContentReady, setContentReady] = useState(false);

  // Use useEffect to signal when content is ready (after initial render)
  useEffect(() => {
    setContentReady(true);
  }, []);

  if (!isContentReady) {
    // Return null or a simple skeleton UI if content is not ready yet
    return null;
  }

  return (
    <div
      className={`flex flex-col ${isImageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between min-h-screen bg-gradient-to-r from-yellow-50 to-white text-black px-12 py-6`}
    >
      {/* Left side: Text Content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center text-left space-y-6 px-6">
        <h1 className="text-4xl font-extrabold leading-tight mb-4 text-gradient">
          {title}
        </h1>
        <p className="text-lg mb-6 max-w-xl text-opacity-80">
          {description}
        </p>
        <Link href="/auth">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md transform transition duration-300 hover:bg-green-500 hover:scale-105 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400">
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center px-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500} // Adjust width and height as needed
          height={500}
          className="rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
          priority // Ensures the image is loaded immediately for above-the-fold content
          loading="eager" // Eager loading for critical images
        />
      </div>
    </div>
  );
};

export default HomeComponent;
