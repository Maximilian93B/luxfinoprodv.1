'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

type SalesSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  reviewQuote: string;
  reviewAuthor: string;
};

export default function WeddingPackagesSection({
  title = "Exquisite Wedding Packages",
  imageAlt = "Luxurious wedding table setup",
  description = "Make your special day unforgettable with our tailored wedding packages. From intimate ceremonies to grand celebrations, we bring your vision to life with exquisite cuisine and impeccable service.",
  reviewQuote = "Lux Fino made our wedding day absolutely perfect. The food was incredible, and their attention to detail was beyond our expectations.",
  reviewAuthor = "Sarah & James, Newlyweds"
}: SalesSectionProps) {
  return (
    <section className="bg-white text-luxcopper py-8 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <motion.h2 
              className="text-3xl  text-luxcedar sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-lg text-luxcedar sm:text-xl mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {description}
            </motion.p>
            <motion.div
              className="mb-8 sm:mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-xl text-luxcedar sm:text-2xl font-semibold mb-4 sm:mb-6">Our Wedding Packages Include:</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Customized menu creation",
                  "Professional service staff",
                  "Elegant table settings and decor",
                  "Cake cutting and champagne toast",
                  "Coordination with other vendors"
                ].map((item, index) => (
                  <li key={index} 
                  className="flex items-center">
                    <div className="w-2 h-2 bg-luxcedar rounded-full mr-3" />
                    <span className="text-base text-luxcedar sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="relative bg-gray-400 rounded-lg p-4 sm:p-6 md:p-8 text-luxcedar">
                <Quote className="absolute top-2 sm:top-3 left-2 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10r opacity-50" />
                <p className="relative z-10 text-base sm:text-lg md:text-xl italic mb-3 sm:mb-4 md:mb-6 text-center pl-4 sm:pl-6">
                  {reviewQuote}
                </p>
                <p className="text-right font-semibold text-sm sm:text-base md:text-lg">— {reviewAuthor}</p>
              </div>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Image
                src='/WeddingPackages.JPG'
                alt={imageAlt}
                width={800}
                height={450}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}