// pages/restaurant.tsx

import CardGrid from "@/components/CardGrid";
import RestaurantPage from "@/components/RestuarantPage";


const Restaurant = () => {
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
      },{
        title: "Discount & Loyalty",
        description: "Use discounts on the total or on particular goods. The NeüRMS Loyalty system is robust, adaptable, and simple to use. It can automatically enroll new customers.",
        imageUrl: "/images/discount.jpg",
        buttonText: "Learn More"
      },
    // Add more card data here...
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
