// pages/luxpicnics.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LuxPicnicsPage: React.FC = () => {
  // Data for picnic packages
  const picnicPackages = [
    {
      title: 'Package 1',
      description:
        'Experience the magic of a Tofino sunset with our Sunset Delight Picnic package. Enjoy gourmet treats and fine wine as the sun dips below the horizon.',
      imageSrc: '/LuxPicMain.jpeg',
      imageAlt: 'Sunset Delight Picnic',
    },
    {
      title: 'Package 2',
      description:
        'Start your day with the soothing sounds of the ocean. Our Beachside Brunch Picnic offers a selection of fresh pastries, fruits, and beverages.',
      imageSrc: '/images/beachside-brunch.jpg',
      imageAlt: 'Beachside Brunch Picnic',
    },
    {
      title: 'Package 3',
      description:
        'Surprise your loved one with a romantic picnic setup. Includes a curated menu, candles, and a cozy setting by the sea.',
      imageSrc: '/images/romantic-escape.jpg',
      imageAlt: 'Romantic Escape Picnic',
    },
  ];

  // Data for testimonials
  const testimonials = [
    {
      name: 'Emily R.',
      feedback:
        'The Lux Picnic was the highlight of our trip! The setup was beautiful, and the food was delicious.',
      imageSrc: '/images/testimonial-emily.jpg',
      imageAlt: 'Customer Emily',
    },
    {
      name: 'James P.',
      feedback:
        'A truly unforgettable experience. The staff went above and beyond to make our picnic special.',
      imageSrc: '/images/testimonial-james.jpg',
      imageAlt: 'Customer James',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/images/picnic-hero.jpg')` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Lux Picnics</h1>
            <p className="mb-5">
              Indulge in a luxurious picnic experience set in the most picturesque locations of Tofino.
            </p>
            <button className="btn btn-primary mr-2">Book a Picnic</button>
            <button className="btn btn-outline">Explore Packages</button>
          </div>
        </div>
      </div>

      {/* About Lux Picnics Section */}
      <div className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Lux Picnics</h2>
          <p className="max-w-2xl mx-auto text-lg">
            At Lux Picnics, we specialize in creating unforgettable outdoor dining experiences. Whether you're celebrating a special occasion or simply want to enjoy the beauty of nature with a gourmet twist, our meticulously planned picnics offer the perfect blend of luxury and comfort.
          </p>
        </div>
      </div>

      {/* Picnic Packages Section */}
        <div className="py-12">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Our Picnic Packages</h2>
            <div className="space-y-8">
              {picnicPackages.map((packageItem) => (
                <div
                  key={packageItem.title}
                  className="card card-side bg-base-100 shadow-xl mx-auto flex flex-col md:flex-row md:max-w-4xl"
                >
                  <figure className="md:w-1/2">
                    <img
                      src={packageItem.imageSrc}
                      alt={packageItem.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="card-body md:w-1/2">
                    <h2 className="card-title">{packageItem.title}</h2>
                    <p>{packageItem.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Guests Say</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-md"
              >
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.imageAlt}
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                <p className="mt-2 text-gray-600">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready for a Luxurious Picnic?</h2>
          <p className="mb-8">
            Contact us today to reserve your spot and create unforgettable memories.
          </p>
          <button className="btn btn-primary mr-2">Book a Picnic</button>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LuxPicnicsPage;
