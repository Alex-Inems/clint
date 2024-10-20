import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary

const Inventory = () => {
  const cardsData = [
    {
      title: "Products Imports",
      description: "Using the XML/CSV file, you can quickly add thousands of products to your store database.",
      imageUrl: "/images/product.jpg",
      buttonText: "Learn More"
    },
    {
      title: "Track Inventory",
      description: "Keep track of products and component stock.",
      imageUrl: "/images/track.jpg",
      buttonText: "Learn More"
    },
    {
      title: "Purchase Order recovery",
      description: "Increase profits by preventing stock shortages with Receipt of Purchase Order.",
      imageUrl: "/images/purchase.jpg",
      buttonText: "Learn More"
    }, {
      title: "Low Stock Adjustments",
      description: "Recieve daily notification of low stock levels so that you can place the necessary product orders on time.",
      imageUrl: "/images/stock.jpg",
      buttonText: "Learn More"
    }, {
      title: "Printed or Electronic Receipt",
      description: "Give customers the option of printing or receiving their receipt by email or SMS.",
      imageUrl: "/images/receipts.jpg",
      buttonText: "Learn More"
    },
    {
      title: "Easy Barcode Scanning",
      description: "Use the built-in rear camera on your mobile device or barcode scanners to read barcodes on products during a sale.",
      imageUrl: "/images/scan.jpg",
      buttonText: "Learn More"
    },

    // Add more card data here...
  ];

  return (
    <div>

      <HomeComponent
        title="Uplift Smart Inventory, say goodbye to spreadsheet smart cloud based product."
        description="Smart inventory management system to maximize your profits. UpLift product inventory management system allows you to port products from your old POS online platform by importing a CVS file.

Plan, purchase export records, to suppliers, track stock receipts and manage vendor relationship."
        buttonText="Sign In "
        imageSrc="/images/inventory-hero.png" // Update with your actual image path
        imageAlt="Image description"
        isImageFirst={false} // Set to true if you want the image first
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
