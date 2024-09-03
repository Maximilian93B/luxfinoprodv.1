


export default function LuxPincics () {
    return (
        <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Book Your LuxFino Experience</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Booking Form */}
      <form className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Customize Your Experience</h2>

        {/* Select Experience */}
        <div>
          <label className="block text-left text-gray-800 font-semibold mb-2">Choose Your Experience</label>
          <select className="select select-bordered w-full">
            <option>Luxury Picnic</option>
            <option>Remote Glamping</option>
            <option>In-house Chef Catering</option>
            <option>Exclusive Corporate Lunch</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-left text-gray-800 font-semibold mb-2">Select Duration</label>
          <select className="select select-bordered w-full">
            <option>One Day</option>
            <option>Weekend (2 Days)</option>
            <option>3 Days</option>
            <option>Custom Duration</option>
          </select>
        </div>

        {/* Custom Services */}
        <div>
          <label className="block text-left text-gray-800 font-semibold mb-2">Additional Lux Services</label>
          <div className="flex flex-col items-start">
            <label className="flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="ml-2">Crab Cookout</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="ml-2">Bespoke Picnic at Remote</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="ml-2">Private Chef Experience</span>
            </label>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <label className="block text-left text-gray-800 font-semibold mb-2">Your Email</label>
          <input type="email" className="input input-bordered w-full" placeholder="Enter your email" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">Submit Booking Inquiry</button>
      </form>
    </div>
  </div>
</div>


    )
}