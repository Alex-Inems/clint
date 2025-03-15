"use client";
import Link from "next/link";
import Image from "next/image";

interface HomeComponentProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

const HomeComponent: React.FC<HomeComponentProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen items-center">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-4 px-6 md:px-12 py-12 bg-white">
        <h1 className="text-3xl md:text-3xl font-bold leading-tight text-gray-600">
          {title} <br />
          <span className="text-red-600">{subtitle}</span>
        </h1>
        <p className="text-lg max-w-xl text-gray-700">{description}</p>
        <Link href="/auth">
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md transition-transform duration-300 hover:bg-red-500 hover:scale-105">
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HomeComponent;
