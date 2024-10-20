"use client";
import Link from 'next/link';
import React from 'react';

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
  isImageFirst = false // Set default value to false
}) => {
  
  return (
    <div className={`flex flex-col ${isImageFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6`}>
      
      {/* Left side: Text Content */}
      <div className="md:w-1/2 flex flex-col items-start justify-center text-left space-y-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6 max-w-xl">
          {description}
        </p>
        <Link href="/auth">
      <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-green-500 mb-6">
        {buttonText}
      </button>
    </Link>

      </div>
      
      {/* Right side: Image */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image
          src={imageSrc} // Example: dynamic image path
          alt={imageAlt}
          width={500} // Adjust width and height as needed
          height={500}
          className=""
        />
      </div>
      
    </div>
  );
};

export default HomeComponent;
