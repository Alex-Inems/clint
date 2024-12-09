'use client';

import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import FAQ from "@/components/Faq";
import { Partners } from "@/components/Partners";
import { motion } from "framer-motion";

const HelpPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative bg-gray-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-6"
          >
            Need Assistance? We&apos;ve Got You Covered
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg max-w-3xl mx-auto mb-8 text-gray-300"
          >
            Uplift is dedicated to your growth. Whether it’s guidance, support, or solutions, we’re always here to help you excel.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition"
          >
            Get Help Now
          </motion.a>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-center mb-10 text-gray-200"
          >
            Frequently Asked Questions
          </motion.h2>
          <FAQ />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <AboutUs />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 bg-gray-900 text-gray-100"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold mb-6"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg mb-8 text-gray-400"
          >
            Our team is ready to assist you. Reach out and let us help you succeed!
          </motion.p>
          <Contact />
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
        
          <Partners />
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
