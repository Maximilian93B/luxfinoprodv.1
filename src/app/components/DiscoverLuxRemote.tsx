// DiscoverSection.tsx
import React from 'react';

const DiscoverSection: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
        Escape to Ultimate Seclusion
        </h2>
        <div className="flex justify-center">
          <img
            src="/DiscoverLuxRemote.JPG"
            alt="Lux Remote Location"
            className="w-full md:w-2/3 h-96 object-cover rounded-lg"
          />
        </div>
        <p className="mt-6 max-w-2xl mx-auto">
        Discover a haven untouched by time, where the only footprints are yours.** Nestled deep within Tofino's pristine wilderness, our exclusive retreat offers unparalleled privacy and tranquility. Leave the world behind and immerse yourself in the raw beauty of nature, all while enjoying the comforts of unparalleled luxury. 
        </p>
      </div>
      <div className="container mx-auto text-center mt-6">
        <h2 className="text-3xl font-bold mb-8">
        Luxury Meets Wilderness
        </h2>
        <div className="flex justify-center">
          <img
            src="/LuxRemotePic2.JPG"
            alt="Lux Remote Location"
            className="w-full md:w-2/3 h-96 object-cover rounded-lg"
          />
        </div>
        <p className="mt-6 max-w-2xl mx-auto">
        Experience the perfect fusion of rugged wilderness and refined elegance.** Our secluded accommodations are designed to harmonize with the natural surroundings, offering panoramic views, gourmet dining, and bespoke services. Every detail is curated to provide you with an intimate connection to nature without sacrificing comfort. 
        </p>
      </div>
      <div className="container mx-auto text-center mt-6">
        <h2 className="text-3xl font-bold mb-8">
        Your Personal Sanctuary Awaits
        </h2>
        <div className="flex justify-center">
          <img
            src="/LuxRemote3.JPG"
            alt="Lux Remote Location"
            className="w-full md:w-2/3 h-96 object-cover rounded-lg"
          />
        </div>
        <p className="mt-6 max-w-2xl mx-auto">
        Unwind, rejuvenate, and rediscover yourself in a place where time stands still.** Whether you're seeking solitude, a romantic escape, or a unique adventure, our remote retreat offers a sanctuary tailored to your desires. Indulge in personalized experiences that enrich your soul and create memories that last a lifetime. 
        </p>
      </div>
    </div>
    
  );
};

export default DiscoverSection;
