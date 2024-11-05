'use client';

import React from 'react';
import Footer from '../components/Footer';
import EventsWeddingsCateringHeroSection from '../components/luxCatering/CaterHeroSec';
import LuxFinoEventsShowcase from '../components/luxCatering/CateringShowcase';
import WeddingPackagesSection from '../components/luxCatering/SalesSection';
import Gallery from '../components/luxCatering/Gallery';
import ReviewsSection from '../components/luxCatering/CaterReviews';
import EventBookingCTA from '../components/luxCatering/CaterCTA';

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { src: '/Catering1.JPG', alt: 'Elegant wedding table setup' },
  { src: '/CateringGallery.JPG', alt: 'Cocktail hour spread' },
  { src: '/CateringGaller2.JPG', alt: 'Cocktail hour spread' },
  { src: '/Catering3.JPG', alt: 'Gourmet appetizers' },
  { src: '/Catering4.JPG', alt: 'Outdoor event setup' },
  { src: '/Catering5.jpeg', alt: 'Wedding cake' },
  { src: '/Catering6.jpeg', alt: 'Cocktail hour spread' },

];

const weddingPackage = {
  title: "Exquisite Wedding Packages",
  imageSrc: "/luxfino-wedding-setup.jpg",
  imageAlt: "Luxurious wedding table setup",
  description: "Make your special day unforgettable with our tailored wedding packages. From intimate ceremonies to grand celebrations, we bring your vision to life with exquisite cuisine and impeccable service.",
  reviewQuote: "Lux Fino made our wedding day absolutely perfect. The food was incredible, and their attention to detail was beyond our expectations.",
  reviewAuthor: "Sarah & James, Newlyweds"
};

const reviews = [
  {
    name: 'Emily & Michael',
    text: "Lux Fino made our wedding day absolutely magical. The food was exquisite, and their attention to detail was impeccable.",
    eventType: "Wedding",
  },
  {
    name: 'Sarah Johnson',
    text: "Our corporate gala was a huge success thanks to Lux Fino's professional service and delicious cuisine. Highly recommend!",
    eventType: "Corporate Event",
  },
  {
    name: 'The Thompsons',
    text: "Lux Fino catered our family reunion, and it was beyond our expectations. Everyone raved about the food and presentation.",
    eventType: "Family Gathering",
  },
];

export default function EventsWeddingsCateringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <EventsWeddingsCateringHeroSection />  
        <LuxFinoEventsShowcase />
        <WeddingPackagesSection
          title={weddingPackage.title}
          imageSrc={weddingPackage.imageSrc}
          imageAlt={weddingPackage.imageAlt}
          description={weddingPackage.description}
          reviewQuote={weddingPackage.reviewQuote}
          reviewAuthor={weddingPackage.reviewAuthor}
        />
        <Gallery images={galleryImages} />
        <ReviewsSection reviews={reviews} />
        <EventBookingCTA />
      </main>
      <Footer />
    </div>
  );
}