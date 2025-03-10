export const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-800 text-white py-16 px-8 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About elivra
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          elivra is dedicated to supporting small and medium-sized enterprises (SMEs) across Africa. Our mission is to provide a seamless platform for business management, enabling SMEs to track their sales, manage inventory, and optimize their operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              Our mission is to empower African SMEs by providing them with the tools they need to manage their businesses effectively, grow sustainably, and thrive in today’s competitive market.
            </p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              We envision a future where African SMEs are at the forefront of economic growth, with access to cutting-edge tools that enable them to scale their businesses and achieve long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
