import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-white text-black">
      {/* NavBar */}
      <Navbar />

      {/* Hero section */}
      <div className="hero min-h-screen relative bg-white text-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/11899340_3840_2160_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="hero-content text-white text-center relative z-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to LuxFino</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-outline-white mr-2 border-black text-black">Explore LuxFino</button>
            <button className="btn bg-black text-white">Book Now</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about py-12 bg-white text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About LuxFino</h2>
          <p className="text-lg mb-5">
            LuxFino offers premium experiences that blend luxury, nature, and indulgence. From curated picnics to bespoke glamping and chef-catered gourmet dining, we create moments that are both intimate and extraordinary.
          </p>

          {/* Divider */}
          <div className="divider border-gray-300"></div>

          {/* Grid Layout About Section */}
          <div className="grid grid-rows-3 grid-flow-col gap-4 mt-6">
            {/* Our Mission */}
            <div className="row-span-3 bg-gray-100 text-black flex items-center justify-center p-4 rounded-lg shadow-none">
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p>
                  At LuxFino, we aim to provide exclusive, high-end luxury experiences that connect our clients with nature, indulgence, and relaxation.
                </p>
              </div>
            </div>

            <div className="col-span-2 bg-gray-50 text-black flex items-center justify-center p-4 rounded-lg shadow-none">
              <div>
                <h3 className="text-2xl font-bold mb-2">Services</h3>
                <p>
                  LuxFino offers premium experiences that blend luxury, nature, and indulgence. From curated picnics to bespoke glamping and chef-catered gourmet dining, we create moments that are both intimate and extraordinary.
                </p>
              </div>
            </div>

            <div className="row-span-2 col-span-2 bg-gray-50 text-black flex items-center justify-center p-4 rounded-lg shadow-none">
              <div>
                <h3 className="text-2xl font-bold mb-2">Unique Experiences</h3>
                <p>
                  We specialize in curating unforgettable moments, from beachside dinners to star-lit glamping setups, all designed to immerse you in the beauty of Tofino.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-2 py-6">
          <button className="btn bg-black text-white">Book Now</button>
            <button className="btn bg-white border-black text-black">Contact LuxFino</button>
          </div>
        </div>
      </div>

      {/* Hero Sections */}
      <div className="hero-sections bg-white py-12 text-black">
        <div className="container mx-auto space-y-6">
          {/* Section 1: LuxPicnics */}
          <div className="hero h-80">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                src=""
                alt="LuxPicnics"
                width={500}
                height={300}
                className="rounded-lg shadow-none object-cover"
              />
              <div>
                <h1 className="text-4xl font-bold">Unforgettable Picnics: Where Luxury Meets Nature</h1>
                <p className="py-6">
                  At LuxFino, our Lux Picnics offer more than just a meal — they are curated experiences designed to indulge your senses and immerse you in the breathtaking beauty of Tofino.
                </p>
                <button className="btn btn-outline-black border-black text-black">Choose a Picnic</button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider border-gray-300"></div>

          {/* Section 2: Lux Remote */}
          <div className="hero h-80">
            <div className="hero-content flex-col lg:flex-row">
              <Image
                src=""
                alt="Lux Remote"
                width={500}
                height={300}
                className="rounded-lg shadow-none object-cover"
              />
              <div>
                <h1 className="text-4xl font-bold">Wild Luxury: Escape with Lux Remote</h1>
                <p className="py-6">
                  Escape into the heart of Tofino with our Lux Remote experience — a carefully curated glamping adventure that blends the comforts of luxury with the serenity of nature.
                </p>
                <button className="btn btn-outline-black border-black text-black">Explore Lux Remote</button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider border-gray-300"></div>

          {/* Section 3: Lux Catering */}
          <div className="hero h-80">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                src=""
                alt="Lux Remote"
                width={500}
                height={300}
                className="rounded-lg shadow-none object-cover"
              />
              <div>
                <h1 className="text-4xl font-bold">Tofino Tailored to Your Taste</h1>
                <p className="py-6">
                  Elevate your dining with Lux Catering, where our executive chef crafts personalized, gourmet meals tailored to your tastes.
                </p>
                <button className="btn btn-outline-black border-black text-black">Book LuxFino Catering</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Owner & Founder Section */}
      <div className="about bg-white py-12 text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Owner & Founder</h2>
          <p className="text-lg mb-12">
            LuxFino was founded by two passionate individuals, Jane Doe and John Smith, who wanted to create unforgettable, luxury experiences in the heart of Tofino.
          </p>

          {/* Avatars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Morgans Bio */}
            <div className="bg-gray-100 p-6 rounded-lg flex items-center">
              <div className="avatar mr-4">
                <div className="mask mask-hexagon w-48">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Jane Doe" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Morgan</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae reprehenderit necessitatibus hic in et ex accusamus atque perferendis.
                </p>
              </div>
            </div>

            {/* Andres Bio */}
            <div className="bg-gray-100 p-6 rounded-lg flex items-center">
              <div className="avatar mr-4">
                <div className="mask mask-hexagon w-48">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="John Smith" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Andres</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eum aperiam sed asperiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Exclusive Corporate Lunches at Lux Remote</h2>
          <p className="max-w-3xl mx-auto text-lg text-black mb-12">
            Elevate your next corporate meeting with an unforgettable lunch experience at Lux Remote. Fly in by float plane or arrive by sea, conduct your business in the serene wilderness, enjoy a gourmet meal, and then return home — all in a single day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Corporate Lunch Experience */}
            <div className="card bg-white shadow-none border border-gray-200">
              <figure>
                <img
                  src="/path/to/floatplane-image.jpg" // Replace with your actual image path
                  alt="Float Plane Arrival"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold text-black">Arrive in Style</h3>
                <p className="text-black">
                  Begin your exclusive day by flying in on a float plane or cruising in by sea. Experience the ultimate in convenience and luxury as you arrive at Lux Remote.
                </p>
              </div>
            </div>

            {/* Gourmet Lunch and Meeting */}
            <div className="card bg-white shadow-none border border-gray-200">
              <figure>
                <img
                  src="/path/to/gourmet-lunch-image.jpg" // Replace with your actual image path
                  alt="Gourmet Lunch"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold text-black">Gourmet Lunch & Meeting</h3>
                <p className="text-black">
                  Host your corporate meeting in the serene surroundings of Lux Remote. Enjoy a gourmet lunch prepared by our top chefs, making your business day both productive and indulgent.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button className="btn bg-black text-white mr-4">Book Your Corporate Lunch</button>
            <button className="btn btn-outline-black border-black text-black">Learn More</button>
          </div>
        </div>
      </div>

      {/* Tribal Parks Allies Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto text-center space-y-6">
          {/* Tribal Parks Allies Symbol */}
          <div className="flex justify-center">
            <Image
              src="/path/to/tribal-parks-allies-symbol.png" // Replace with actual image path
              alt="Tribal Parks Allies Symbol"
              width={150} // Adjust width as needed
              height={150} // Adjust height as needed
              className="rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-black bg-white">
            <h2 className="text-3xl font-bold mb-4">Proud Allies of Tribal Parks</h2>
            <p className="max-w-2xl mx-auto">
              LuxFino is proud to work in collaboration with Tribal Parks Allies, supporting initiatives that preserve the natural beauty of Tofino and respecting the rights and traditions of First Nations communities. Our commitment extends beyond luxury experiences — we aim to contribute positively to the environment and the cultural landscape in which we operate, fostering sustainable tourism and community-driven practices.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
