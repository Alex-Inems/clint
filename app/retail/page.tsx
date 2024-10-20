import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary

const HomePage = () => {
  const cardsData = [
    {
      title: "Streamlined Payment Solutions",
      description: "Uplift enables you to accept a wide range of payment methods, from cash to integrated card systems, ensuring a seamless checkout experience for your customers.",
      imageUrl: "/images/payment.jpg",
      buttonText: "Learn More",
    },
    {
      title: "Comprehensive Inventory Management",
      description: "Monitor and manage your inventory effortlessly with Uplift’s real-time tracking. Avoid stockouts and overstocking while keeping your resources optimized.",
      imageUrl: "/images/inventory.jpg",
      buttonText: "Learn More",
    },
    {
      title: "Sales Analytics & Reporting",
      description: "Get detailed insights into your sales performance with Uplift’s powerful analytics tools, helping you make informed business decisions.",
      imageUrl: "/images/sales.jpg",
      buttonText: "Learn More",
    },
    {
      title: "Customer Relationship Management",
      description: "Keep your customers engaged and satisfied with Uplift’s integrated CRM tools. Build lasting relationships and drive repeat business.",
      imageUrl: "/images/product.jpg",
      buttonText: "Learn More",
    },
    // Add more card data here if needed...
  ];

  return (
    <div>
      <HomeComponent
        title="Welcome to Uplift!"
        description="Uplift is designed to empower African SMEs with cutting-edge tools for managing payments, inventory, customer relationships, and more. Join us today and take your business to new heights!"
        buttonText="Get Started"
        imageSrc="/images/retail-hero.png" // Update with your actual image path
        imageAlt="Uplift Hero Image"
        isImageFirst={false} // Set to true if you want the image first
      />

      <CardGrid
        gridTitle="Empowering African SMEs"
        gridDescription="Uplift offers a comprehensive suite of tools tailored to help small and medium enterprises across Africa streamline operations, boost productivity, and achieve growth."
        cardsData={cardsData}
      />
    </div>
  );
};

export default HomePage;
