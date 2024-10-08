'use client';

import Image from "next/image";
import { FC } from "react";

interface ImageItem {
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { src: '/Catering1.JPG', alt: 'Dish 1' },
  { src: '/Catering2.JPG', alt: 'Dish 2' },
  { src: '/Catering3.JPG', alt: 'Dish 3' },
  { src: '/Catering4.JPG', alt: 'Dish 4' },
  { src: '/Catering5.jpeg', alt: 'Dish 5' },
  { src: '/Catering5.jpeg', alt: 'Dish 6' },
];

const Gallery: FC = () => (
  <div className="bg-white py-10 mb-4">
    <div className="text-center mb-6">
      <h2 className="text-4xl font-bold text-gray-800">Some of Our Dishes</h2>
      <p className="text-lg text-gray-600 mt-4">
        Indulge in our exquisite culinary creations, meticulously crafted with local ingredients.
      </p>
    </div>

   {/* Gallery Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
      {images.map((image, index) => (
        <div
          key={index}
          className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            quality={100}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
