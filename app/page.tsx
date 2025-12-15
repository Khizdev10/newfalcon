"use client"; // REQUIRED: This animation needs client-side JS

import image from '../media/bg.jpeg';
import Navbar from './components/navbar';
import Typewriter from 'typewriter-effect';
import Characteristics  from './components/characteristics';
import Features from './components/features';
export default function Home() {
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
          <h1 className="text-5xl font-bold text-white mb-4">
            New Falcon
            <span className="text-blue-600"> Hazara</span>
          </h1>

          {/* The Animated Typewriter Text */}
          <div className="text-4xl font-light text-white h-12"> {/* Added h-12 to prevent layout shift */}
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

        </div>
      </div>
    </div>

<Features />
<Characteristics />
</>
);
}