import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


{/*Services Section */}
const IndexServiceSections: React.FC = () => {
    return (
      <>
        <Divider />
        <ServiceSection
          title="Luxury Pop-up Picnics"
          description="Lux.Fino’s pop-up picnics combine luxury and nature for an unforgettable beachside experience. Enjoy cozy seating, elegant décor, and locally-sourced food, perfect for any occasion. Relax, connect, and savor Tofino’s beauty in style."
          buttonText="Explore LuxFino Picnics"
          imageSrc="/LuxPicMain.jpeg"
          imageAlt="Lux Picnic"
          reverse={false}
          linkHref='/luxpicnic'
        />
        <Divider />
        <ServiceSection
          title="Wild Luxury: Escape with Lux Remote"
          description="Lux Remote offers a luxurious off-grid escape in Tofino’s wilderness. Enjoy the perfect blend of comfort and adventure with cozy accommodations, stunning ocean views, and total seclusion. It’s the ultimate way to unwind and experience nature in style."
          buttonText="Escape to Lux Remote"
          imageSrc="/DiscoverLuxRemote.JPG"
          imageAlt="Lux Remote"
          reverse={true}
          linkHref='/luxremote'
        />
        <Divider />
        <ServiceSection
          title="Tofino Tailored to Your Taste"
          description="Lux Catering brings gourmet, locally-inspired cuisine to your special event. Whether it’s an intimate gathering or a grand celebration, our in-house catering delivers fresh, delicious meals crafted to impress, making every moment feel indulgent and memorable."
          buttonText="Book LuxFino Catering"
          imageSrc="/LuxCateringCard.JPG"
          imageAlt="Lux Catering"
          reverse={false}
          linkHref='/luxcatering'
        />
        <Divider />
      </>
    );
  };
  
  interface ServiceSectionProps {
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    linkHref: string;
  }
  
  const ServiceSection: React.FC<ServiceSectionProps> = ({
    title,
    description,
    buttonText,
    imageSrc,
    imageAlt,
    reverse = false,
    linkHref,
  }) => {
    return (
      <div className="hero h-auto lg:h-80">
        <div
          className={`hero-content flex-col lg:flex-row ${
            reverse ? "lg:flex-row-reverse" : ""
          } space-y-6 lg:space-y-0 shadow-md`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={100}
            className="rounded-lg shadow-none object-cover w-full lg:w-auto lg:h-auto"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
            <p className="py-4 lg:py-6">{description}</p>
            <Link href={linkHref}>
              <button className="btn btn-outline border-black text-black">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  {/* Page Dividers */}
  const Divider: React.FC = () => {
    return <div className="divider border-black"></div>;
  };

  export default IndexServiceSections;