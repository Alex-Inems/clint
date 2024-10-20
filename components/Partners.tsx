import Image from "next/image";

export const Partners = () => {
  const partners = [
    {
      name: 'African Business Network',
      description: 'Collaborating on empowering SMEs across Africa with resources and tools.',
      logo: '/images/african-business-network-logo.jpg',
    },
    {
      name: 'SME Growth Hub',
      description: 'Providing expert insights and strategies to drive SME growth and development.',
      logo: '/images/sme-growth-hub-logo.jpg',
    },
    {
      name: 'ChefWars',
      description: 'A thrilling culinary competition showcasing the finest cooking talents and entertainment. Watch top chefs battle it out for culinary supremacy in a high-energy food showdown!',
      logo: '/images/food.jpg',
    }
    
    // Add more partners here
  ];

  return (
    <div className="bg-indigo-950 py-16 px-8 md:px-20 lg:px-40">
      <div className="max-w-6xl mx-auto text-white">
      <h2 className="text-center text-4xl font-semibold  mb-10">
            Our Trusted Partners
          </h2>
          <p className="text-center  mb-8 text-lg max-w-2xl mx-auto">
            We collaborate with world-class partners to deliver the best-in-class solutions for African SMEs. Here’s a glimpse of our strategic partnerships.
          </p>  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className=" mx-auto mb-4 rounded-full"
                width={105}
                height={50}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
