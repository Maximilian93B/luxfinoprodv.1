'use client';

import React from 'react';
import Image from 'next/image';

type Review = {
  name: string;
  text: string;
  imageSrc?: string;
  eventType: string;
};

type ReviewsSectionProps = {
  title?: string;
  reviews?: Review[];
  className?: string;
};

export default function ReviewsSection({
  title = "Rave Reviews from Our Clients",
  className = "container mx-auto mt-12 px-4 min-h-[30vh]",
  reviews = [
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
  ]
}: ReviewsSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold text-center mb-8 text-luxcedar">
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
            <p className="text-luxcedar italic mb-4 text-xl">&ldquo;{review.text}&rdquo;</p>
            <div className="flex justify-between items-center">
              <p className="text-luxcedar font-bold">- {review.name}</p>
              <span className="text-luxsand text-sm font-medium px-3 py-1 bg-luxpearl rounded-full">{review.eventType}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}