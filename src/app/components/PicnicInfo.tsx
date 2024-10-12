import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // If you're not using Next.js, you can use the regular <img> tag

const PicnicInfo: React.FC = () => {
  // Array of image paths
  const images = ['/picnic_icon1.png', '/picnic_icon2.png', '/picnic_icon3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  // Data for the packages
  const packages = [
    {
      name: 'The Ultimate Cuddle Puddle',
      price: '$250',
      people: '2 people',
      duration: '2 hrs',
      description:
        'Snuggle up with your cuddle buddy and watch the sunset melt into the horizon with this beautifully curated pillow and blanket setup. We will ensure you are warm and cozy with a variety of plush pillows and blankets set in the most picture perfect location!',
    },
    {
      name: 'Lux.Fino Golden Hour',
      price: '$470',
      people: '2 people',
      duration: '2 hrs',
      description:
        'A true Tofino picnic experience! Feeling peckish? We have you covered with our locally curated charcuterie grazing boards fit for Queens and Kings. This table is the perfect match to ignite your ultimate vacation mode.',
    },
    {
      name: 'The Perfect Proposal Package',
      price: '$800',
      people: '2 people',
      duration: '2 hrs',
      description:
        'Create an unforgettable experience for you and the one you call forever with. This one-of-a-kind, intimate, and romantic picnic experience will have you falling head over heels all over again. Take this time to sit back, relax, and leave all the special details to us, as we will help coordinate and prepare your special day to perfection.',
    },
    {
      name: 'Two to Tango',
      price: '$370',
      people: '2 people',
      duration: '2 hrs',
      description:
        'Everything you need to have a picture-perfect picnic with our complete tablescape package detailed above. This is an ideal option if you want to bring your own food and beverage, as we will provide the dinnerware.',
    },
    {
      name: 'Grand Luxury',
      price: '$770',
      people: '2 people',
      duration: '2 hrs',
      description:
        'The ultimate luxury picnic experience is yours! Everything you need to have a picture-perfect picnic, plus a cherry on top! Have memories that last forever!',
    },
    {
      name: 'In Room Welcome Package',
      price: '$150',
      people: 'N/A',
      duration: 'N/A',
      description:
        'Indulge in a welcome package for your hotel room and/or your Airbnb. This could be for you or as a gift to someone arriving here in Tofino. Let us create some memories for you!',
    },
  ];

  return (
    <div className="relative w-full overflow-visible px-4 py-8 md:py-12 bg-white">
      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Our Packages
      </h2>

      {/* Daisy UI Accordion for Package Descriptions */}
      <div className="flex justify-center items-center mt-[40px]">
        <div className="join join-vertical w-full w-[800px]">
          {packages.map((pkg, index) => (
            <div key={index} className="collapse collapse-arrow join-item border-[3px] border hover:bg-gray-100">
              <input type="radio" name="my-accordion-4" />
              <div
                className="collapse-title text-2xl font-bold mb-[10px]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {pkg.name} - {pkg.price}
              </div>
              <div className="collapse-content text-lg">
                <p>{pkg.description}</p>
                <div
                  className="flex justify-end mt-2 text-black font-bold text-xl space-x-4 mr-10"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <div className="flex items-center">
                    <Image src="/person.svg" alt="Person" width={16} height={16} className="inline-block mr-2" />
                    {pkg.people}
                  </div>
                  <div className="flex items-center">
                    <Image src="/clock.svg" alt="Clock" width={16} height={16} className="inline-block mr-2" />
                    {pkg.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PicnicInfo;
