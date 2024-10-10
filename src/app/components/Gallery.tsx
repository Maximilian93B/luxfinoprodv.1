'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import icons

interface ImageItem {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: ImageItem[];
  headerTitle?: string;
  headerSubtitle?: string;
  title?: string;
  description?: string;
}

const Gallery: FC<GalleryProps> = ({
  images,
  headerTitle = 'Discover Some of LuxFinos Dishes',
  headerSubtitle = 'LuxFino strives to deliver a unique catering expeirience tailored for your event.',
  title = 'Local Flavours : Tailored to your Taste',
  description = 'Indulge in our culinary creations, meticulously crafted with local ingredients.',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white py-8 mb-4">
      {/* Header and Sales Title */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-5xl font-bold text-gray-800">{headerTitle}</h1>
        <p className="text-xl text-gray-600 mt-4">{headerSubtitle}</p>
      </div>

      {/* Centered Toggleable Button */}
      <div className="flex justify-center mb-6">
        <button
          className="btn btn-lg flex items-center bg-white  outline-black shadow-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Hide Gallery' : 'View Gallery'}
          {isOpen ? (
            <FiChevronUp className="ml-2 text-2xl" />
          ) : (
            <FiChevronDown className="ml-2 text-2xl" />
          )}
        </button>
      </div>

      {/* Gallery Content */}
      {isOpen && (
        <div className="px-4">
          <div className="text-center mb-6">
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
                  blurDataURL="/placeholder.png" // Replace with your placeholder image
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
