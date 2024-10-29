'use client';

import React from 'react';
import Image from 'next/image';

type Review = {
  name: string;
  text: string;
  imageSrc?: string;
};

type ReviewsSectionProps = {
  title?: string;
  reviews?: Review[];
  className?: string;
};

export default function ReviewsSection({
  title = "What Our Guests Are Saying",
  className = "container mx-auto mt-12 px-4 min-h-[30vh]",
  reviews = [
    {
      name: 'John Doe',
      text: "&ldquo;Lux Fino&apos;s catering made our event unforgettable. The food was exquisite!&rdquo;",
    },
    {
      name: 'Jane Smith',
      text: "&ldquo;Exceptional service and delicious dishes. Highly recommend Lux Fino!&rdquo;",
    },
    {
      name: 'Emily Johnson',
      text: "&ldquo;Our guests were blown away by the culinary experience provided by Lux Fino.&rdquo;",
    },
  ]
}: ReviewsSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-6">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 mb-6 md:mb-0 flex-1 shadow-md"
          >
            {review.imageSrc && (
              <div className="flex justify-center mb-4">
                <Image
                  src={review.imageSrc}
                  alt={`Photo of ${review.name}`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            )}
            <p className="text-gray-600 italic mb-4 text-xl">&ldquo;{review.text}&rdquo;</p>
            <p className="text-gray-800 font-bold text-right">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}