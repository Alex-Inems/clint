'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Testimonial data with more detailed reviews (minimum 40 words)
const testimonials = [
  {
    text: 'UpLift has completely transformed the way we operate our business. The platform is incredibly fast, reliable, and user-friendly. We have seen a significant boost in productivity across all departments. It is truly an invaluable tool for our team to achieve success.',
    name: 'John Doe',
    title: 'CEO of Retail Inc.',
  },
  {
    text: 'The integration with our existing systems was seamless, and since implementing UpLift, our productivity has skyrocketed. We have been able to streamline our processes, reduce downtime, and improve collaboration across teams. This has significantly impacted our bottom line in a positive way.',
    name: 'Jane Smith',
    title: 'CTO of Tech Retailers',
  },
  {
    text: '"I have never experienced customer support like this before. The team behind UpLift genuinely cares about our success. Anytime we had an issue, they were quick to respond and resolve the problem. Their dedication to service is unparalleled, and we couldnt be happier with the results."',
    name: 'Mark Lee',
    title: 'Founder of Innovate Retail',
  },
];

// Slide-in animation for each testimonial
const slideAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const TestimonialAndWhyChooseUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Change testimonial every 5 seconds (auto-slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 bg-white p-8 rounded-lg shadow-xl w-full">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Testimonial Section */}
        <div className="flex-1">
          <div className="relative mb-8">
            {/* Quotation Icon */}
            <FaQuoteLeft className="text-green-900 text-5xl absolute -top-4 -left-12" />
          </div>

          {/* Display the current testimonial */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideAnimation}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base italic text-gray-800 mb-6">{testimonials[currentTestimonial].text}</p>
            <p className="font-bold text-lg text-black">{testimonials[currentTestimonial].name}</p>
            <p className="font-thin text-lg text-gray-500">{testimonials[currentTestimonial].title}</p>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex-1">
          <h3 className="text-5xl font-serif font-bold mb-6 text-green-950">Why Companies<br /> Choose Us</h3>
          <p className="text-base font-extralight text-gray-500 mb-6">
            Companies trust Sabi for our vetted and affordable talent acquisition services. By partnering with us, businesses have seen an 80% increase in employee retention rates. Our commitment to providing top-notch talent at competitive rates is why companies choose Sabi for their growth and success. 📈
          </p>
          <Link href="/join">
            <button className="px-6 py-3 bg-green-900 text-white rounded-lg shadow-md transition duration-300 hover:bg-white hover:border hover:border-red-700 hover:text-red-700 mb-6">
              Join Now 👥
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAndWhyChooseUs;
