import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary
import { FaCreditCard, FaBoxes, FaChartLine, FaUsers, FaShieldAlt, FaCog } from 'react-icons/fa'; // Importing relevant icons

const HomePage = () => {
  const cardsData = [
    {
      title: "Streamlined Payment Solutions",
      description:
        "elitra enables you to accept a wide range of payment methods, from cash to integrated card systems, ensuring a seamless checkout experience for your customers.",
      Icon: FaCreditCard, // Replacing image with FaCreditCard icon
      color: "text-blue-500", // Icon color
    },
    {
      title: "Comprehensive Inventory Management",
      description:
        "Monitor and manage your inventory effortlessly with elitra’s real-time tracking. Avoid stockouts and overstocking while keeping your resources optimized.",
      Icon: FaBoxes, // Replacing image with FaBoxes icon
      color: "text-green-600", // Icon color
    },
    {
      title: "Sales Analytics & Reporting",
      description:
        "Get detailed insights into your sales performance with elitra’s powerful analytics tools, helping you make informed business decisions.",
      Icon: FaChartLine, // Replacing image with FaChartLine icon
      color: "text-purple-600", // Icon color
    },
    {
      title: "Customer Relationship Management",
      description:
        "Keep your customers engaged and satisfied with elitra’s integrated CRM tools. Build lasting relationships and drive repeat business.",
      Icon: FaUsers, // Replacing image with FaUsers icon
      color: "text-red-500", // Icon color
    },
    {
      title: "Advanced Security Features",
      description:
        "Protect your business and customer data with elitra’s state-of-the-art security features. We use encryption and multi-factor authentication to ensure safe transactions and data privacy.",
      Icon: FaShieldAlt, // New feature with FaShieldAlt icon
      color: "text-yellow-500", // Icon color
    },
    {
      title: "Customizable Settings",
      description:
        "Tailor elitra to fit your business needs with customizable settings. From payment options to user permissions, you can configure the platform to suit your unique requirements.",
      Icon: FaCog, // New feature with FaCog icon
      color: "text-teal-500", // Icon color
    },
    // Add more card data here if needed...
  ];

  return (
    <div>
      <HomeComponent
        title="Welcome to elitra!"
        description="elitra is designed to empower African SMEs with cutting-edge tools for managing payments, inventory, customer relationships, and more. Join us today and take your business to new heights!"
        buttonText="Get Started"
        imageSrc="/images/retail-hero.png" // Update with your actual image path
        imageAlt="elitra Hero Image"
        isImageFirst={false} // Set to true if you want the image first
      />

      <CardGrid
        gridTitle="Empowering African SMEs"
        gridDescription="elitra offers a comprehensive suite of tools tailored to help small and medium enterprises across Africa streamline operations, boost productivity, and achieve growth."
        cardsData={cardsData}
      />
    </div>
  );
};

export default HomePage;
