// components/RestaurantPage.tsx
import React from 'react';
import Link from 'next/link';

interface RestaurantPageProps {
  title: string;
  description: string;
  imageUrl: string; // URL for the background image
}

const RestaurantPage: React.FC<RestaurantPageProps> = ({ title, description, imageUrl }) => {
  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }} // Set the background image
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{description}</p>
        <Link href="/auth">
      <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-green-500 mb-6">
        SignIn
      </button>
    </Link>
        
      </div>
    </div>
  );
};

// Provide default props in case no data is passed
RestaurantPage.defaultProps = {
  title: 'Welcome to Uplift',
  description: 'Uplift is your go-to solution for enhancing restaurant operations, ensuring seamless service and satisfaction.',
  imageUrl: '/images/restaurant-bg.jpg', // Default background image path
};

export default RestaurantPage;
