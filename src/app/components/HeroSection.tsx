// HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="hero min-h-screen min-w-max relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/luxfino drone no music.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header at the top */}
      <div className="text-white absolute inset-x-50 top-[5%] mt-8 p-8">
        <h1 className="mb-5 text-5xl font-bold">
        Seclusion Redefined: Welcome to Lux Remote
        </h1>
      </div>

      {/* Buttons positioned 1/3 down from the top */}
      <div className="absolute inset-x-0 top-[70%] text-center z-10">
        <button className="btn mr-2 justify-between" aria-label="Explore LuxRemote">
          Explore LuxRemote
        </button>
        <button className="btn" aria-label="Book Now">
          Book Now
        </button>
      </div>
    </div>
  );
};



export default HeroSection;
