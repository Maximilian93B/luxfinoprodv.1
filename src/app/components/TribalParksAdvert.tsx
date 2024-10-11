import React from 'react' 
import Image from "next/image";


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

  export default TribalParksSection;