'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TestimonialAndWhyChooseUs from '@/components/Testimonial';

const HomePage = () => {
  // Fade-in animation for text
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className=" bg-red-700 text-white page-fade-out flex flex-col items-center justify-center p-4">
        {/* Title and Description */}
        <motion.h1
          className="text-4xl mt-4 font-medium font-serif mb-4 text-center"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5 }}
        >
          Integrates hardware and software<br />
          solutions to drive retail business efficiencies
        </motion.h1>
        <motion.p
          className="text-lg text-center mb-6 max-w-xl"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          UpLift is user-friendly, easy to use, and offers great value to retail businesses.
        </motion.p>
        <Link href="/auth">
          <button className="px-6 py-3 bg-white text-red-700 rounded-lg shadow-md transition duration-300 hover:bg-red-700 hover:border hover:border-white hover:text-white mb-6">
            Sign In
          </button>
        </Link>

        {/* Call the component for Testimonial and Why Choose Us */}
      </div>
        <TestimonialAndWhyChooseUs/> 
        
    </div>
  );
};

export default HomePage;
