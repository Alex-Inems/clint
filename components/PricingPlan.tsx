"use client"
import React, { useState } from 'react';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  mostPopular?: boolean;
  premium?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Standard',
    price: '₦486,890',
    features: [
      'All Standard features plus',
      '2 users',
      '50 vendors',
      '1 Store',
      'Basic Business Insights',
      'No dedicated account manager',
    ],
  },
  {
    name: 'Professional',
    price: '₦986,890',
    features: [
      'All Professional features plus',
      '10 users',
      '100 vendors',
      '2 Stores',
      'Advanced Business Insights',
      'Dedicated account manager',
    ],
    mostPopular: true,
  },
  {
    name: 'Premium',
    price: '₦1,486,890',
    features: [
      'All Premium features plus',
      '50 users',
      '200 vendors',
      '5 Stores',
      'Premium Business Insights',
      '24/7 dedicated support',
    ],
    premium: true,
  },
  {
    name: 'Enterprise',
    price: '₦2,986,890',
    features: [
      'All Enterprise features plus',
      '100 users',
      '500 vendors',
      '10 Stores',
      'Custom Insights',
      'Custom Support',
    ],
  },
];

const PricingPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleChoosePlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => setSelectedPlan(null);

  return (
    <div className="bg-gray-50 py-16 px-8 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-serif text-gray-800 mb-4">Pricing Plans for Every Business</h2>
        <p className="text-lg font-light font-serif text-gray-400 mb-10 max-w-2xl mx-auto">
          Grow better with the right plan and pay for what you need, when you need it.
          <br />
          <strong className="text-red-700">Get one month FREE when you pay annually.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg p-4 transform transition-all duration-300 hover:scale-105 border border-gray-300"
          >
            {plan.premium && (
              <div className="bg-red-600 absolute -top-9 left-0 w-full text-white text-center p-2 rounded-t-2xl text-lg font-semibold">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-semibold text-left text-gray-900 mb-2">{plan.name}</h3>
            <div className="text-left text-2xl text-green-700 mb-2">
              <div className="mt-2">
                {plan.price}
                <span className="text-sm text-gray-500">/year</span>
              </div>
            </div>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2 text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="text-center">
              <button
                onClick={() => handleChoosePlan(plan)}
                className="w-full border-red-700 border bg-transparent text-red-700 py-2 hover:bg-red-700 hover:text-white transition-all text-sm"
              >
                Choose {plan.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-lg font-bold mb-4">
              {selectedPlan.name} <span className="block text-sm text-gray-600 font-light font-serif">Select a payment duration that best suits your business</span>
            </h3>
            <ul className="space-y-4">
              {[
                { duration: 'Annually', price: '₦863,758/year' },
                { duration: 'Biannually', price: '₦1,727,516/year' },
                { duration: 'Triennial', price: '₦2,591,274/year' },
                { duration: 'Quadrennial', price: '₦3,455,032/year' },
                { duration: 'Quinquennial', price: '₦4,318,790/year' },
              ].map((option, idx) => (
                <li key={idx} className="flex justify-between text-sm border-b pb-2">
                  <span className="font-medium ">{option.duration}</span>
                  <span className='text-green-700'>{option.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  alert(`Proceeding to payment for ${selectedPlan.name}`);
                  closeModal();
                }}
                className="bg-red-900 text-sm text-white px-4 py-2 rounded hover:bg-red-500 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlans;
