import React from "react";
import "@/app/globals.css"; // Assuming Tailwind CSS is set up
import Faq from "@/components/Faq";

const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$19/month",
      description: "A simple start for everyone.",
      features: [
        "1 User",
        "5 Projects",
        "Basic Support",
        "500MB Storage",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Pro",
      price: "$49/month",
      description: "For growing businesses.",
      features: [
        "5 Users",
        "20 Projects",
        "Priority Support",
        "10GB Storage",
      ],
      buttonText: "Upgrade Now",
    },
    {
      title: "Enterprise",
      price: "Contact us",
      description: "Advanced features for large teams.",
      features: [
        "Unlimited Users",
        "Unlimited Projects",
        "24/7 Support",
        "Unlimited Storage",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Pricing Plans</h1>
        <p className="text-gray-500 mt-2">Choose the plan that&apos;s right for you and your team.</p>
        <p className="text-red-950 mt-2">This Feature is currently unavailable</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800">{plan.title}</h2>
            <p className="text-gray-500 mt-2">{plan.description}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
            </div>
            <ul className="mt-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      <Faq />
    </div>
  );
};

export default PricingPage;
