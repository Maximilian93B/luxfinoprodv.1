// CallToAction.tsx
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center h-50">
        <h2 className="text-3xl font-bold mb-8">
          Ready to Embark on Your Adventure?
        </h2>
        <p className="mb-8">
          Contact us  to learn more or to reserve your exclusive Lux Remote experience.
        </p>
        <button className="btn btn-primary mr-2">Book Now</button>
        <button className="btn btn-primary">Contact Us</button>
      </div>
    </div>
  );
};

export default CallToAction;
