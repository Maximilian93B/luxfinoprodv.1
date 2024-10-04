import React, { useState } from 'react';

const PicnicsTabs: React.FC = () => {
  const picnicPackages = [
    {
      title: 'Beachside Brunch Picnic',
      description:
        'Start your day with the soothing sounds of the ocean. Our Beachside Brunch Picnic offers a selection of fresh pastries, fruits, and beverages.',
      imageSrc: '/Catering1.jpg',
      imageAlt: 'Beachside Brunch Picnic',
    },
    {
      title: 'Romantic Picnic',
      description:
        'Surprise your loved one with a romantic picnic setup. Includes a curated menu, candles, and a cozy setting by the sea.',
      imageSrc: '/Catering2.jpg',
      imageAlt: 'Romantic Escape Picnic',
    },
    {
      title: 'Sunset Delight Picnic',
      description:
        'Experience the magic of a Tofino sunset with our Sunset Delight Picnic package. Enjoy gourmet treats and fine wine as the sun dips below the horizon.',
      imageSrc: '/Catering3.jpg',
      imageAlt: 'Sunset Delight Picnic',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % picnicPackages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? picnicPackages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden h-[35rem]">
      {/* Background Image Fading */}
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
        {picnicPackages.map((pkg, index) => (
          <div
            key={pkg.title}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={pkg.imageSrc}
              alt={pkg.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* DaisyUI Carousel Content Box */}
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] lg:w-[60%] max-w-[600px] h-auto">
        <div className="carousel w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {picnicPackages.map((pkg, index) => (
              <div
                key={pkg.title}
                className="carousel-item w-full flex-shrink-0"
              >
                <div className="bg-white bg-opacity-90 p-6 shadow-lg rounded-md text-center flex flex-col justify-center items-center h-auto min-h-[150px] max-h-[80vh] overflow-y-auto w-full">
                  <h2
                    className="text-2xl font-bold mb-2 text-gray-800 break-words w-full"
                    style={{ fontFamily: `'Playfair Display', serif` }}
                  >
                    {pkg.title}
                  </h2>
                  <p
                    className="text-lg text-gray-600 break-words max-w-[480px]"
                    style={{ fontFamily: `'Arial', sans-serif` }}
                  >
                    {pkg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow navigation */}
        <div className="absolute inset-y-0 left-[-1rem] flex items-center">
          <button
            onClick={goToPrevSlide}
            className="bg-white bg-opacity-90 text-gray-800 hover:bg-gray-100 shadow-md rounded-full p-2 transition-all duration-300"
          >
            ◄
          </button>
        </div>
        <div className="absolute inset-y-0 right-[-1rem] flex items-center">
          <button
            onClick={goToNextSlide}
            className="bg-white bg-opacity-90 text-gray-800 hover:bg-gray-100 shadow-md rounded-full p-2 transition-all duration-300"
          >
            ►
          </button>
        </div>
      </div>

      {/* Inquire Now button positioned on the background image area */}
      <div className="absolute bottom-4 right-4">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
          Inquire Now
        </button>
      </div>
    </div>
  );
};

export default PicnicsTabs;
