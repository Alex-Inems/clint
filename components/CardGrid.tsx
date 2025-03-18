import React from "react";
import Card from "./Card";
import { IconType } from "react-icons";
import { FaRocket } from "react-icons/fa";
import Link from "next/link";

interface CardData {
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}

interface CardGridProps {
  gridTitle: string;
  gridDescription: string;
  cardsData: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ gridTitle, gridDescription, cardsData }) => {
  return (
    <div className="bg-gray-950 w-full p-6 text-white min-h-screen flex flex-col items-center">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-3">
          {gridTitle}
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{gridDescription}</p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            Icon={card.Icon}
            color={card.color}
          />
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="relative w-full max-w-3xl mt-16 bg-gray-800 rounded-lg p-10 text-center shadow-lg overflow-hidden">
        <FaRocket className="absolute top-4 left-4 text-green-400 text-4xl animate-bounce" />
        <h3 className="text-3xl font-bold">Supercharge Your Business</h3>
        <p className="text-gray-400 mt-2">
          Sign in to unlock premium features and tools designed to boost your productivity.
        </p>
        <Link href="/auth">
          <button className="mt-6 px-6 py-3 text-lg bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-md hover:scale-105 transition-transform">
            Get Started Now
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="w-full text-center mt-12 text-gray-500">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="mt-4 space-x-6">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </nav>
      </footer>
    </div>
  );
};

CardGrid.defaultProps = {
  gridTitle: "Empower Your Business",
  gridDescription: "Discover the best tools and insights to grow your brand and maximize success.",
  cardsData: [
    {
      title: "Innovative Solutions",
      description: "Cutting-edge technology to streamline your business processes.",
      Icon: () => <div className="text-green-400">✨</div>,
      color: "text-green-400",
    },
  ],
};

export default CardGrid;
