'use client';

import { AboutUs } from "@/components/AboutUs";
import { Contact } from "@/components/Contact";
import FAQ from '@/components/Faq';
import { Partners } from "@/components/Partners";

const HelpPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <h1 className="text-center text-5xl font-extrabold mb-4">
          Need Assistance? We&apos;ve Got You Covered
        </h1>
        <p className="text-center text-xl max-w-2xl mx-auto">
          Uplift is dedicated to your growth. Whether it’s guidance, support, or solutions, we’re always here to help you excel.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="py-16">
        <FAQ />
      </section>

        
          <AboutUs />
        

          <Contact />
    
      
          <Partners />
      
    </div>
  );
};

export default HelpPage;
