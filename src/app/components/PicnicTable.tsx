import React, { useState, useEffect } from 'react';

const PicnicTable: React.FC = () => {
  // Array of image paths
  const images = ['/picnic_icon1.png', '/picnic_icon2.png', '/picnic_icon3.png'];
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
    <div className="relative w-full overflow-visible px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0 mb-10">
        {/* Title "Package Review" - Left aligned on desktop */}
        <h2 className="text-5xl font-bold text-center md:text-left">
          Our Packages
        </h2>

        {/* Right side content: paragraph and image */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end md:space-x-10">
          {/* Paragraph - Made wider on desktop */}
          <p className="text-2xl mb-5 mt-5 md:mt-0 md:mb-0 md:text-center md:w-[600px] text-gray-600 text-center"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            All tables include a beautifully styled tablescape complete with cozy and luxurious pillow seating, high-quality blankets, rugs, cushions, and decor. Each table also comes with a unique menu, infused water, a waste basket, and personalized welcome chalkboard.
          </p>
          
          {/* Image container */}
          <div
            className="flex justify-center text-center md:justify-end items-center md:flex-shrink-0 overflow-hidden relative"
            style={{ width: '100%', maxWidth: '250px', height: '300px' }} // Ensure image container has explicit size
            onClick={nextImage} // Change image on click
          >
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Picnic Table Setup ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  transitionDelay: `${index === currentImageIndex ? '150ms' : '0ms'}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Reorganized DaisyUI Table for picnic packages */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="table w-full text-gray-700" style={{ fontFamily: 'Playfair Display, serif' }}>
          <thead className="text-gray-800 bg-white text-xl text-center">
            <tr>
              <th></th>
              <th style={{ whiteSpace: 'normal' }}>Beachside Brunch</th>
              <th style={{ whiteSpace: 'normal' }}>Romantic Picnic</th>
              <th style={{ whiteSpace: 'normal',  }}>Sunset Delight</th>
            </tr>
          </thead>
          <tbody className="text-lg" style={{borderTop: '2px solid black'}}>
            <tr>
              <td className="font-bold">Themes</td>
              <td>Tropical, Sunny</td>
              <td>Elegant, Intimate</td>
              <td>Vibrant, Colorful</td>
            </tr>
            <tr>
              <td className="font-bold">Menu</td>
              <td>Brunch menu</td>
              <td>Menu for 2</td>
              <td>Shareable menu</td>
            </tr>
            {/* Merged row for Duration */}
            <tr>
              <td className="text-center font-bold" colSpan="1">Duration </td>
              <td className="text-center" colSpan="3">2 hours </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PicnicTable;
