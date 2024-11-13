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

export default function EventsWeddingsCateringHeroSection({
  chefImageSrc = '/DreCatingBio.JPG',
  logoSrc = '/Lux.CateringLogo.svg',
  title = "Elevate Your Events with Tofino's Finest Catering",
  description = "From intimate weddings to grand corporate gatherings, Lux Fino brings exquisite flavors and impeccable service to your special occasions. Our Executive Chef and team craft unforgettable culinary experiences that celebrate Tofino's unique coastal essence.",
  chefName = "Meet Our Executive Chef",
  chefTitle = "Crafting memorable experiences through innovative cuisine"
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-[#F8F3E3] overflow-hidden flex items-center justify-center">
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

            <h1 className="text-4xl sm:text-5xl font-bold text-[#0C2233] mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-[#333333] mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                className="rounded-full font-semibold text-lg bg-[#0C2233] text-[#F8F3E3] px-8 py-4 shadow-lg hover:bg-[#7D8A6A] hover:shadow-xl transition-all duration-300"
              >
                Plan Your Event
              </motion.button>
              <motion.button
                className="rounded-full font-semibold text-lg border-2 border-[#D4AF37] text-[#0C2233] px-8 py-4 shadow-lg hover:bg-[#D4AF37] hover:text-[#F8F3E3] hover:shadow-xl transition-all duration-300"
              >
                View Wedding Packages
              </motion.button>
            </div>
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
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                quality={100}
                placeholder="blur"
                blurDataURL="/placeholder.png"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#F8F3E3]">
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