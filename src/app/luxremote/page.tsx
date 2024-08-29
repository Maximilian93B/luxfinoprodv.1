import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LuxRemotePage() {
    return (
      <div>
        {/* NavBar */}
        <Navbar />
  
<div className="hero min-h-screen relative">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/4476816-hd_1920_1080_24fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Hero Content */}
  <div className="hero-content text-neutral-content text-center relative z-10">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Escape to Wild Luxury: Your Ultimate Remote Getaway</h1>
      <button className="btn mr-2" aria-label="Explore LuxRemote">Explore LuxRemote</button>
      <button className="btn" aria-label="Book Now">Book Now</button>
    </div>
  </div>
</div>

<div className="py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-center mb-8">Discover Our Exclusive Remote Location</h2>
    <div className="flex justify-center">
      <img
        src="/pexels-cottonbro-5359324.jpg"
        alt="Lux Remote Location"
        className="w-full md:w-2/3 h-96 object-cover rounded-lg"
      />
    </div>
    <p className="mt-6 max-w-2xl mx-auto">
      Nestled in the heart of Tofino's wilderness, our exclusive remote location offers an unparalleled experience. Surrounded by nature's beauty, you will find peace, luxury, and adventure all in one place. Whether it's a private getaway or an intimate celebration, this location is designed to provide an unforgettable experience.
    </p>
  </div>
</div>


<div className="bg-gray-100 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-8">Your Lux Remote Experience</h2>
    <p className="max-w-2xl mx-auto text-lg text-gray-700">
      From arrival to departure, every moment of your Lux Remote experience is crafted with care. Here's a glimpse of what you can expect:
    </p>

    <div className="mt-12 space-y-4">
      {/* Day 1 Accordion */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="experience-accordion" id="day1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Day 1: Arrival & Settling In
        </div>
        <div className="collapse-content">
          <p>
            You’ll be greeted at our designated location and guided to your remote setup, where the wilderness awaits. Spend the day exploring your surroundings or simply relax and unwind.
          </p>
        </div>
      </div>

      {/* Day 2 Accordion */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="experience-accordion" id="day2" />
        <div className="collapse-title text-xl font-medium">
          Day 2: Adventure & Indulgence
        </div>
        <div className="collapse-content">
          <p>
            Choose from a range of activities such as guided nature walks, kayaking, or a private chef-prepared dinner under the stars.
          </p>
        </div>
      </div>

      {/* Day 3 Accordion */}
      <div className="collapse collapse-arrow bg-base-200 rounded-lg">
        <input type="radio" name="experience-accordion" id="day3" />
        <div className="collapse-title text-xl font-medium">
          Day 3: Departure
        </div>
        <div className="collapse-content">
          <p>
            After a leisurely breakfast, your departure will be as smooth as your arrival, leaving you with memories of an extraordinary escape.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

            <div className="bg-gray-50 py-16">
            <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Create Your Perfect Lux Remote Experience</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
                At Lux Remote, every detail of your stay is crafted to meet your desires. Whether you wish to extend your getaway, indulge in a Crab Cookout, or enjoy a bespoke Lux Picnic at your remote location, we offer endless possibilities to tailor your experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Custom Duration Card */}
                <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Custom Duration</h2>
                    <p>Extend your stay as long as you'd like. From weekend getaways to week-long retreats, we accommodate your preferred duration.</p>
                </div>
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                </div>

                {/* Crab Cookout Card */}
                <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Crab Cookout</h2>
                    <p>Delight in a gourmet Crab Cookout prepared by our expert chefs right at your remote location. Perfect for a memorable evening by the sea.</p>
                </div>
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                </div>

                {/* Lux Picnic Card */}
                <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Lux Picnic</h2>
                    <p>Enjoy a bespoke Lux Picnic, tailored to your tastes and set up at a scenic spot at your remote location, offering both luxury and tranquility.</p>
                </div>
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
            </div>
            </div>
                <div className="mt-12">
                <button className="btn btn-primary mr-4">Start Customizing Your Stay</button>
                <button className="btn btn-outline">Learn More</button>
                </div>
            </div>

            </div>


<div className="bg-gray-800 text-white py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Ready to Embark on Your Adventure?</h2>
    <p className="mb-8">Contact us today to learn more or to reserve your exclusive Lux Remote experience.</p>
    <button className="btn btn-primary mr-2">Book Now</button>
    <button className="btn btn-outline">Contact Us</button>
  </div>
</div>



<div>
  <Footer />
</div>
</div>
    )
  }

