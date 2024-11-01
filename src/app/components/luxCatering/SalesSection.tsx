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

export default function SalesSection({
  title,
  imageSrc,
  imageAlt,
  description,
  reviewQuote,
  reviewAuthor
}: SalesSectionProps) {
  return (
    <section className="bg-gradient-to-br from-luxsand to-luxice text-luxpearl py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl mb-6 sm:mb-8"
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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Why Choose Us?</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Exquisite culinary creations",
                  "Personalized menu planning",
                  "Professional and attentive staff",
                  "Locally sourced, fresh ingredients"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-luxpearl rounded-full mr-3" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="relative bg-luxsand/30 rounded-lg p-6 sm:p-8">
                <Quote className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 text-luxcedar opacity-50" />
                <p className="relative z-10 text-lg sm:text-xl italic mb-4 sm:mb-6 text-center">
                  {reviewQuote}
                </p>
                <p className="text-right text-luxpearl font-semibold text-base sm:text-lg">— {reviewAuthor}</p>
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
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={450}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}