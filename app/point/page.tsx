import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary

const Point = () => {
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

      <HomeComponent
        title="Uplift, Multiple Live Cart POS."
        description="Uplift's Multiple Live Cart POS empowers businesses to manage multiple transactions simultaneously, ensuring smoother operations and faster service. With real-time updates, it enhances staff efficiency and provides a seamless customer experience, making it ideal for busy restaurants, retail, and service-oriented businesses."
        buttonText="Sign In"
        imageSrc="/images/cloud.jpg" // Update with your actual image path
        imageAlt="Image description"
        isImageFirst={false} // Set to true if you want the image first
      />
      <CardGrid
        gridTitle="Key features of Point of Sales System"
        gridDescription="Uplift offers a comprehensive suite of tools designed to help small and medium enterprises across Africa grow and thrive."
        cardsData={cardsData}
      />

    </div>
  );
};

export default Point;
