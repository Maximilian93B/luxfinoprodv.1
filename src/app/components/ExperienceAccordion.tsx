// ExperienceAccordion.tsx
import React from 'react';
import Image from 'next/image';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  imageSrc?: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 'day1',
    title: 'Day 1: Arrival & Immersion',
    content:
      'Begin your journey with a scenic seaplane flight over Tofino\'s breathtaking coastline. Upon landing, a personal guide will escort you to your secluded retreat nestled in the wilderness. Enjoy a welcome package featuring local delicacies as you settle into your luxurious surroundings.',
    imageSrc: '/LuxRemoteIndex.JPG',
  },
  {
    id: 'day2',
    title: 'Day 2: Adventure & Indulgence',
    content:
      'Awake to the sound of nature and savor a gourmet breakfast prepared by our private chef. Choose your adventure: kayak through serene waters, embark on a guided rainforest hike, or relax with a spa treatment. In the evening, delight in a candlelit dinner under the stars.',
    imageSrc: '/DiscoverLuxRemote.JPG',
  },
  {
    id: 'day3',
    title: 'Day 3: Farewell & Memories',
    content:
      'After a leisurely morning, capture the last moments of tranquility before your departure. We\'ll handle all the details to ensure a smooth journey home, leaving you with cherished memories and a renewed spirit.',
    imageSrc: '/LuxRemotePic2.JPG',
  },
];

const ExperienceAccordion: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Your Lux Remote Journey
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Each moment at Lux Remote is thoughtfully curated to offer an unparalleled escape. Here's a glimpse into the transformative experience that awaits you:
        </p>
        <div className="mt-12 space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={item.id}
              className="collapse collapse-arrow bg-sky-100 rounded-lg shadow-lg"
            >
              <input
                type="checkbox"
                name="experience-accordion"
                id={item.id}
                defaultChecked={index === 0}
              />
              <label
                htmlFor={item.id}
                className="collapse-title text-xl font-medium flex items-center"
              >
                {/* Optional image or icon */}
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={800}
                    height={500}
                    className="w-36 h-36 mr-4 rounded-full object-cover"
                  />
                )}
                {item.title}
              </label>
              <div className="collapse-content text-left">
                <p className="mb-4">{item.content}</p>
                {/* Call-to-Action Button */}
                <button
                  className="btn bg-black text-white"
                  aria-label={`Book Now for ${item.title}`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceAccordion;
