'use client'



import Navbar from "../components/Navbar"
import Image from "next/image"
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";


export default function LuxCateringPage() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
      {/* Hero Section */}
      <div className="hero min-h-screen bg-white mt-8">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
        {/* Hero Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:mr-12 text-center lg:text-left mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-5">
            Experience Culinary Excellence with Lux Fino's Executive Chef
          </h1>
          <p className="py-6 text-lg text-gray-600 mb-4">
            At Lux Fino, our Executive Chef doesn't just prepare meals—he crafts unforgettable culinary experiences. With a passion for innovation and a commitment to using the finest ingredients, every dish is a masterpiece designed to delight your senses.
          </p>
        </div>

      {/* Executive Chef Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <div className="max-w-sm rounded-lg shadow-2xl overflow-hidden">
        <Image
          src="/DreCatingBio.JPG" // Replace with the correct path to the chef's image
          alt="Executive Chef at LuxFino"
          width={400}
          height={200}
          className="rounded-lg object-cover"
          quality={100}
        />
      </div>
      </div>
    </div>
    </div>
    {/* Gallery Section with Margin Top */}
    <div className="mt-12">
    <Gallery />
    </div>

    {/* First Sales Section */}
    <div className="container mx-auto text-center mt-12 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Elevate Your Event with Our Signature Catering
      </h2>
      <div className="flex justify-center">
        <Image
          src="/CateringSale1.JPG"
          alt="LuxCatering Signature Dishes"
          width={800}
          height={600}
          quality={100}
        />
      </div>
      <p className="mt-6 max-w-2xl mx-auto">
        Transform your event into an extraordinary experience with LuxCatering. We tailor every detail to your vision, ensuring a memorable occasion that leaves a lasting impression on your guests.
      </p>
    </div>

    {/* Second Sales Section */}
    <div className="container mx-auto text-center mt-2 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Seasonal Specials: A Culinary Journey Awaits
      </h2>
      <div className="flex justify-center">
        <Image
          src="/CateringSale2.JPG"
          alt="LuxCatering Seasonal Specials"
          width={800}
          height={600}
          quality={100}
        />
      </div>
      <p className="mt-6 max-w-2xl mx-auto">
        Indulge in our exclusive seasonal offerings crafted by our Executive Chef. Featuring the freshest ingredients and innovative flavors, our seasonal menu is a limited-time experience designed to captivate and inspire.
      </p>
    </div>

    {/* Call-to-Action Section */}
    <div className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Embark on Your Culinary Journey?
        </h2>
        <button className="btn btn-primary px-6 py-2 text-lg text-white rounded-full shadow-lg">
          Contact Us to Start Planning
        </button>
      </div>
    </div>

    {/* Footer Section with Margin Top */}
    <div className="mt-12">
      <Footer />
    </div>
    </div>
  );
}

