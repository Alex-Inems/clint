import CardGrid from "@/components/CardGrid";
import RestaurantPage from "@/components/RestuarantPage";
import { FaCloud, FaMobileAlt, FaTags, FaClipboardList, FaWarehouse, FaUsersCog } from "react-icons/fa"; // Importing icons

const Restaurant = () => {
  const cardsData = [
    {
      title: "Cloud Based",
      description: "From the elivra cloud or mobile Dashboard apps for iOS or Android, you may access all the reports even while traveling.",
      Icon: FaCloud, // Using FaCloud icon
      color: "text-red-500", // Icon color
    },
    {
      title: "Device Compatibility",
      description: "On iPad, PC, Android phone tablets, old & modern POS Terminals, elivra Restaurant POS runs flawlessly.",
      Icon: FaMobileAlt, // Using FaMobileAlt icon
      color: "text-red-500", // Icon color
    },
    {
      title: "Discount & Loyalty",
      description: "Use discounts on the total or on particular goods. The elivra Loyalty system is robust, adaptable, and simple to use. It can automatically enroll new customers.",
      Icon: FaTags, // Using FaTags icon
      color: "text-red-500", // Icon color
    },
    {
      title: "Order Tracking",
      description: "Track every order from start to finish, ensuring that your kitchen and front-of-house teams are always on the same page, improving customer satisfaction and operational efficiency.",
      Icon: FaClipboardList, // New feature with FaClipboardList icon
      color: "text-green-500", // Icon color
    },
    {
      title: "Inventory Management",
      description: "Keep a real-time track of your ingredients and supplies. Automatically update stock levels as orders are placed, reducing waste and preventing stockouts.",
      Icon: FaWarehouse, // New feature with FaWarehouse icon
      color: "text-blue-500", // Icon color
    },
    {
      title: "Staff Management",
      description: "Manage your restaurant staff efficiently with features like scheduling, payroll, and performance tracking. Streamline communication and improve productivity.",
      Icon: FaUsersCog, // New feature with FaUsersCog icon
      color: "text-yellow-500", // Icon color
    },
    // Add more card data here if needed...
  ];

  return (
    <div>
      <RestaurantPage
        title="Elevate Your Dining Experience"
        description="Effective and Reliable Restaurant Management System that offers great value to your business."
        imageUrl="/images/dww.jpg" // Replace with your actual image path
      />
      <CardGrid
        gridTitle="Features"
        gridDescription="The Complete POS System for Restaurants."
        cardsData={cardsData}
      />
    </div>
  );
};

export default Restaurant;
