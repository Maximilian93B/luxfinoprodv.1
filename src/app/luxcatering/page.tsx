'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Link from 'next/link';

const images = [
  { src: '/Catering1.JPG', alt: 'Dish 1' },
  { src: '/Catering2.JPG', alt: 'Dish 2' },
  { src: '/Catering3.JPG', alt: 'Dish 3' },
  { src: '/Catering4.JPG', alt: 'Dish 4' },
  { src: '/Catering5.jpeg', alt: 'Dish 5' },
  { src: '/Catering5.jpeg', alt: 'Dish 6' },
];

const LuxCateringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Divider */}
        <div className="divider w-full"></div>

        {/* Gallery Section */}
        <section className="mt-2">
          <Gallery images={images} />
        </section>
        
        {/* Divider */}
         <div className="divider w-full"></div>

         {/* Sales Sections */}
         <section className="container mx-auto mt-6 px-4">
          <div className="flex flex-col md:flex-row w-full items-stretch">
            <SalesSection
              title="Elevate Your Event with Our Signature Catering"
              imageSrc="/CateringSale1.JPG"
              imageAlt="LuxCatering Signature Dishes"
              description="Transform your event into an extraordinary experience with LuxCatering. We tailor every detail to your vision, ensuring a memorable occasion that leaves a lasting impression on your guests."
            />
            <div className="divider md:divider-horizontal">&</div>
            <SalesSection
              title="Seasonal Specials: A Culinary Journey Awaits"
              imageSrc="/CateringSale2.JPG"
              imageAlt="LuxCatering Seasonal Specials"
              description="Indulge in our exclusive seasonal offerings crafted by our Executive Chef. Featuring the freshest ingredients and innovative flavors, our seasonal menu is a limited-time experience designed to captivate and inspire."
            />
          </div>
        </section>

  
        {/* Reviews Section */}
        <ReviewsSection />

        {/* Divider */}
        <div className="divider w-full"></div>    

        {/* Call-to-Action Section */}
        <CallToActionSection />

         {/* Divider */}
         <div className="divider w-full"></div>

        {/* Tribal Parks Section */}
        <TribalParksSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LuxCateringPage;

interface SalesSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}


const SalesSection: React.FC<SalesSectionProps> = ({ title, imageSrc, imageAlt, description }) => {
  return (
    <section className="container mx-auto text-center mt-6 py-6 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
      <div className="flex justify-center">
        <div className="w-3/4 max-w-md shadow-xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
            quality={100}
            placeholder="blur"
            blurDataURL="/placeholder.png" // Replace with actual placeholder if available
          />
        </div>
      </div>
      <p className="mt-8 max-w-2xl mx-auto text-gray-600">{description}</p>
    </section>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="hero min-h-screen  bg-white">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
        {/* Hero Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:mr-8 text-center lg:text-left mb-8 px-4">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start mb-5">
            <Image
              src="/Lux.CateringLogo.svg" // Replace with the actual path to your logo
              alt="Lux Fino Logo"
              width={300} // Adjust the width as needed
              height={500} // Adjust the height as needed
             className="object-contain rounded-full shadow-xl"
              priority
            />
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Experience Tofinos Flavours with Us
          </h1>
          <p className="py-6 text-lg text-gray-600">
            At Lux Fino, our Executive Chef doesn't just prepare meals—he crafts unforgettable culinary experiences. With a passion for innovation and a commitment to using the finest ingredients, every dish is a masterpiece designed to delight your senses.
          </p>
        </div>
        {/* Executive Chef Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4">
          <div className="max-w-sm rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="/DreCatingBio.JPG"
              alt="Executive Chef at LuxFino"
              width={400}
              height={200}
              className="rounded-lg object-cover"
              quality={100}
              placeholder="blur"
              blurDataURL="/placeholder.png" // Replace with actual placeholder if available
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};



const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'John Doe',
      text: "Lux Fino's catering made our event unforgettable. The food was exquisite!",
    },
    {
      name: 'Jane Smith',
      text: 'Exceptional service and delicious dishes. Highly recommend Lux Fino!',
    },
    {
      name: 'Emily Johnson',
      text: 'Our guests were blown away by the culinary experience provided by Lux Fino.',
    },
  ];

  return (
    <section className="container mx-auto mt-12 px-4 min-h-[30vh] ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Guests Are Saying</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg p-6 mb-6 md:mb-0 flex-1 shadow-md ">
            {/*  include image of reviewer if we want */}
            {/* {review.imageSrc && (
              <div className="flex justify-center mb-4">
                <Image
                  src={review.imageSrc}
                  alt={`Photo of ${review.name}`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            )} */}
            <p className="text-gray-600 italic mb-4 text-xl">"{review.text}"</p>
            <p className="text-gray-800 font-bold text-right">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-white min-h-[30vh] relative flex justify-center text-black py-20" >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Embark on Your Culinary Journey?
        </h2>
        <Link href="/contact">
          <button className="btn btn-primary px-8 py-3 text-lg rounded-full shadow-lg">
            Start Planning
          </button>
        </Link>
      </div>
    </section>
  );
};

const TribalParksSection: React.FC = () => {
  return (
    <section className="bg-black py-8">
      <div className="container mx-auto text-center px-4 min-h-[45vh]">
        {/* Tribal Parks Allies Symbol */}
        <div className="flex justify-center mb-4">
          <Image
            src="/TribalParksLogo.svg"
            width={300}
            height={100}
            alt="Tribal Parks Allies Symbol"
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            LuxFino is Proud to Support Tribal Parks
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            LuxFino is proud to work in collaboration with Tribal Parks Allies, supporting initiatives that preserve the natural beauty of Tofino and respecting the rights and traditions of First Nations communities. Our commitment extends beyond luxury experiences—we aim to contribute positively to the environment and the cultural landscape in which we operate, fostering sustainable tourism and community-driven practices.
          </p>
        </div>
      </div>
    </section>
  );
};
