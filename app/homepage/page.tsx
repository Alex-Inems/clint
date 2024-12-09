"use client";

import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HomePage = () => {
   
  // Animation for text and images
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className=" min-h-screen bg-red-700 text-white ">
    <div className='page-fade-out flex flex-col items-center justify-center p-4'>
      <motion.h1
        className="text-4xl mt-4 font-medium font-serif mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 0.5 }}
      >
       Integrates hardware and software<br/>
       solutions to drive retail business efficiencies
      </motion.h1>
      <motion.p
        className="text-lg text-center mb-6 max-w-xl"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
       
UpLift is user friendly, easy to use and offer great value to retail businesses.
      </motion.p>
      <Link href="/auth">
      <button className="px-6 py-3 bg-white text-red-700 rounded-lg shadow-md transition duration-300 hover:bg-red-700 hover:border hover:border-white hover:text-white mb-6">
        Sign In
      </button>
    </Link>
      {/* Floating Images */}
      <div className="flex space-x-4 mb-6">
        <motion.div
          className="float"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Image
            src="/images/cust.jpg" 
            alt="Image 1"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="float"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Image
            src="/images/chart.jpg"
            alt="Image 2"
            width={400}
            height={250}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="float"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Image
            src="/images/anot.jpg"
            alt="Image 3"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          className="float"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <Image
            src="/images/bal.jpg"
            alt="Image 4"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </motion.div>
     </div>
      </div>
      

      
    
      </div>
  );
};

export default HomePage;
