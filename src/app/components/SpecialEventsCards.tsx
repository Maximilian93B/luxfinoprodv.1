
import React from "react";
import Image from "next/image";



{/* Page Dividers */}
    const Divider: React.FC = () => {
    return <div className="divider border-black"></div>;
};

  
const SecipalEventsSection: React.FC = () => {
    return (
      <>
        <Divider />
        <div className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-8">
              Marketing Slogan goes here.... 
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-black mb-12">
              Elevate your special occasions with unforgettable experiences at Lux Remote. Whether you're hosting a corporate meeting or celebrating a wedding, arrive in style, conduct your event in the serene wilderness, enjoy gourmet meals, and create memories that last a lifetime.
            </p>
  
            {/* Events Cards */}
            <div className="flex flex-col lg:flex-row items-start w-full">
              {/* Corporate Lunch Card */}
              <div className="card bg-white shadow-xl border border-gray-200 flex-grow lg:mr-4 mb-8 lg:mb-0">
                <div className="card-body p-6">
                <figure className="relative w-full h-96 mb-6 rounded-lg">
                    <Image
                      src="/LuxLunches.JPG"
                      alt="Gourmet Corporate Lunch"
                      width={800}
                      height={500}
                      style={{ objectFit: 'cover', objectPosition: 'center', scale: '1',}}
                      className="rounded-lg h-auto"
                    />
                  </figure>
                  <h2 className="card-title text-2xl font-bold text-black">
                    Gourmet Lunch &amp; Meeting
                  </h2>
                  <p className="text-black mt-4">
                    Host your meeting in the serene surroundings of Tofino or Lux Remote. Enjoy a gourmet lunch prepared by our top chef, making your business day both productive and indulgent.
                  </p>
                  <div className="card-actions justify-start mt-6">
                    {/*Quote Drawer */}
                  <div className="flex justify-center">
                
                  </div>
                    <button className="btn btn-outline border-black text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
  
              {/* Divider */}
              <div className="divider lg:divider-horizontal">&</div>
  
              {/* Weddings Card */}
              <div className="card bg-white shadow-xl border border-gray-200 flex-grow lg:mr-4 mb-8 lg:mb-0">
                <div className="card-body p-6">
                  <figure className="relative w-full h-96 mb-6 rounded-lg">
                    <Image
                      src="/WeddingPIc.JPG" 
                      alt="Lux Remote Weddings"
                      width={700}
                      height={100}
                      style={{ objectFit: 'cover',
                        objectPosition: 'center',
                        scale: '1',
                       }}
                      className="rounded-lg"
                    />
                  </figure>
                  <h2 className="card-title text-2xl font-bold text-black">
                    Dream Proposals at Lux Remote
                  </h2>
                  <p className="text-black mt-4">
                    Say "I do" in the breathtaking wilderness of Lux Remote. Our exclusive location offers a romantic and intimate setting for your special day, complete with gourmet dining and unforgettable views.
                  </p>
                  <div className="card-actions justify-start mt-6">
                    {/*Quote Drawer */}
                  <div className="flex justify-center">
              
                  </div>
                    <button className="btn btn-outline border-black text-black">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default SecipalEventsSection; 