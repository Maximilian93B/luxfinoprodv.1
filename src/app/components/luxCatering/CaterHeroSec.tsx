'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type HeroSectionProps = {
  chefImageSrc?: string;
  logoSrc?: string;
  title?: string;
  description?: string;
  chefName?: string;
  chefTitle?: string;
};

export default function CateringHeroSection({
  chefImageSrc = '/DreCatingBio.JPG',
  logoSrc = '/Lux.CateringLogo.svg',
  title = "Experience Tofino's Flavours with Us",
  description = "At Lux Fino, our Executive Chef doesn't just prepare meals—he crafts unforgettable culinary experiences. With a passion for innovation and a commitment to using the finest ingredients, every dish is a masterpiece designed to delight your senses.",
  chefName = "Meet Our Executive Chef",
  chefTitle = "Crafting culinary masterpieces with passion and precision"
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-luxsand to-luxpearl overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-5 bg-luxsand" />
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Hero Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <Image
                src={logoSrc}
                alt="Lux Fino Logo"
                width={250}
                height={250}
                className="object-contain rounded-full shadow-lg"
                priority
              />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-luxcedar mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-luxcedar mb-8 leading-relaxed">
              {description}
            </p>
            <motion.button
              className="rounded-full font-semibold text-lg bg-luxsand text-luxpearl px-8 py-4 shadow-lg hover:bg-luxforest hover:shadow-xl transition-all duration-300"
            >
              Explore Our Menu
            </motion.button>
          </motion.div>

          {/* Executive Chef Image */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={chefImageSrc}
                alt="Executive Chef at LuxFino"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                quality={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxsand/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-luxpearl">
                <h2 className="text-2xl font-semibold mb-2">{chefName}</h2>
                <p className="text-sm">{chefTitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}