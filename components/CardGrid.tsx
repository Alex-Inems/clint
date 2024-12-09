// components/CardGrid.tsx
import React from 'react';
import Card from './Card';
import Image from 'next/image'; // Import Image for using images
import Link from 'next/link';

interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  
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
            <span key={index} className=" text-shadow-lg">
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
            imageUrl={card.imageUrl}
            
          />
        ))}
      </div>

      {/* Sign-in Section */}
   {/* Sign-in Section */}
<div className="bg-red-700 text-white p-6 mt-8 rounded flex flex-col items-center text-center md:flex-row md:text-center md:items-center gap-6">
  {/* Text Section */}
  <div className="flex flex-col items-center md:w-2/3">
    <h3 className="text-2xl font-bold mb-2">Join Us Today!</h3>
    <p className="text-lg mb-4 leading-relaxed">Sign in to access exclusive features and tools.</p>
    <Link href="/auth">
      <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400">
        Sign In
      </button>
    </Link>
  </div>

  {/* Image Section */}
  <div className="md:w-1/3 flex justify-center">
    <Image
      src="/images/cashier.jpg" // Replace with your image path
      alt="Sign In Illustration"
      width={200} // Adjust width as needed
      height={120} // Adjust height as needed
      className="rounded-lg shadow-lg"
    />
  </div>
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
      imageUrl: '/default-image.png',
      
    },
  ],
};

export default CardGrid;
