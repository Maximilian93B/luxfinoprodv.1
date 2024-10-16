import React from 'react';

interface InfoCardProps {
    title: string;
    content: string;
  }
  
  const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
    return (
      <div className="bg-white text-black flex items-center justify-center p-4 rounded-lg shadow-md mx-auto ">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  
  {/* Page Dividers */}
const Divider: React.FC = () => {
    return <div className="divider border-black"></div>;
  };


{/* Set id to allow buttons to have access to scroll */}
const AboutSection: React.FC = () => {
    return (
      <div id="about" className="about py-28 bg-white text-black">
        <div className="container mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">About LuxFino</h2>
          <p className="text-lg mb-5">
          Lux.Fino is Tofino’s premier provider of luxury pop-up picnics, in-house catering, and remote glamping. We create unforgettable moments with locally inspired touches that showcase the natural beauty of Tofino.
  
          </p>
  
          {/* Divider */}
          <Divider />
  
          {/* Grid Layout About Section */}
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-2 ">
            {/* Our Mission */}
            <InfoCard
              title="Our Mission"
              content="At Lux.Fino, we blend luxury and nature to offer unique experiences that bring people together. Whether it’s a beach picnic or a remote glamping retreat, our services celebrate the stunning landscapes of Tofino."
            />
  
            {/* Services */}
            <InfoCard
              title="Services"
              content="Lux.Fino offers tailored luxury picnics, gourmet catering with local flavors, and exclusive remote glamping experiences. Our partnerships with local artisans ensure that every detail, from charcuterie boards to floral arrangements, is thoughtfully crafted."
            />
  
            {/* Unique Experiences - Full width under the two above */}
            <div className="col-span-1 md:col-span-2">
              <InfoCard
                title="Unique Experiences"
                content="Experience the best of Tofino with personalized luxury services, including pop-up beach picnics and off-grid glamping escapes. We combine adventure with elegance to create unforgettable memories in one of the world’s most stunning locations.."
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AboutSection; 