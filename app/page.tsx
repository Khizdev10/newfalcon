"use client"; // REQUIRED: This animation needs client-side JS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaSearchLocation, FaWhatsapp, FaPhone } from "react-icons/fa";
import image from '../media/bg.jpeg';
import Navbar from './components/Navbar';
import Typewriter from 'typewriter-effect';
import Btns from './components/Contact-btns';
// import WhoWeAre from './components/whoweare';
import Stats from './components/Stats';
import Characteristics  from './components/Characteristics';
import Features from './components/Features';
import Footer from './components/Footer';
import MapSection from './components/Locationmap';
export default function Home() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);
  return (
    <>
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
          
        
      }}
    >
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4" data-aos="fade-down">
            New Falcon
            <span className="text-blue-600"> Hazara</span>
          </h1>

          {/* The Animated Typewriter Text */}
          <div className="text-4xl mb-5 font-light text-white h-12" data-aos="fade-left"> {/* Added h-12 to prevent layout shift */}
            <Typewriter
              options={{
                strings: ['We Carry We Care', 'Your Trusted Partner', 'Fast & Reliable'],
                autoStart: true,
                loop: true,
                delay: 75, // Typing speed (lower is faster)
                deleteSpeed: 50, // Deleting speed
              }}
            />
          </div>
          <div className="flex justify-center items-center gap-4" data-aos="fade-up">
  {/* Find Us Button */}
  <a
    href="#map"
    className="shine-btn inline-flex items-center gap-1 bg-blue-700 text-white px-4 py-1 rounded-full border-2 border-blue-500 cursor-pointer hover:bg-blue-800 transition"
  >
    <FaSearchLocation className="text-lg" />
    Find Us
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/923442656567"
    target="_blank"
    rel="noopener noreferrer"
    className="shine-btn inline-flex items-center gap-1 bg-green-700 text-white px-4 py-1 rounded-full border-2 border-green-500 cursor-pointer hover:bg-green-800 transition"
  >
    <FaWhatsapp className="text-lg" />
    WhatsApp
  </a>
</div>
<Btns />

  </div>
      </div>
    </div>
{/* <WhoWeAre /> */}
<Features />
<Characteristics />
<Stats />
<MapSection />
<Footer />
</>
);
}