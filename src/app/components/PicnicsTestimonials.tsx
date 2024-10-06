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
    <div className="bg-gradient-to-b from-white via-gray-100 to-white py-16">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-12 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          What Our Guests Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* First Testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out w-[35%]">
            <p
              className="text-2xl text-gray-600 italic leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              "{testimonials[0].feedback}"
            </p>
            <p
              className="mt-6 text-xl font-bold text-gray-900 text-right"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              - {testimonials[0].name}
            </p>
          </div>

          {/* Second Testimonial */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out w-[35%]">
            <p
              className="text-2xl text-gray-600 italic leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              "{testimonials[1].feedback}"
            </p>
            <p
              className="mt-6 font-bold text-xl text-gray-900 text-right"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              - {testimonials[1].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicnicsTestimonials;
