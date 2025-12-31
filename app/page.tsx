"use client"; // REQUIRED: This animation needs client-side JS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaSearchLocation, FaWhatsapp, FaPhone } from "react-icons/fa";
import image from '../media/bg.jpeg';
import Navbar from '../components/Navbar';
import Typewriter from 'typewriter-effect';
import Btns from '../components/Contact-btns';
// import WhoWeAre from './components/whoweare';
import Stats from '../components/Stats';
import Characteristics  from '../components/Characteristics';
import Features from '../components/Features';
import Footer from '../components/Footer';
import MapSection from '../components/Locationmap';
export default function Home() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);
  return (
    <>
<div className="relative min-h-screen flex flex-col">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-10"
    src="/videos/bg-video-compressed.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Optional overlay to darken video */}
  <div className="absolute inset-0  bg-opacity-20 z-10" style={{backgroundColor: 'rgba(15, 23, 42, 0.9)'}}></div>
  <Navbar />

  {/* Content */}
  <div className="relative flex-1 flex flex-col items-center justify-center z-10 text-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white " data-aos="fade-down"
    style={{fontFamily:"ui-sans-serif"}}>
      New Falcon Hazara  
    </h1>
    <p className='text-white text-2xl font-lighter'> Goods Forwarding Agency</p>

    {/* Typewriter */}
    <div className="text-2xl mb-5 font-light text-white h-12" data-aos="fade-left">
      <Typewriter
        options={{
          strings: ['We Carry We Care', 'Your Trusted Partner', 'Fast & Reliable'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>

    {/* Buttons */}
    <div className="flex justify-center items-center gap-4" data-aos="fade-up">
      <a
        href="#map"
        className="shine-btn inline-flex items-center gap-1 bg-blue-700 text-white px-4 py-1 rounded-full border-2 border-blue-500 hover:bg-blue-800 transition"
      >
        <FaSearchLocation className="text-lg" />
        Find Us
      </a>

      <a
        href="https://wa.me/923442656567"
        target="_blank"
        rel="noopener noreferrer"
        className="shine-btn inline-flex items-center gap-1 bg-green-700 text-white px-4 py-1 rounded-full border-2 border-green-500 hover:bg-green-800 transition"
      >
        <FaWhatsapp className="text-lg" />
        WhatsApp
      </a>
    </div>

    <Btns />
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