import React from 'react';
import Card from './Card';
import { IconType } from 'react-icons'; // Import IconType for typing
import { FaRocket } from 'react-icons/fa';
import Link from 'next/link';

interface CardData {
  title: string;
  description: string;
  Icon: IconType; // Icon component for the card
  color: string; // Color prop for the icon
}

interface CardGridProps {
  gridTitle: string;
  gridDescription: string;
  cardsData: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ gridTitle, gridDescription, cardsData }) => {
  return (
    <div className="bg-white w-full p-4">
      {/* Title and description above the cards */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-wide">
          {gridTitle.split(' ').map((word, index) => (
            <span key={index} className="text-shadow-lg">
              {word}{' '}
            </span>
          ))}
        </h2>
        <p className="text-lg text-gray-600">{gridDescription}</p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-md">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            Icon={card.Icon}
            color={card.color} // Pass the color prop to Card
          />
        ))}
      </div>

      {/* Sign-in Section */}
      <div className="bg-red-950 text-white p-8 mt-8 rounded-lg shadow-lg flex flex-col items-center text-center gap-6 relative">
        <FaRocket className="absolute top-4 left-4 text-white text-3xl" />
        <h3 className="text-4xl font-bold">
          Ready to Elevate Your Business?
        </h3>
        <p className="text-lg mb-2 font-serif font-extralight">
          Sign in to unlock exclusive features, tools, and insights that help you grow and manage your business effortlessly.
        </p>
        <Link href="/auth">
          <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg shadow-border shadow-xl transition-all duration-300 hover:bg-transparent hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400">
            Get Started Now
          </button>
        </Link>
      </div>
    </div>
  );
};

// Provide default props in case no data is passed
CardGrid.defaultProps = {
  gridTitle: 'Default Title',
  gridDescription: 'Default description of the card grid',
  cardsData: [
    {
      title: 'Default Card',
      description: 'This is a default card description.',
      Icon: () => <div className="text-gray-400">Default Icon</div>, // Fallback icon if none provided
      color: 'text-gray-400', // Default color
    },
  ],
};

export default CardGrid;
