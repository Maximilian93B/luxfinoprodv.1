import Navbar from "../components/Navbar"
import Image from "next/image"
import Gallery from "../components/Gallery";
export default function HeroComponent() {
    return (

        <div>
            <Navbar/>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          {/* Executive Chef Image */}
          <div className="max-w-sm rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="/path-to-chef-image.jpg" // Replace with actual path to the chef's image
              alt="Executive Chef"
              width={400} 
              height={500} 
              className="rounded-lg shadow-2xl object-cover"
              quality={100} // Ensures a high-quality image rendering
            />
          </div>
  
          {/* Hero Text Content */}
          <div className="lg:ml-12 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-800 mb-5">Meet LuxFino's Executive Chef</h1>
            <p className="py-6 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Experience the culinary brilliance of our Executive Chef, who brings the finest ingredients and world-class cooking techniques to every dish, creating an unforgettable dining experience. 
            </p>
            <button className="btn btn-primary px-6 py-3 text-lg bg-gradient-to-r from-gold to-yellow-500 border-none hover:from-yellow-400 hover:to-yellow-300">
              Get Started
            </button>
          </div>
        </div>
      </div>

        <div>
        <Gallery/>
        </div>

        
      
      </div>
    );
  }
