'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
  headerSubtitle = 'LuxFino strives to deliver a unique catering experience tailored for your event.',
  title = 'Local Flavours : Tailored to your Taste',
  description = 'Indulge in our culinary creations, meticulously crafted with local ingredients.',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-8 mb-4 bg-gradient-to-b from-white via-luxpearl to-white">
      {/* Header and Sales Title */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxforest">{headerTitle}</h1>
        <p className="text-lg md:text-xl font-sans text-luxforest mt-4">{headerSubtitle}</p>
      </div>

      {/* Centered Toggleable Button */}
      <div className="flex justify-center mb-6">
        <button
          className="btn btn-lg flex items-center bg-luxforest text-luxpearl hover:bg-luxocean hover:scale-105 transition-all duration-300 shadow-xl rounded-full px-6 py-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '' : 'View our Creations'}
          {isOpen ? (
            <FiChevronUp className="ml-1 text-2xl" />
          ) : (
            <FiChevronDown className="ml-1 text-2xl" />
          )}
        </button>
      </div>

      {/* Gallery Content */}
      {isOpen && (
        <div className="px-4 transition-all duration-300">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxforest">{title}</h2>
            <p className="text-md md:text-lg font-sans text-luxforest mt-4">{description}</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
            {images.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400} 
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="/lux fino-icon.svg"
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