import React from 'react';
import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary
import { FaChartLine, FaFileInvoice, FaCreditCard, FaClipboardCheck, FaBoxes, FaFileAlt } from 'react-icons/fa'; // Import icons

const Reports = () => {
  const cardsData = [
    {
      title: "Sales Information",
      description: "With sales data, you can see how much profit is made and apply resources more effectively to grow your business.",
      Icon: FaChartLine, // Chart line icon
      color: "text-blue-500", // Blue color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Invoice Status",
      description: "Track invoices with ease. You can check if there are Active, Void, Paid or Not Paid.",
      Icon: FaFileInvoice, // Invoice icon
      color: "text-green-500", // Green color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Credit Terms",
      description: "With our system, you can specify when payment is due for credit sales, any applicable discounts, and any applicable interest or late payment fees.",
      Icon: FaCreditCard, // Credit card icon
      color: "text-yellow-500", // Yellow color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Purchase Order Status",
      description: "You can track the status of each purchase made.",
      Icon: FaClipboardCheck, // Clipboard check icon
      color: "text-red-500", // Red color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Stock Availability",
      description: "You can monitor how well your store inventory meets customer demand.",
      Icon: FaBoxes, // Boxes icon
      color: "text-purple-500", // Purple color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Reports",
      description: "Reports will assist you in determining which items are causing you to lose or gain the most money, and you will be able to adjust your stock accordingly to increase profits.",
      Icon: FaFileAlt, // File icon
      color: "text-teal-500", // Teal color for the icon
      buttonText: "Learn More"
    },
    // Add more card data here...
  ];

  return (
    <div>
      <HomeComponent
        title="elivra Reports and Analytics"
        subtitle=""
        description="Powerful report analytics designed to help you run your business and have the right insights."
        buttonText="Sign In"
        imageSrc="/images/multiple-pos.png" // Update with your actual image path
        imageAlt="Image description"
        
      />
      <CardGrid
        gridTitle="Key Features"
        gridDescription="Analytics and reports have never been this exciting"
        cardsData={cardsData}
      />
    </div>
  );
};

export default Reports;
