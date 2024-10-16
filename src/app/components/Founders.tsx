import React from "react";
import Image from "next/image";


{/* Page Dividers */}
const Divider: React.FC = () => {
    return <div className="divider border-black"></div>;
  };
  
  
  {/* Founders Section  */}
  const OwnerFounderSection: React.FC = () => {
    return (
      <>
        <Divider />
        <div className="about bg-white py-12 text-black">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Owners &amp; Founders</h2>
            <p className="text-lg mb-12">
              At the heart of Lux.Fino are Morgan and Dre, a dynamic duo combining their passions for luxury, food, and unforgettable experiences. Together, they bring their love for Tofino and its natural beauty into everything they create, from breathtaking picnics to immersive glamping adventures. Their unique talents and vision are the foundation of Lux.Fino, making every experience feel personal, thoughtful, and truly special.
            </p>
  
            {/* Avatars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BioCard
                name="Morgan"
                imageSrc="/MorganBoiPIc.JPG" 
                bio="Morgan is dedicated to crafting unforgettable experiences for guests, believing that every moment begins with a lasting first impression. As a curator of beautiful aesthetics, she has a keen eye for hidden treasures and exquisite textiles, ensuring you feel like royalty while you relax and take in the breathtaking views."
              />
  
              <BioCard
                name="Andres"
                imageSrc="/DreHeadShot.JPG" 
                bio="Chef Andres, known as Dre, made his way to Tofino seven years ago, drawn by a deep passion for luxury and culinary artistry. His journey began at the stunning Clayoquot Wilderness Resort, where he infused his Latin American roots into every dish, blending comfort food with vibrant global influences. With over a decade of experience, nothing brings him more joy than seeing a smile after the first bite."
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  interface BioCardProps {
    name: string;
    imageSrc: string;
    bio: string;
  }
  
  const BioCard: React.FC<BioCardProps> = ({ name, imageSrc, bio }) => {
    return (
      <div className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center">
        <div className="avatar mb-6 md:mb-0 md:mr-6">
          <div className="relative w-64 h-64 mask mask-hexagon">
            <Image
              src={imageSrc}
              alt={name}
              width={800}
              height={'100'}
              style={{ objectFit: 'cover',
                objectPosition: 'center ',
               }}
              className="rounded-lg "
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p>{bio}</p>
        </div>
      </div>
    );
  };


  export default OwnerFounderSection;
  