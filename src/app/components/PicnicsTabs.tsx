import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const PicnicsTabs: React.FC = () => {
  const picnicPackages = [
    {
      title: 'The Ultimate Cuddle Puddle',
      description:
        "Snuggle up with your cuddle buddy and watch the sunset melt into the horizon with this beautifully curated pillow and blanket setup. We will ensure you are warm and cozy with a variety of plush pillows and blankets set in the most picture perfect location!",
      imageSrc: '/LuxPicMain.jpeg',
      imageAlt: 'Cozy beachside setup with pillows and blankets for the Ultimate Cuddle Puddle',
      link: '/packages/ultimate-cuddle-puddle',
    },
    {
      title: 'Golden Hour',
      description:
        'A true Tofino picnic experience! Feeling peckish? We have you covered with our locally curated charcuterie grazing boards fit for Queens and Kings. This table is the perfect match to ignite your ultimate vacation mode.',
      imageSrc: '/Catering2.jpg',
      imageAlt: 'Luxurious picnic setup during golden hour with gourmet charcuterie board',
      link: '/packages/golden-hour',
    },
    {
      title: 'The Perfect Proposal Package',
      description:
        'Create an unforgettable experience for you and the one you call forever. This one-of-a-kind, intimate and romantic picnic experience will have you falling head over heels all over again. Take this time to sit back, relax and leave all the special details to us, as we will help coordinate and prepare your special day to perfection.',
      imageSrc: '/Catering3.jpg',
      imageAlt: 'Romantic picnic setup perfect for a marriage proposal',
      link: '/packages/perfect-proposal',
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="relative w-full px-2 py-12 sm:px-4 sm:py-24  bg-luxcream">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <motion.div 
          className="flex flex-wrap justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {picnicPackages.map((pkg, index) => (
            <motion.button
              key={pkg.title}
              className={`text-base md:text-lg font-semibold pb-2 border-b-2 transition-colors duration-300 ${
                index === currentTab
                  ? 'border-luxnavy text-luxnavy'
                  : 'border-transparent text-luxnavy hover:border-luxnavy'
              }`}
              onClick={() => setCurrentTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {pkg.title}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="border-t bg-gradient-to-b from-luxcream to-luxblush"></div>

      <div className="container mx-auto px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={`title-${currentTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-20 text-gray-800 font-playfair"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {picnicPackages[currentTab].title}
              </motion.h2>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${currentTab}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base md:text-lg text-luxnavy mb-6 md:mb-8 leading-relaxed"
                style={{ fontFamily: 'Avenir, sans-serif' }}
              >
                {picnicPackages[currentTab].description}
              </motion.p>
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link href={picnicPackages[currentTab].link} passHref>
              <motion.div
                className="inline-block px-6 py-3 bg-luxblush text-luxnavy text-base md:text-lg rounded-full hover:bg-luxnavy hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                        >
              Learn More
            </motion.div>
          </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-64 md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-luxnavy">
              <AnimatePresence mode="wait">
                {picnicPackages.map((pkg, index) => (
                  index === currentTab && (
                    <motion.div
                      key={pkg.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 "
                    >
                      <Image
                        src={pkg.imageSrc}
                        alt={pkg.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-luxnavy opacity-30"></div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {picnicPackages.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                    index === currentTab ? 'bg-black' : 'bg-luxblush text-luxcharcoal'
                  }`}
                  onClick={() => setCurrentTab(index)}
                  aria-label={`Select ${picnicPackages[index].title}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                ></motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PicnicsTabs;