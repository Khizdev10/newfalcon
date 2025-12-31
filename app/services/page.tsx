"use client";
import dynamic from "next/dynamic";

const DeliveryMap = dynamic(() => import("@/components/DeliveryMap"), { ssr: false });

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, MapPin, Briefcase } from "lucide-react";
// import DeliveryMap from "@/components/DeliveryMap";
import AOS from 'aos';

import Btns from '@/components/Contact-btns'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import image from "../../media/high.jpg";
export default function ServicesPage() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-900 text-white py-24 text-center flex items-center justify-center flex-col" style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${image.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
      }} data-aos="fade-down">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
          Our <span className="text-blue-500">Services</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Reliable logistics and transportation services across Pakistan.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          <ServiceCard
            title="Road Transport"
            desc="Fast and secure road transportation across major cities."
            icon={Truck}
          />
          <ServiceCard
            title="Nationwide Delivery"
            desc="Coverage across Pakistan including major hubs."
            icon={MapPin}
          />
          <ServiceCard
            title="Corporate Logistics"
            desc="Customized logistics solutions for businesses."
            icon={Briefcase}
          />
        </div>
      </section>

      <Btns />
      {/* MAP SECTION */}
      <section className="bg-gray-50 py-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">
          Delivery Coverage
        </h2>
        <DeliveryMap />
      </section>

      <Footer />
    </>
  );
}

function ServiceCard({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) {
  return (
    <div className="bg-white p-6 rounded-xl flex items-center justify-evenly shadow hover:shadow-lg transition">
      <Icon className="w-10 h-10 text-blue-500 mb-4" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
