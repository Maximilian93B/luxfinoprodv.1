'use client'

import React, {useState, useEffect} from "react";
import { NextPage } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TribalParksSection from "./components/TribalParksAdvert";
import Image from "next/image";
import QuoteRequestDrawer from "./components/FormDrawer";
import Link from "next/link";

{/* Page Structure */}
const HomePage: NextPage = () => {

  
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSections />
      <SpecialEventsSection />
      <OwnerFounderSection />
      <TribalParksSection />
      <Footer />


      {/* Place QuoteRequestDrawer at the root level of the HomePage */}
     
    </div>
  );
};


{/* Home Page Layout */}
export default HomePage;

const HeroSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: '/LuxPicMain.jpeg',
      alt: 'Luxury Pop-up Picnics',
      title: 'LuxFino Picnics: Luxury Pop-up Picnics',
      description:
        'Elevate your next outing with a thoughtfully curated luxury picnic. Surrounded by Tofino’s stunning landscapes, each picnic is designed to offer elegance, comfort, and a moment of indulgence you’ll never forget.',
    },
    {
      id: 2,
      image: '/LuxRemoteIndex.JPG',
      alt: 'Wild Luxury: Escape with Lux Remote',
      title: 'Wild Luxury: Escape to Lux Remote',
      description:
        'Discover the art of wild luxury with Lux Remote. Escape the ordinary and immerse yourself in an exclusive off-grid adventure, combining rugged beauty with unparalleled comfort in nature’s most breathtaking settings.',
    },
    {
      id: 3,
      image: '/Catering1.JPG',
      alt: 'Catering, Coroporate Events, Weddings',
      title: 'Luxfino Catering: Tofino Tailored to Your Taste',
      description:
        'Delight your senses with Lux Catering’s tailored culinary experiences. Our executive chef crafts bespoke menus that marry the freshest local ingredients with global inspiration—creating a dining experience like no other in the heart of Tofino.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    }, 7000); 

    return () => clearInterval(interval); // Clean up on unmount
  }, [slideCount]);

  // Handler for navigation buttons
  const goToSlide = (index: number) => {
    setCurrentSlide((index + slideCount) % slideCount);
  };

  return (
    <div className="relative min-h-screen md:min-h-[80vh] text-white">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === currentSlide}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>
  
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen md:min-h-[80vh] px-4 sm:px-8 md:px-16 text-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 px-2">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium mb-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4">
              {slide.description}
            </p>
  
            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#about" className="btn btn-primary text-white px-6 py-3">
                Learn More
              </Link>
              {/* Book Now Button to Open Drawer */}
              <div className="flex justify-center">
                <QuoteRequestDrawer />
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Navigation Buttons */}
      <button
        className="btn btn-circle hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 focus:outline-none"
        onClick={() => goToSlide(currentSlide - 1)}
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        className="btn btn-circle hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 focus:outline-none"
        onClick={() => goToSlide(currentSlide + 1)}
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
  
};


{/* Set id to allow buttons to have access to scroll */}
const AboutSection: React.FC = () => {
  return (
    <div id="about" className="about py-28 bg-white text-black">
      <div className="container mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">About LuxFino</h2>
        <p className="text-lg mb-5">
        Lux.Fino is Tofino’s premier provider of luxury pop-up picnics, in-house catering, and remote glamping. We create unforgettable moments with locally inspired touches that showcase the natural beauty of Tofino.

        </p>

        {/* Divider */}
        <Divider />

        {/* Grid Layout About Section */}
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-2 ">
          {/* Our Mission */}
          <InfoCard
            title="Our Mission"
            content="At Lux.Fino, we blend luxury and nature to offer unique experiences that bring people together. Whether it’s a beach picnic or a remote glamping retreat, our services celebrate the stunning landscapes of Tofino."
          />

          {/* Services */}
          <InfoCard
            title="Services"
            content="Lux.Fino offers tailored luxury picnics, gourmet catering with local flavors, and exclusive remote glamping experiences. Our partnerships with local artisans ensure that every detail, from charcuterie boards to floral arrangements, is thoughtfully crafted."
          />

          {/* Unique Experiences - Full width under the two above */}
          <div className="col-span-1 md:col-span-2">
            <InfoCard
              title="Unique Experiences"
              content="Experience the best of Tofino with personalized luxury services, including pop-up beach picnics and off-grid glamping escapes. We combine adventure with elegance to create unforgettable memories in one of the world’s most stunning locations.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white text-black flex items-center justify-center p-4 rounded-lg shadow-md mx-auto ">
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

{/*Services Section */}
const ServiceSections: React.FC = () => {
  return (
    <>
      <Divider />
      <ServiceSection
        title="Luxury Pop-up Picnics"
        description="Lux.Fino’s pop-up picnics combine luxury and nature for an unforgettable beachside experience. Enjoy cozy seating, elegant décor, and locally-sourced food, perfect for any occasion. Relax, connect, and savor Tofino’s beauty in style."
        buttonText="Explore LuxFino Picnics"
        imageSrc="/LuxPicMain.jpeg"
        imageAlt="Lux Picnic"
        reverse={false}
        linkHref='/luxpicnic'
      />
      <Divider />
      <ServiceSection
        title="Wild Luxury: Escape with Lux Remote"
        description="Lux Remote offers a luxurious off-grid escape in Tofino’s wilderness. Enjoy the perfect blend of comfort and adventure with cozy accommodations, stunning ocean views, and total seclusion. It’s the ultimate way to unwind and experience nature in style."
        buttonText="Escape to Lux Remote"
        imageSrc="/DiscoverLuxRemote.JPG"
        imageAlt="Lux Remote"
        reverse={true}
        linkHref='/luxremote'
      />
      <Divider />
      <ServiceSection
        title="Tofino Tailored to Your Taste"
        description="Lux Catering brings gourmet, locally-inspired cuisine to your special event. Whether it’s an intimate gathering or a grand celebration, our in-house catering delivers fresh, delicious meals crafted to impress, making every moment feel indulgent and memorable."
        buttonText="Book LuxFino Catering"
        imageSrc="/LuxCateringCard.JPG"
        imageAlt="Lux Catering"
        reverse={false}
        linkHref='/luxcatering'
      />
      <Divider />
    </>
  );
};

interface ServiceSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  linkHref: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  reverse = false,
  linkHref,
}) => {
  return (
    <div className="hero h-auto lg:h-80">
      <div
        className={`hero-content flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } space-y-6 lg:space-y-0 shadow-md`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={350}
          height={100}
          className="rounded-lg shadow-none object-cover w-full lg:w-auto lg:h-auto"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
          <p className="py-4 lg:py-6">{description}</p>
          <Link href={linkHref}>
            <button className="btn btn-outline border-black text-black">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

{/* Page Dividers */}
const Divider: React.FC = () => {
  return <div className="divider border-black"></div>;
};


{/* Founders Section  */}
const OwnerFounderSection: React.FC = () => {
  return (
    <>
      <Divider />
      <div className="about bg-white py-12 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Owners &amp; Founders</h2>
          <p className="text-lg mb-12">
            At the heart of Lux.Fino are Morgan and Dre, a dynamic duo combining their passions for luxury, food, and unforgettable experiences. Together, they bring their love for Tofino and its natural beauty into everything they create, from breathtaking picnics to immersive glamping adventures. Their unique talents and vision are the foundation of Lux.Fino, making every experience feel personal, thoughtful, and truly special.
          </p>

          {/* Avatars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BioCard
              name="Morgan"
              imageSrc="/MorganBoiPIc.JPG" 
              bio="Morgan is dedicated to crafting unforgettable experiences for guests, believing that every moment begins with a lasting first impression. As a curator of beautiful aesthetics, she has a keen eye for hidden treasures and exquisite textiles, ensuring you feel like royalty while you relax and take in the breathtaking views."
            />

            <BioCard
              name="Andres"
              imageSrc="/DreHeadShot.JPG" 
              bio="Chef Andres, known as Dre, made his way to Tofino seven years ago, drawn by a deep passion for luxury and culinary artistry. His journey began at the stunning Clayoquot Wilderness Resort, where he infused his Latin American roots into every dish, blending comfort food with vibrant global influences. With over a decade of experience, nothing brings him more joy than seeing a smile after the first bite."
            />
          </div>
        </div>
      </div>
    </>
  );
};

interface BioCardProps {
  name: string;
  imageSrc: string;
  bio: string;
}

const BioCard: React.FC<BioCardProps> = ({ name, imageSrc, bio }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
      <div className="avatar mb-6 md:mb-0 md:mr-6">
        <div className="relative w-64 h-64 mask mask-hexagon">
          <Image
            src={imageSrc}
            alt={name}
            width={800}
            height={'100'}
            style={{ objectFit: 'cover',
              objectPosition: 'center ',
             }}
            className="rounded-lg "
          />
        </div>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

const SpecialEventsSection: React.FC = () => {
  return (
    <>
      <Divider />
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-8">
            Marketing Slogan goes here.... 
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-black mb-12">
            Elevate your special occasions with unforgettable experiences at Lux Remote. Whether you're hosting a corporate meeting or celebrating a wedding, arrive in style, conduct your event in the serene wilderness, enjoy gourmet meals, and create memories that last a lifetime.
          </p>

          {/* Events Cards */}
          <div className="flex flex-col lg:flex-row items-start w-full">
            {/* Corporate Lunch Card */}
            <div className="card bg-white shadow-xl border border-gray-200 flex-grow lg:mr-4 mb-8 lg:mb-0">
              <div className="card-body p-6">
              <figure className="relative w-full h-96 mb-6 rounded-lg">
                  <Image
                    src="/LuxLunches.JPG"
                    alt="Gourmet Corporate Lunch"
                    width={800}
                    height={500}
                    style={{ objectFit: 'cover', objectPosition: 'center', scale: '1',}}
                    className="rounded-lg h-auto"
                  />
                </figure>
                <h2 className="card-title text-2xl font-bold text-black">
                  Gourmet Lunch &amp; Meeting
                </h2>
                <p className="text-black mt-4">
                  Host your meeting in the serene surroundings of Tofino or Lux Remote. Enjoy a gourmet lunch prepared by our top chef, making your business day both productive and indulgent.
                </p>
                <div className="card-actions justify-start mt-6">
                  {/*Quote Drawer */}
                <div className="flex justify-center">
                <QuoteRequestDrawer />
                </div>
                  <button className="btn btn-outline border-black text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider lg:divider-horizontal">&</div>

            {/* Weddings Card */}
            <div className="card bg-white shadow-xl border border-gray-200 flex-grow lg:mr-4 mb-8 lg:mb-0">
              <div className="card-body p-6">
                <figure className="relative w-full h-96 mb-6 rounded-lg">
                  <Image
                    src="/WeddingPIc.JPG" 
                    alt="Lux Remote Weddings"
                    width={700}
                    height={100}
                    style={{ objectFit: 'cover',
                      objectPosition: 'center',
                      scale: '1',
                     }}
                    className="rounded-lg"
                  />
                </figure>
                <h2 className="card-title text-2xl font-bold text-black">
                  Dream Proposals at Lux Remote
                </h2>
                <p className="text-black mt-4">
                  Say "I do" in the breathtaking wilderness of Lux Remote. Our exclusive location offers a romantic and intimate setting for your special day, complete with gourmet dining and unforgettable views.
                </p>
                <div className="card-actions justify-start mt-6">
                  {/*Quote Drawer */}
                <div className="flex justify-center">
                <QuoteRequestDrawer />
                </div>
                  <button className="btn btn-outline border-black text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
