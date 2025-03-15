import React from 'react';
import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary
import { FaFileImport, FaBoxes, FaClipboardList, FaBell, FaReceipt, FaBarcode } from 'react-icons/fa'; // Import icons

const Inventory = () => {
  const cardsData = [
    {
      title: "Products Imports",
      description: "Using the XML/CSV file, you can quickly add thousands of products to your store database.",
      Icon: FaFileImport, // File import icon
      color: "text-blue-500", // Blue color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Track Inventory",
      description: "Keep track of products and component stock.",
      Icon: FaBoxes, // Boxes icon
      color: "text-green-500", // Green color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Purchase Order Recovery",
      description: "Increase profits by preventing stock shortages with Receipt of Purchase Order.",
      Icon: FaClipboardList, // Clipboard list icon
      color: "text-yellow-500", // Yellow color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Low Stock Adjustments",
      description: "Receive daily notification of low stock levels so that you can place the necessary product orders on time.",
      Icon: FaBell, // Bell icon
      color: "text-red-500", // Red color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Printed or Electronic Receipt",
      description: "Give customers the option of printing or receiving their receipt by email or SMS.",
      Icon: FaReceipt, // Receipt icon
      color: "text-purple-500", // Purple color for the icon
      buttonText: "Learn More"
    },
    {
      title: "Easy Barcode Scanning",
      description: "Use the built-in rear camera on your mobile device or barcode scanners to read barcodes on products during a sale.",
      Icon: FaBarcode, // Barcode icon
      color: "text-teal-500", // Teal color for the icon
      buttonText: "Learn More"
    },
    // Add more card data here...
  ];

  return (
    <div>
      <HomeComponent
        title="Smart Inventory."
        subtitle=''
        description=" maximize your profits.

Plan purchases. export records to suppliers."
        buttonText="Sign In"
        imageSrc="/images/2.jpg" // Update with your actual image path
        imageAlt="Image description"
     
      />
      <CardGrid
        gridTitle="Features"
        gridDescription="Sophisticated features to handle inventory"
        cardsData={cardsData}
      />
    </div>
  );
};

export default Inventory;
