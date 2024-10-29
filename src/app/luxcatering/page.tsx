'use client';

import React from 'react';
import CateringHeroSection from '../components/luxCatering/CaterHeroSec';
import SalesSection from '../components/luxCatering/SalesSection';
import LuxFinoCateringShowcase from '../components/luxCatering/CateringShowcase';
import Gallery from '../components/Gallery';
import TribalParksSection from '../components/TribalParksAdvert';
import Footer from '../components/Footer';

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { src: '/Catering1.JPG', alt: 'Dish 1' },
  { src: '/Catering2.JPG', alt: 'Dish 2' },
  { src: '/Catering3.JPG', alt: 'Dish 3' },
  { src: '/Catering4.JPG', alt: 'Dish 4' },
  { src: '/Catering5.jpeg', alt: 'Dish 5' },
  { src: '/Catering5.jpeg', alt: 'Dish 6' },
];

const salesSections = [
  {
    title: "Elevate Your Event with Our Signature Catering",
    imageSrc: "/CateringSale1.JPG",
    imageAlt: "LuxCatering Signature Dishes",
    description: "Transform your event into an extraordinary experience with LuxCatering. We tailor every detail to your vision, ensuring a memorable occasion that leaves a lasting impression on your guests.",
    reviewQuote: "LuxCatering turned our wedding into a culinary masterpiece. Unforgettable!",
    reviewAuthor: "Emily & James, Newlyweds"
  },
];

export default function LuxCateringPage() {
  return (
      <div className="bg-luxsand">
      <main className="flex flex-col">
        <CateringHeroSection />
          <LuxFinoCateringShowcase />
          <div className="flex justify-center py-12 px-2">
            {salesSections.map((section, index) => (
              <SalesSection
                key={index}
                title={section.title}
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                description={section.description}
                reviewQuote={section.reviewQuote}
                reviewAuthor={section.reviewAuthor}
              />
            ))}
            </div>
             <Gallery images={galleryImages} />
     
            

        <section className="py-6 sm:py-8 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TribalParksSection />
          </div>
        </section>
      </main>
      
      <Footer />
      </div>
  );
}
