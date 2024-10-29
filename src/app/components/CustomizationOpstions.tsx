import React from 'react';
import Image from 'next/image';

interface OptionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const optionData: OptionCardProps[] = [
  {
    title: 'Custom Duration',
    description:
      "Extend your stay as long as you'd like. From weekend getaways to week-long retreats, we accommodate your preferred duration.",
    imageSrc: '/LuxRemoteCustom1.JPG',
    imageAlt: 'Custom Duration',
  },
  {
    title: 'Crab Cookout',
    description:
      'Delight in a gourmet Crab Cookout prepared by our expert chefs right at your remote location. Perfect for a memorable evening by the sea.',
    imageSrc:
      '/CrabCookout.JPG',
    imageAlt: 'Crab Cookout',
  },
  {
    title: 'Lux Picnic',
    description:
      'Enjoy a bespoke Lux Picnic, tailored to your tastes and set up at a scenic spot at your remote location, offering both luxury and tranquility.',
    imageSrc: '/LuxCustom3.JPG',
    imageAlt: 'Lux Picnic',
  },
];

const CustomizationOptions: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Create Your Perfect Lux Remote Experience
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          At Lux Remote, every detail of your stay is crafted to meet your desires. Whether you wish
          to extend your getaway, indulge in a Crab Cookout, or enjoy a bespoke Lux Picnic at your
          remote location, we offer endless possibilities to tailor your experience.
        </p>
        {/* Updated layout here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {optionData.map((option) => (
            <div
              key={option.title}
              className="card bg-base-100 image-full w-96 shadow-xl mx-auto"
            >
              <figure>
                <Image 
                src={option.imageSrc} 
                alt={option.imageAlt} 
                width={500}
                height={500}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{option.title}</h2>
                <p>{option.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="btn btn-primary mr-4">Start Customizing Your Stay</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CustomizationOptions;
