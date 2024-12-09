'use client';

import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

const Footer = () => {
  const url = 'https://yourwebsite.com'; // Replace with your URL


  return (
    <footer className=" bg-gradient-to-r from-yellow-50 to-white text-black py-8  shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-4 mb-4">
          <h2 className="text-lg font-bold">Share Uplift:</h2>
          <div className="flex space-x-4">
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} round className="hover:opacity-80 transition duration-300" />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <TwitterIcon size={32} round className="hover:opacity-80 transition duration-300" />
            </TwitterShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon size={32} round className="hover:opacity-80 transition duration-300" />
            </LinkedinShareButton>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Uplift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
