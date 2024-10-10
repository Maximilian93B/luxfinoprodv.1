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
    {
      name: 'Sarah L.',
      feedback:
        'An amazing way to celebrate our anniversary. Everything was perfect from start to finish.',
    },
    {
      name: 'Michael S.',
      feedback:
        'Exceptional service and attention to detail. Highly recommend Lux Picnics for any special occasion.',
    },
    {
      name: 'Olivia K.',
      feedback:
        'We felt so pampered! The picnic was stunning, and the location was breathtaking.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 tracking-wide"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <p
                className="text-base md:text-lg text-gray-600 italic leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                "{testimonial.feedback}"
              </p>
              <p
                className="mt-4 md:mt-6 text-sm md:text-base font-bold text-gray-900 text-right"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PicnicsTestimonials;
