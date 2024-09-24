// DiscoverSection.tsx
import React from 'react';

const DiscoverSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Discover Our Exclusive Remote Location
        </h2>
        <div className="flex justify-center">
          <img
            src="/pexels-cottonbro-5359324.jpg"
            alt="Lux Remote Location"
            className="w-full md:w-2/3 h-96 object-cover rounded-lg"
          />
        </div>
        <p className="mt-6 max-w-2xl mx-auto">
          Nestled in the heart of Tofino's wilderness, our exclusive remote location offers an unparalleled experience. Surrounded by nature's beauty, you will find peace, luxury, and adventure all in one place. Whether it's a private getaway or an intimate celebration, this location is designed to provide an unforgettable experience.
        </p>
      </div>
    </div>
  );
};

export default DiscoverSection;
