import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PicnicsTabs: React.FC = () => {
  const picnicPackages = [
    {
      title: 'The Ultimate Cuddle Puddle',
      description:
        "Snuggle up with your cuddle buddy and watch the sunset melt into the horizon with this beautifully curated pillow and blanket setup. We will ensure you are warm and cozy with a variety of plush pillows and blankets set in the most picture perfect location!",
      imageSrc: '/LuxPicMain.jpeg',
      imageAlt: 'Beachside Brunch',
      link: '/packages/beachside-brunch',
    },
    {
      title: 'Golden Hour ',
      description:
        'A true Tofino picnic experience! Feeling peckish? We have you covered with our locally curated charcuterie grazing boards fit for Queens and Kings.  This table is the perfect match to ignite your ultimate vacation mode.',
      imageSrc: '/Catering2.jpg',
      imageAlt: 'Romantic Escape Picnic',
      link: '/packages/romantic-escape',
    },
    {
      title: 'The Perfect Proposal Package',
      description:
        'Create an unforgettable experience for you and the one you call forever with. This one of a kind, intimate and romantic picnic experience will have you falling head over heels all over again. Take this time to sit back, relax and leave all the special details to us, as we will help coordinate and prepare your special day to perfection. ',
      imageSrc: '/Catering3.jpg',
      imageAlt: 'Sunset Delight Picnic',
      link: '/packages/sunset-delight',
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="relative w-full overflow-hidden mt-4 bg-white">
      {/* Tab Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center space-x-4">
          {picnicPackages.map((pkg, index) => (
            <button
              key={pkg.title}
              className={`text-base md:text-lg font-semibold pb-2 border-b-2 transition-colors duration-300 ${
                index === currentTab
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
              }`}
              onClick={() => setCurrentTab(index)}
            >
              {pkg.title}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Line Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Textual Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-800"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {picnicPackages[currentTab].title}
            </h2>
            <p
              className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {picnicPackages[currentTab].description}
            </p>
            <Link href={picnicPackages[currentTab].link} className="inline-block px-6 py-3 bg-black text-white text-base md:text-lg rounded-full hover:bg-gray-800 transition-colors duration-300">
             
              Learn More
              
            </Link>
          </div>

          {/* Image Carousel */}
          <div className="relative order-1 md:order-2">
            <div className="relative w-full h-64 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              {picnicPackages.map((pkg, index) => (
                <div
                  key={pkg.title}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentTab ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={pkg.imageSrc}
                    alt={pkg.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {picnicPackages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                    index === currentTab ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentTab(index)}
                  aria-label={`Select ${picnicPackages[index].title}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicnicsTabs;
