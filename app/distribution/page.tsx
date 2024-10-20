// pages/restaurant.tsx

import CardGrid from "@/components/CardGrid";
import RestaurantPage from "@/components/RestuarantPage";


const Distribution = () => {
  const cardsData = [
    {
      title: "Cloud Based",
      description: "From the Uplift cloud or mobile Dashboard apps for iOS or Android, you may access all the reports even while traveling.",
      imageUrl: "/images/cloud.jpg",
      buttonText: "Learn More"
    },
    {
      title: "Device Compatibility",
      description: "On iPad, PC, Android phone tablets, old & modern POS Terminals, Uplift Restaurant POS runs flawlessly.",
      imageUrl: "/images/device.jpg",
      buttonText: "Learn More"
    }, {
      title: "Discount & Loyalty",
      description: "Use discounts on the total or on particular goods. The UpLift Loyalty system is robust, adaptable, and simple to use. It can automatically enroll new customers.",
      imageUrl: "/images/discount.jpg",
      buttonText: "Learn More"
    }, {
      title: "Easy Barcode Scanning",
      description: "Use the built-in rear camera on your mobile device or barcode scanners to read barcodes on products during a sale.",
      imageUrl: "/images/scan.jpg",
      buttonText: "Learn More"
    }, {
      title: "Pay ins & Payouts",
      description: "With pay ins and payouts, you may handle your money more precisely and systematically. Make a manual addition to or subtraction from your cash register using POS.",
      imageUrl: "/images/pay.jpg",
      buttonText: "Learn More"
    }, {
      title: "Printed or Electronic Receipt",
      description: "Give customers the option of printing or receiving their receipt by email or SMS.",
      imageUrl: "/images/receipts.jpg",
      buttonText: "Learn More"
    },
    // Add more card data here...
  ];

  return (
    <div>
      <RestaurantPage
        title="The right distribution channel that changes everything"
        description="products are made available to all retailers"
        imageUrl="/images/distr.webp" // Replace with your actual image path
      />
      <CardGrid
        gridTitle="Features"
        gridDescription="The Complete POS System for Restaurants."
        cardsData={cardsData}
      />
    </div>
  );
};

export default Distribution;
