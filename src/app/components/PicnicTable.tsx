import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // If you're not using Next.js, you can use the regular <img> tag

const PicnicTable: React.FC = () => {
  // Array of image paths
  const images = ['/LuxPicMain.jpeg', '/LuxPicMain.jpeg', '/LuxPicMain.jpeg'];
  // State to hold the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Effect to change the image every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-visible px-4 py-8 md:py-12 bg-white">
      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Our Packages
      </h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 md:mb-16 space-y-8 md:space-y-0">
        {/* Left Side - Description */}
        <div className="md:w-1/2 px-2 md:px-4">
          <p
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            All tables include a beautifully styled tablescape complete with cozy and luxurious pillow
            seating, high-quality blankets, rugs, cushions, and decor. Each table also comes with a
            unique menu, infused water, a waste basket, and personalized welcome chalkboard.
          </p>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="md:w-1/2 flex justify-center items-center px-2 md:px-4">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Picnic Table Setup ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className={`rounded-lg shadow-lg transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full focus:outline-none ${
                    index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Packages Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
      <table
        className="min-w-full text-gray-700"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
      <thead className="bg-gray-100 text-base sm:text-lg md:text-xl">
        <tr>
          <th className="py-3 px-4 text-left"></th>
          <th className="py-3 px-4 text-center">Beachside Brunch</th>
          <th className="py-3 px-4 text-center">Romantic Picnic</th>
          <th className="py-3 px-4 text-center">Sunset Delight</th>
        </tr>
      </thead>
      <tbody className="text-sm sm:text-base md:text-lg">
        <tr className="border-b">
          <td className="font-bold py-4 px-4">Themes</td>
          <td className="py-4 px-4 text-center">Tropical, Sunny</td>
          <td className="py-4 px-4 text-center">Elegant, Intimate</td>
          <td className="py-4 px-4 text-center">Vibrant, Colorful</td>
        </tr>
        <tr className="border-b">
          <td className="font-bold py-4 px-4">Menu</td>
          <td className="py-4 px-4 text-center">Brunch menu</td>
          <td className="py-4 px-4 text-center">Menu for 2</td>
          <td className="py-4 px-4 text-center">Shareable menu</td>
        </tr>
        <tr>
          <td className="font-bold py-4 px-4">Duration</td>
          <td className="py-4 px-4 text-center" colSpan={3}>
            2 hours
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  );
};

export default PicnicTable;
