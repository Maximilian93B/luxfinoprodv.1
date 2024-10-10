'use client';

import Image from "next/image";
import { FC } from "react";

interface ImageItem {
  src: string;
  alt: string;
}


interface GalleryProps {
  images: ImageItem[];
  title?: string;
  description?: string;
}

const Gallery: FC<GalleryProps> = ({
  images,
  title = 'Some of Our Dishes',
  description = 'Indulge in our exquisite culinary creations, meticulously crafted with local ingredients.',
}) => (
  <div className="bg-white py-10 mb-4">
    <div className="text-center mb-6 px-4">
      <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
      <p className="text-lg text-gray-600 mt-4">{description}</p>
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
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
            quality={100}
            placeholder="blur"
            blurDataURL="/placeholder.png" // Replace with an actual placeholder image if available
          />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
