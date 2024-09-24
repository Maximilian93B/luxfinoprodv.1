// ExperienceAccordion.tsx
import React from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 'day1',
    title: 'Day 1: Arrival & Settling In',
    content:
      'You’ll be greeted at our designated location and guided to your remote setup, where the wilderness awaits. Spend the day exploring your surroundings or simply relax and unwind.',
  },
  {
    id: 'day2',
    title: 'Day 2: Adventure & Indulgence',
    content:
      'Choose from a range of activities such as guided nature walks, kayaking, or a private chef-prepared dinner under the stars.',
  },
  {
    id: 'day3',
    title: 'Day 3: Departure',
    content:
      'After a leisurely breakfast, your departure will be as smooth as your arrival, leaving you with memories of an extraordinary escape.',
  },
];

const ExperienceAccordion: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Your Lux Remote Experience
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          From arrival to departure, every moment of your Lux Remote experience is crafted with care. Here's a glimpse of what you can expect:
        </p>
        <div className="mt-12 space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={item.id}
              className="collapse collapse-arrow bg-base-200 rounded-lg"
            >
              <input
                type="radio"
                name="experience-accordion"
                id={item.id}
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium">
                {item.title}
              </div>
              <div className="collapse-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceAccordion;
