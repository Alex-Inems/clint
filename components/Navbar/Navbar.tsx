"use client";


import Link from "next/link";
import { LogIn } from "lucide-react"; // Icons

const Navbar = () => {
 

  return (
    <nav className="z-50 bg-transparent backdrop-blur-lg border border-white/20 text-slate-500 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              prefetch={true}
              className="text-3xl font-extrabold transition duration-300 hover:opacity-80 flex items-center space-x-2"
            >
              Elivra
            </Link>
          </div>

          {/* Donation Button */}
          <div className="flex items-center">
            <Link
              href="/donationform"
              prefetch={true}
              className="px-4 py-2 bg-blue-600 text-white border border-white rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-blue-700 flex items-center space-x-2"
            >
              
              <span>Donate</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
