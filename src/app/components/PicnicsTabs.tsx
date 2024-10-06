import React, { useState } from 'react';

const PicnicsTabs: React.FC = () => {
  const picnicPackages = [
    {
      title: 'Beachside Brunch',
      description:
        'Start your day with the soothing sounds of the ocean. Our Beachside Brunch Picnic offers a selection of fresh pastries, fruits, and beverages.',
      imageSrc: '/beach_picnic2.jpg',
      imageAlt: 'Beachside Brunch',
    },
    {
      title: 'Romantic Picnic',
      description:
        'Surprise your loved one with a romantic picnic setup. Includes a curated menu, candles, and a cozy setting by the sea.',
      imageSrc: '/Catering2.jpg',
      imageAlt: 'Romantic Escape Picnic',
    },
    {
      title: 'Sunset Delight',
      description:
        'Experience the magic of a Tofino sunset with our Sunset Delight Picnic package. Enjoy gourmet treats and fine wine as the sun dips below the horizon.',
      imageSrc: '/Catering3.jpg',
      imageAlt: 'Sunset Delight Picnic',
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="relative w-full overflow-visible mt-[20px] h-[600px]">
      {/* Tab Navigation */}
      <div className="flex justify-center overflow-x-auto p-4 space-x-4 bg-white shadow-md sticky top-0 z-20">
        {picnicPackages.map((pkg, index) => (
          <button
            key={pkg.title}
            className={`px-6 py-2 text-md font-semibold whitespace-normal max-w-[150px] text-center transition-colors border-b-4 ${
              index === currentTab
                ? 'border-black text-black'
                : 'border-transparent text-black hover:border-black hover:text-black'
            }`}
            onClick={() => setCurrentTab(index)}
          >
            {pkg.title}
          </button>
        ))}
      </div>

      {/* Background Image Fading */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
        {picnicPackages.map((pkg, index) => (
          <div
            key={pkg.title}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentTab ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img className="w-full h-full object-cover"
              src={pkg.imageSrc}
              alt={pkg.imageAlt}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* DaisyUI Carousel Content Box */}
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[600px] h-auto bg-white bg-opacity-80 p-6 shadow-lg rounded-lg text-center flex flex-col justify-center items-center overflow-y-auto">
        <p
          className="text-lg text-black break-words max-w-[480px]"
          style={{ fontFamily: `'Arial', sans-serif` }}
        >
          {picnicPackages[currentTab].description}
        </p>
      </div>

    </div>
  );
};

export default PicnicsTabs;
