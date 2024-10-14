// Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, }) => {
  return (
    <div className=" rounded-lg shadow-md transition-transform transform hover:scale-105 p-2 sm:p-6 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0  rounded-lg"></div>
      <div className="relative z-10">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={200}
            className="object-cover  sm:h-48 rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        
      </div>
    </div>
  );
};

export default Card;
