import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // If you're not using Next.js, you can use the regular <img> tag

const PicnicTable: React.FC = () => {
  // Array of image paths
  const images = ['/picnic_icon1.png', '/picnic_icon2.png', '/picnic_icon3.png','/picnic_icon3.png','/picnic_icon3.png','/picnic_icon3.png','/picnic_icon3.png','/picnic_icon3.png'];
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

  // Data for the packages
  const packages = [
    {
      name: 'The Ultimate Cuddle Puddle',
      price: '$250',
      people: '2 people',
      duration: '2 hours',
      description:
        'Snuggle up with your cuddle buddy and watch the sunset melt into the horizon with this beautifully curated pillow and blanket setup. We will ensure you are warm and cozy with a variety of plush pillows and blankets set in the most picture perfect location!',
    },
    {
      name: 'Lux.Fino Golden Hour',
      price: '$470',
      people: '2 people',
      duration: '2 hours',
      description:
        'A true Tofino picnic experience! Feeling peckish? We have you covered with our locally curated charcuterie grazing boards fit for Queens and Kings. This table is the perfect match to ignite your ultimate vacation mode.',
    },
    {
      name: 'The Perfect Proposal Package',
      price: '$800',
      people: '2 people',
      duration: '2 hours',
      description:
        'Create an unforgettable experience for you and the one you call forever with. This one-of-a-kind, intimate, and romantic picnic experience will have you falling head over heels all over again. Take this time to sit back, relax, and leave all the special details to us, as we will help coordinate and prepare your special day to perfection.',
    },
    {
      name: 'Two to Tango',
      price: '$370',
      people: '2 people',
      duration: '2 hours',
      description:
        'Everything you need to have a picture-perfect picnic with our complete tablescape package detailed above. This is an ideal option if you want to bring your own food and beverage, as we will provide the dinnerware.',
    },
    {
      name: 'Grand Luxury',
      price: '$770',
      people: '2 people',
      duration: '2 hours',
      description:
        'The ultimate luxury picnic experience is yours! Everything you need to have a picture-perfect picnic, plus a cherry on top! Have memories that last forever!',
    },
    {
      name: 'In Room Welcome Package',
      price: '$150',
      people: 'N/A',
      duration: 'N/A',
      description:
        'Indulge in a welcome package for your hotel room and/or your Airbnb. This could be for you or as a gift to someone arriving here in Tofino. Let us create some memories for you!',
    },
  ];

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
              <th className="py-3 px-4 text-left">Package</th>
              <th className="py-3 px-4 text-center">Price</th>
              <th className="py-3 px-4 text-center">People</th>
              <th className="py-3 px-4 text-center">Duration</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base md:text-lg">
            {packages.map((pkg, index) => (
              <tr key={index} className="border-b">
                <td className="font-bold py-4 px-4">{pkg.name}</td>
                <td className="py-4 px-4 text-center">{pkg.price}</td>
                <td className="py-4 px-4 text-center">{pkg.people}</td>
                <td className="py-4 px-4 text-center">{pkg.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Package Descriptions */}
      <div className="mt-12 space-y-8">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3
              className="text-2xl font-bold mb-4 text-gray-800"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {pkg.name} - {pkg.price}
            </h3>
            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {pkg.description}
            </p>
            <div className="mt-4 text-gray-600">
              <p>
                <strong>People:</strong> {pkg.people}
              </p>
              <p>
                <strong>Duration:</strong> {pkg.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicnicTable;
