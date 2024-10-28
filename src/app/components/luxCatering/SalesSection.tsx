'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      className="card lg:card-side bg-luxpearl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="lg:w-1/2 relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-luxpearl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-sm opacity-80">{description}</p>
        </motion.div>
      </figure>
      <div className="card-body lg:w-1/2 bg-gradient-to-br from-luxforest to-luxocean text-luxpearl">
        <div className="flex flex-col h-full justify-between">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Exquisite culinary creations</li>
              <li>Personalized menu planning</li>
              <li>Professional and attentive staff</li>
              <li>Locally sourced, fresh ingredients</li>
            </ul>
          </motion.div>
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="relative">
              <svg className="absolute top-0 left-0 w-8 h-8 text-luxsand opacity-50 transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative z-10 text-lg italic">{reviewQuote}</p>
              <p className="mt-2 text-right text-luxsand">— {reviewAuthor}</p>
            </div>
          </motion.div>
        </div>
    
      </div>
    </motion.div>
  );
}