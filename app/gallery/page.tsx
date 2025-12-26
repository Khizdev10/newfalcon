'use client'
import { useEffect } from 'react';
import image from '../../media/high.jpg'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Btns from '@/components/Contact-btns'
import aos from 'aos';
import 'aos/dist/aos.css';
// Import images statically for Next.js
import g1 from '../../media/g1.jpg';
import g2 from '../../media/g2.jpg';
import g3 from '../../media/g3.jpg';
import g4 from '../../media/g4.jpg';
import g5 from '../../media/g5.jpeg';
import g6 from '../../media/Truck_Pakistan.jpg';
import g7 from '../../media/truck.jpg';
import g8 from '../../media/truck2.jpeg';
export default function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6,g7,g8]; // Only existing images

  useEffect(() => { aos.init({ duration: 1000 }); }, []);

  return (
    <>
      <Navbar />
      
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${image.src})`,
          backgroundRepeat: "no-repeat",
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} data-aos="fade-down"
        className="flex justify-center items-center"
      >
        <h1 className="text-4xl font-bold text-center text-white">
          Gallery
        </h1>
      </div>

      {/* MASONRY GRID */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[10px]" data-aos="fade-up">
          {images.map((src, index) => {
            // Random row span for masonry effect
            const spans = ["row-span-20", "row-span-24", "row-span-28"];
            const randomSpan = spans[index % spans.length];

            return (
              <div 
                key={index} 
                className={`${randomSpan} overflow-hidden rounded-xl shadow-lg` }
                data-aos="fade-up"
              >
                <img
                  src={src.src} // support for imported images
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
      <Btns />
      <Footer />
    </>
  );
}
