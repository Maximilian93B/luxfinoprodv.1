import Image from "next/image";

export default function Gallery() {
    
    // Declare array of images in a constant 
    const images = [
        { src: '/Catering1.JPG', alt: 'Dish 1' },
        { src: '/Catering2.JPG', alt: 'Dish 2' },
        { src: '/Catering3.JPG', alt: 'Dish 3' },
        { src: '/Catering4.JPG', alt: 'Dish 4' },
        { src: '/Catering5.jpeg', alt: 'Dish 5' },
        { src: '/Catering6.jpeg', alt: 'Dish 6' },
        { src: '/Catering6.jpeg', alt: 'Dish 7' },
        { src: '/Catering6.jpeg', alt: 'Dish 7' },
        { src: '/Catering6.jpeg', alt: 'Dish 7' },
    ];

    return (
        <div className="bg-base-200 py-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Our Signature Dishes</h2>
            <p className="text-lg text-gray-600 mt-4">
              Indulge in our exquisite culinary creations, meticulously crafted by our Executive Chef.
            </p>
          </div>
    
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
            {images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={300}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  quality={100}
                />
              </div>
            ))}
          </div>
       
        </div>


      );

}
