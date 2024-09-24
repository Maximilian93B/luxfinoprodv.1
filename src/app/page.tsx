'use client'

import { NextPage } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import QuoteRequestDrawer from "./components/FormDrawer";


{/* Page Structure */}
const HomePage: NextPage = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSections />
      <OwnerFounderSection />
      <CorporateLunchSection />
      <TribalParksSection />
      <Footer />
    </div>
  );
};


{/* Home Page Layout */}
export default HomePage;

const HeroSection: React.FC = () => {
  return(
  <div className="hero min-h-screen relative bg-white text-black flex justify-center items-center">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/11899340_3840_2160_24fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Hero Content */}
  <div className="hero-content text-white text-center relative z-10">
    <div className="max-w-md">
      {/* Heading */}
      <h1 className="mb-5 text-5xl font-bold">Welcome to LuxFino</h1>
      {/* Subheading */}
      <p className="mb-5">
        LuxFino offers premium experiences that blend luxury, nature, and indulgence.
      </p>
      {/* Buttons Container */}
      <div className="flex justify-center items-center space-x-4">
        {/* Explore Button */}
        <button className="btn btn border-black text-black">
          Explore LuxFino
        </button>
        {/* Quote Request Drawer */}
        <QuoteRequestDrawer />
      </div>
    </div>
  </div>
</div>
);
};

const AboutSection: React.FC = () => {
  return (
    <div className="about py-12 bg-white text-black">
      <div className="container mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">About LuxFino</h2>
        <p className="text-lg mb-5">
          LuxFino offers premium experiences that blend luxury, nature, and indulgence. From curated picnics to bespoke glamping and chef-catered gourmet dining, we create moments that are both intimate and extraordinary.
        </p>

        {/* Divider */}
        <Divider />

        {/* Grid Layout About Section */}
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-2">
          {/* Our Mission */}
          <InfoCard
            title="Our Mission"
            content="At LuxFino, we aim to provide exclusive, high-end luxury experiences that connect our clients with nature, indulgence, and relaxation."
          />

          {/* Services */}
          <InfoCard
            title="Services"
            content="We offer curated picnics, bespoke glamping, and chef-catered gourmet dining, creating moments that are both intimate and extraordinary."
          />

          {/* Unique Experiences - Full width under the two above */}
          <div className="col-span-1 md:col-span-2">
            <InfoCard
              title="Unique Experiences"
              content="We specialize in curating unforgettable moments, from beachside dinners to star-lit glamping setups, all designed to immerse you in the beauty of Tofino."
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
    <div className="bg-gray-100 text-black flex items-center justify-center p-4 rounded-lg shadow-none">
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

const ServiceSections: React.FC = () => {
  return (
    <>
      <Divider />
      <ServiceSection
        title="Luxury Pop-up Picnics"
        description="Enjoy a curated luxury picnic experience in Tofino's most scenic locations. Perfect for a romantic getaway or group gathering with friends."
        buttonText="Book a Lux Picnic"
        imageSrc="/LuxPicMain.jpeg"
        imageAlt="Lux Picnic"
        reverse={false}
      />
      <Divider />
      <ServiceSection
        title="Wild Luxury: Escape with Lux Remote"
        description="Escape into the heart of Tofino with our Lux Remote experience—a carefully curated glamping adventure that blends the comforts of luxury with the serenity of nature."
        buttonText="Explore Lux Remote"
        imageSrc="/pexels-cottonbro-5359324.jpg"
        imageAlt="Lux Remote"
        reverse={true}
      />
      <Divider />
      <ServiceSection
        title="Tofino Tailored to Your Taste"
        description="Elevate your dining with Lux Catering, where our executive chef crafts personalized, gourmet meals tailored to your tastes."
        buttonText="Book LuxFino Catering"
        imageSrc="/Catering1.JPG"
        imageAlt="Lux Catering"
        reverse={false}
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
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div className="hero h-auto lg:h-80">
      <div
        className={`hero-content flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } space-y-6 lg:space-y-0`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={150}
          className="rounded-lg shadow-none object-cover w-full lg:w-auto lg:h-auto"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
          <p className="py-4 lg:py-6">{description}</p>
          <button className="btn btn-outline border-black text-black">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Divider: React.FC = () => {
  return <div className="divider border-gray-300"></div>;
};

const OwnerFounderSection: React.FC = () => {
  return (
    <>
      <Divider />
      <div className="about bg-white py-12 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Owner &amp; Founder</h2>
          <p className="text-lg mb-12">
            LuxFino was founded by two passionate individuals, Morgan and Andres, who wanted to create unforgettable, luxury experiences in the heart of Tofino.
          </p>

          {/* Avatars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BioCard
              name="Morgan"
              imageSrc="/Copy of IMG_7096.jpeg"
              bio="Morgan's bio goes here."
            />

            <BioCard
              name="Andres"
              imageSrc="/Copy of IMG_7096.jpeg"
              bio="Andres's bio goes here."
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
    <div className="bg-gray-100 p-6 rounded-lg flex items-center">
      <div className="avatar mr-4">
        <div className="mask mask-hexagon w-48 h-48">
          <Image src={imageSrc} alt={name} width={192} height={192} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
};

const CorporateLunchSection: React.FC = () => {
  return (
    <>
      <Divider />
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-8">
            Exclusive Corporate Lunches at Lux Remote
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-black mb-12">
            Elevate your next corporate meeting with an unforgettable lunch experience at Lux Remote. Fly in by float plane or arrive by sea, conduct your business in the serene wilderness, enjoy a gourmet meal, and then return home—all in a single day.
          </p>

          {/* Gourmet Lunch Card */}
          <div className="card lg:card-side bg-white shadow-xl border border-gray-200 mb-12">
            <figure className="w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <Image
                src="/CorporateLunches.jpeg"
                alt="Gourmet Lunch"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-6 lg:w-1/2">
              <h2 className="card-title text-2xl font-bold text-black">
                Gourmet Lunch &amp; Meeting
              </h2>
              <p className="text-black mt-4">
                Host your corporate meeting in the serene surroundings of Lux Remote. Enjoy a gourmet lunch prepared by our top chefs, making your business day both productive and indulgent.
              </p>
              <div className="card-actions justify-start mt-6">
                <button className="btn bg-black text-white mr-4">Book Now</button>
                <button className="btn btn-outline border-black text-black">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TribalParksSection: React.FC = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center space-y-6">
        {/* Tribal Parks Allies Symbol */}
        <div className="flex justify-center">
          <Image
            src="/path/to/tribal_parks_allies_symbol.jpg"
            alt="Tribal Parks Allies Symbol"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-white bg-black py-12">
          <h2 className="text-3xl font-bold mb-4">Proud Allies of Tribal Parks</h2>
          <p className="max-w-2xl mx-auto">
            LuxFino is proud to work in collaboration with Tribal Parks Allies, supporting initiatives that preserve the natural beauty of Tofino and respecting the rights and traditions of First Nations communities. Our commitment extends beyond luxury experiences—we aim to contribute positively to the environment and the cultural landscape in which we operate, fostering sustainable tourism and community-driven practices.
          </p>
        </div>
      </div>
    </div>
  );
};
