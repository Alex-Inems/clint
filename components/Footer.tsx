import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">TrackMe</h2>
            <p className="mt-2 text-sm">Your ultimate time management solution.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row space-x-0 md:space-x-6">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TrackMe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
