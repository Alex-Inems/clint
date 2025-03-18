"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { links } from "@/types/commonTypes";
import { Menu, X, LogIn, LogOut } from "lucide-react"; // Icons

const Navbar = () => {
  const { currentUser } = useAuth();
  console.log("Current User in Navbar:", currentUser);

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  }, []);

  const handleLinkClick = useCallback(() => {
    setDropdownOpen(null);
    setIsOpen(false);
  }, []);

  const toggleDropdown = (name: string) => {
    setDropdownOpen((prev) => (prev === name ? null : name));
  };

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
              Elivra         </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-slate-500 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-sm space-x-6">
            {links.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdownItems ? (
                  <button
                    className="flex items-center text-sm transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.icon && <link.icon className="mr-1" />}
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="flex items-center text-sm transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
                    onClick={handleLinkClick}
                  >
                    {link.icon && <link.icon className="mr-1" />}
                    {link.name}
                  </Link>
                )}
{dropdownOpen === link.name && link.dropdownItems && (
  <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-100">
    {link.dropdownItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        prefetch={true}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition duration-300 rounded-md"
        onClick={handleLinkClick}
      >
        {item.icon && <item.icon className="mr-1 inline" />}
        {item.name}
      </Link>
    ))}
  </div>
)}
              </div>
            ))}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                {currentUser.photoURL && (
                  <Image
                    src={currentUser.photoURL}
                    alt="Profile Picture"
                    className="rounded-full"
                    width={40}
                    height={40}
                    priority
                  />
                )}
                <span className="hidden lg:block text-white">
                  {currentUser.displayName || "User"}
                </span>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-red-500 flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                prefetch={true}
                className="px-4 py-2 bg-green-600 text-white border border-white rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-green-700 flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 backdrop-blur-lg border border-white/20 shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-2">
            {links.map((link) => (
              <div key={link.name}>
                {link.dropdownItems ? (
                  <button
                    className="flex items-center text-lg text-slate-200 transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.icon && <link.icon className="mr-1" />}
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="flex items-center text-lg text-slate-200 transition duration-300 hover:underline hover:underline-offset-4 focus:outline-none"
                    onClick={handleLinkClick}
                  >
                    {link.icon && <link.icon className="mr-1" />}
                    {link.name}
                  </Link>
                )}
                {dropdownOpen === link.name && link.dropdownItems && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={true}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-500 hover:text-white transition duration-300 rounded-md"
                        onClick={handleLinkClick}
                      >
                        {item.icon && <item.icon className="mr-1 inline" />}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {currentUser ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-red-500 flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            ) : (
              <Link
                href="/auth"
                prefetch={true}
                className="px-3 py-2 w-fit bg-green-600 text-white rounded-lg shadow-md transition duration-300 hover:bg-green-500 flex items-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
