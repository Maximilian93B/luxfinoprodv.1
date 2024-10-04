// components/PicnicsTestimonials.tsx

import React from 'react';

const PicnicsTestimonials: React.FC = () => {
  // Data for testimonials
  const testimonials = [
    {
      name: 'Emily R.',
      feedback:
        'The Lux Picnic was the highlight of our trip! The setup was beautiful, and the food was delicious.',
    },
    {
      name: 'James P.',
      feedback:
        'A truly unforgettable experience. The staff went above and beyond to make our picnic special.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
          What Our Guests Say
        </h2>
        <div className="space-y-12 md:space-y-0 md:flex md:space-x-8 justify-center">
          {/* First Testimonial */}
          <div className="flex flex-col bg-white p-8 rounded-lg shadow-xl mx-auto max-w-md hover:shadow-2xl transition-shadow duration-300 ease-in-out md:flex-1">
            <p className="text-lg text-gray-700 italic leading-relaxed" style={{ fontFamily: 'Playfiar Display' }}>
              "{testimonials[0].feedback}"
            </p>
            <p className="mt-4 font-bold text-gray-900 text-right" style={{ fontFamily: 'Playfiar Display' }}>
              - {testimonials[0].name}
            </p>
          </div>

          {/* Second Testimonial */}
          <div className="flex flex-col bg-white p-8 rounded-lg shadow-xl mx-auto max-w-md hover:shadow-2xl transition-shadow duration-300 ease-in-out md:flex-1">
            <p className="text-lg text-gray-700 italic leading-relaxed" style={{ fontFamily: 'Playfiar Display' }}>
              "{testimonials[1].feedback}"
            </p>
            <p className="mt-4 font-bold text-gray-900 text-right" style={{ fontFamily: 'Playfiar Display' }}>
              - {testimonials[1].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicnicsTestimonials;
