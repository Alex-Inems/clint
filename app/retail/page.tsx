import CardGrid from '@/components/CardGrid';
import HomeComponent from '@/components/Home/HomeComponent'; // Adjust the import path as necessary

const HomePage = () => {
  const cardsData = [
    {
      title: "Streamlined Payment Solutions",
      description: "Uplift enables you to accept a wide range of payment methods, from cash to integrated card systems, ensuring a smooth checkout process for your customers.",
      imageUrl: "/images/payment.jpg",
      buttonText: "Learn More"
    },
    {
      title: "Comprehensive Inventory Management",
      description: "Keep track of your stock effortlessly with real-time inventory updates. Uplift helps you manage your resources efficiently, preventing stockouts and overstocking.",
      imageUrl: "/images/inventory.jpg",
      buttonText: "Learn More"
    },
    // Add more card data here...
  ];

  return (
    <div>
    <HomeComponent
      title="Welcome to TrackMe!"
      description="TrackMe is your ultimate solution for managing your time effectively. With our intuitive interface, you can keep track of your tasks, set reminders, and improve your productivity. Join us and take the first step towards a more organized life!"
      buttonText="Sign In"
      imageSrc="/images/retail-hero.png" // Update with your actual image path
      imageAlt="Image description"
      isImageFirst={false} // Set to true if you want the image first
    />
     <CardGrid
        gridTitle="Empowering African SMEs"
        gridDescription="Uplift offers a comprehensive suite of tools designed to help small and medium enterprises across Africa grow and thrive."
        cardsData={cardsData}
      />
    </div>
  );
};

export default HomePage;
