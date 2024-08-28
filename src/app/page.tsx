import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from 'next/image';
import ladningPic from '../../public/pexels-souvenirpixels-3555988.jpg'

export default function HomePage() {
  return (
    <div>
      {/* NavBar */}
      <Navbar />

   {/* Hero section */}
<div className="hero min-h-screen relative">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/11899340_3840_2160_24fps.mp4" type="video/mp4" /> {/* Update video path */}
    Your browser does not support the video tag.
  </video>

  {/* Hero Content */}
  <div className="hero-content text-neutral-content text-center relative z-10">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Welcome to LuxFino</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn mr-2">Explore LuxFino</button>
      <button className="btn">Book Now</button>
    </div>
  </div>
</div>

  <div className="about bg-white py-12">
    <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-800">About LuxFino</h2>
    <p className="text-lg text-gray-600 mb-5">
      LuxFino offers premium experiences that blend luxury, nature, and indulgence. From curated picnics to 
      bespoke glamping and chef-catered gourmet dining, we create moments that are both intimate and extraordinary.
    </p>

  {/*  Divider */}
  <div className="divider"></div>


  {/* Grid Layout About Section */}
    <div className="grid grid-rows-3 grid-flow-col gap-4 mt-6">
    {/*  Our Mission */}
    <div className="row-span-3 bg-gray-200 text-gray-800 flex items-center justify-center p-4 rounded-lg shadow-xl">
      <div>
        <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
        <p>
          At LuxFino, we aim to provide exclusive, high-end luxury experiences that connect our clients
          with nature, indulgence, and relaxation.
        </p>
      </div>
    </div>
  
    <div className="col-span-2 bg-gray-100 text-gray-800 flex items-center justify-center p-4 rounded-lg shadow-xl">
      <div>
        <h3 className="text-2xl font-bold mb-2">Services</h3>
        <p>
        LuxFino offers premium experiences that blend luxury, nature, and indulgence. From curated picnics to 
        bespoke glamping and chef-catered gourmet dining, we create moments that are both intimate and extraordinary
        
        </p>
      </div>
    </div>
    <div className="row-span-2 col-span-2 bg-gray-50 text-gray-800 flex items-center justify-center p-4 rounded-lg shadow-xl">
      <div>
        <h3 className="text-2xl font-bold mb-2">Unique Experiences</h3>
        <p>
          We specialize in curating unforgettable moments, from beachside dinners to star-lit glamping setups, all
          designed to immerse you in the beauty of Tofino.
        </p>
      </div>
    </div>
    </div>
      <div className="mt-2 py-6">
        <button className="btn btn-outline mr-2">Book Now</button>
        <button className="btn btn-outline">Contact LuxFino</button>
    </div>
    </div>
  

    <div className="hero-sections bg-base-200 py-12">
  <div className="container mx-auto space-y-6 flex flex-col">
  
    {/* Section 1: LuxPicnics */}
    <div className="hero h-80">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src=""
          alt="LuxPicnics"
          width={500} // Adjust width
          height={300} // Adjust height
          className="rounded-lg shadow-2xl object-cover"
        />
        <div>
          <h1 className="text-5xl font-bold">Unforgettable Picnics: Where Luxury Meets Nature</h1>
          <p className="py-6">
            At LuxFino, our Lux Picnics offer more than just a meal — they are curated experiences designed to indulge your senses and immerse you in the breathtaking beauty of Tofino. Imagine a secluded spot by the ocean, a beautifully arranged setup with luxurious cushions and blankets, and a bespoke menu crafted by our in-house chef, tailored to your preferences.
          </p>
          <button className="btn btn-outline">Choose a Picnic</button>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="divider"></div>

    {/* Section 2: Lux Remote */}
    <div className="hero h-80">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src=""
          alt="Lux Remote"
          width={500} // Adjust width
          height={300} // Adjust height
          className="rounded-lg shadow-2xl object-cover"
        />
        <div>
          <h1 className="text-5xl font-bold">Wild Luxury: Escape with Lux Remote</h1>
          <p className="py-6">
            Escape into the heart of Tofino with our Lux Remote experience — a carefully curated glamping adventure that blends the comforts of luxury with the serenity of nature. Imagine waking up to the sounds of the ocean, surrounded by towering trees, and stepping out into your private outdoor oasis, where every detail has been designed for your ultimate relaxation.
          </p>
          <button className="btn btn-outline">Explore Lux Remote</button>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="divider"></div>

    {/* Section 3: LuxCatering */}
    <div className="hero h-80">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <Image
          src=""
          alt="Lux Remote"
          width={500} // Adjust width
          height={300} // Adjust height
          className="rounded-lg shadow-2xl object-cover"
        />
        <div>
          <h1 className="text-5xl font-bold">Tofino Tailored to Your Taste</h1>
          <p className="py-6">
            Elevate your dining with Lux Catering, where our executive chef crafts personalized, gourmet meals tailored to your tastes. Whether it's an intimate dinner, a lavish event, or a special occasion, we bring restaurant-quality dining to your location, using only the freshest local ingredients. Savor every bite as our chef takes you on a culinary journey, all in the comfort of your chosen setting.
          </p>
          <button className="btn btn-outline">Book LuxFino Catering</button>
        </div>
      </div>
    </div>

  </div>
</div>

 {/* About Section */}
 <div className="about bg-white py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-800"> Owner & Founder </h2>
    <p className="text-lg text-gray-600 mb-12">
      LuxFino was founded by two passionate individuals, Jane Doe and John Smith, who wanted to create unforgettable, luxury experiences in the heart of Tofino. Both Jane and John bring years of experience in hospitality, culinary arts, and event management, ensuring that every detail of your stay is curated to perfection.
    </p>

    {/* Avatars */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Morgans Bio */}
      <div className="bg-gray-200 p-6 rounded-lg flex items-center shadow-xl">
        <div className="avatar mr-4">
          <div className="mask mask-hexagon w-48">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Jane Doe" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2"> Morgan </h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae reprehenderit necessitatibus hic in et ex accusamus atque perferendis, sapiente, voluptatum aspernatur asperiores dolor deleniti voluptatem nemo eveniet provident nulla repellat. Vero cupiditate quis accusantium rerum sequi, dolorem fugiat commodi assumenda voluptates voluptate doloremque explicabo, exercitationem quisquam consequatur quae fugit nam ipsam excepturi minus voluptatem facilis. Assumenda, eum, iure dicta voluptas voluptate enim culpa fugit minus perferendis amet beatae unde, ea aspernatur esse illum vero reiciendis?
          </p>
        </div>
      </div>

          {/*  Dres Bio */}
          <div className="bg-gray-200 p-6 rounded-lg flex items-center shadow-xl">
            <div className="avatar mr-4">
              <div className="mask mask-hexagon w-48">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="John Smith" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Andres</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eum aperiam sed asperiores, ipsa maiores, blanditiis, temporibus sit molestiae error atque eaque animi omnis neque! Architecto et similique, praesentium dignissimos dolores maxime officiis accusantium reprehenderit corporis consequuntur magni amet nihil, impedit ducimus omnis eum eaque, excepturi iste blanditiis facilis doloribus debitis molestiae! Minus dolorum, repudiandae cupiditate eius est fuga, obcaecati beatae quo tempore quae consequuntur facere eveniet ut, aliquam vero reiciendis facilis asperiores adipisci expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
      {/* Tribal Parks Allies Section */}
<div className="bg-gray-100 py-12">
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
    <div className="text-gray-800">
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
















