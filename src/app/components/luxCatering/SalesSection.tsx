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
    <motion.div
      className="bg-luxpearl shadow-2xl rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxcedar/30 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 text-luxpearl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-sm lg:text-base opacity-90">{description}</p>
          </motion.div>
        </div>
        <div className="lg:w-1/2 bg-gradient-to-br from-luxsand to-luxcedar text-luxpearl p-6 lg:p-8">
          <div className="flex flex-col h-full">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Exquisite culinary creations",
                  "Personalized menu planning",
                  "Professional and attentive staff",
                  "Locally sourced, fresh ingredients"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-luxsand rounded-full mr-3" />
                    <span className="text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-6"
            >
              <div className="relative bg-luxsand/30 rounded-lg p-6">
                <Quote className="absolute top-2 left-2 w-8 h-8 text-luxcedar opacity-50" />
                <p className="relative z-10 text-base lg:text-lg italic mb-4 text-center">
                  {reviewQuote}
                </p>
                <p className="text-right text-luxsand font-semibold">— {reviewAuthor}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-auto pt-4"
            >
              <button className="w-full sm:w-2/3 mx-auto block rounded-xl bg-luxsand hover:bg-luxforest text-luxpearl text-lg sm:text-xl py-4 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Plan Your Tofino Event
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}