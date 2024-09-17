// HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/4476816-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Escape to Wild Luxury: Your Ultimate Remote Getaway
          </h1>
          <button className="btn mr-2" aria-label="Explore LuxRemote">
            Explore LuxRemote
          </button>
          <button className="btn" aria-label="Book Now">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
