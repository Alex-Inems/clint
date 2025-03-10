'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const images = [
  'images/screen1.jpg',
  'images/screen2.jpg',
  'images/screen3.jpg',
  'images/screen4.jpg'
];

const HomePage = () => {
  // Fade-in animation for text
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* Background Sliding Effect */}
      <motion.div
        className="absolute inset-0 flex w-[500%] h-full"
        animate={{ x: ['0%', '-80%'] }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
      >
        {[...images, images[0]].map((src, index) => (
          <div
            key={index}
            className="w-1/5 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
      </motion.div>

      {/* Title and Description */}
      <motion.p
        className="text-lg text-center max-w-xl text-white relative z-10"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Integrates hardware and software<br />
        solutions to drive retail business efficiencies
      </motion.p>
      <Link href="/auth">
        <button className="px-6 py-3 bg-white text-red-700 rounded-lg shadow-md transition duration-300 hover:bg-red-700 hover:border hover:border-white hover:text-white mb-6 relative z-10">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
