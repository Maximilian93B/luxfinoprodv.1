import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function HomePage() {
  return (
    <div>
      {/* NavBar */}
      <Navbar />

     {/* Hero section */}
     <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to LuxFino</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-outline mr-1">Explore LuxFino</button>
            <button className="btn btn-outline">Book Now</button>
          </div>
        </div>
      </div>

        <div className="about bg-white py-12">
          <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About LuxFino</h2>
          <p className="text-lg text-gray-600 mb-12">
            LuxFino offers premium experiences that blend luxury, nature, and indulgence. From curated picnics to 
            bespoke glamping and chef-catered gourmet dining, we create moments that are both intimate and extraordinary.
          </p>


      {/* Grid Layout About Section */}
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        {/* First Item - Our Mission */}
  <div className="row-span-3 bg-gray-200 text-gray-800 flex items-center justify-center p-4 rounded-lg">
    <div>
      <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
      <p>
        At LuxFino, we aim to provide exclusive, high-end luxury experiences that connect our clients
        with nature, indulgence, and relaxation.
      </p>
    </div>
  </div>
  
        <div className="col-span-2 bg-gray-100 text-gray-800 flex items-center justify-center p-4 rounded-lg">
          <div>
            <h3 className="text-2xl font-bold mb-2">Services</h3>
            <p>
            LuxFino offers premium experiences that blend luxury, nature, and indulgence. From curated picnics to 
            bespoke glamping and chef-catered gourmet dining, we create moments that are both intimate and extraordinary
            
            </p>
          </div>
        </div>
        <div className="row-span-2 col-span-2 bg-gray-50 text-gray-800 flex items-center justify-center p-4 rounded-lg">
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
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">LuxPicnics</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-outline">Choose a Picnic</button>
        </div>
      </div>
    </div>

    {/* DaisyUI Divider */}
    <div className="divider"></div>

    {/* Section 2: Lux Remote */}
    <div className="hero h-80">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Lux Remote</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-outline"> Explore Lux Remote</button>
        </div>
      </div>
    </div>

    {/* DaisyUI Divider */}
    <div className="divider"></div>

    {/* Section 3: LuxCatering */}
    <div className="hero h-80">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold"> 1-on-1 with our executive Chef</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-outline">Book LuxFino Catering</button>
        </div>
      </div>
    </div>

  </div>
</div>




  
  
</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
