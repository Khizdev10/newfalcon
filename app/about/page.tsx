"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import image from "../../media/high.jpg";
import falcon from "../../media/falcon logo.jpg";
import Footer from "../components/Footer";
import aos from "aos";
import Btns from "../components/Contact-btns";
import "aos/dist/aos.css";

// images
import owner from "../../media/ghulam.jpeg";
import manager1 from "../../media/waqas.jpeg";
import manager2 from "../../media/bilal.jpeg";

export default function About() {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${image.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[50vh] flex items-center justify-center text-center px-6"
      >
        <div className="max-w-3xl">
          <h1
            className="text-white text-5xl font-bold mb-4 mt-20"
            data-aos="fade-down"
          >
            About Us
          </h1>
          <p
            className="text-slate-200 text-lg leading-relaxed"
            data-aos="fade-up"
          >
            A family-run logistics company built on trust, experience, and
            reliable transportation services across Pakistan.
          </p>
        </div>
      </section>

      {/* BRAND INTRO SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* LOGO */}
          <div className="flex justify-evenly md:justify-center md:w-1/2">
            <img
              src={falcon.src}
              alt="Business logo"
              className="w-[460px]"
            />
          </div>

          {/* TEXT */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold" data-aos="fade-down">
              New Falcon Hazara
            </h2>

            <h3
              className="text-2xl font-semibold mb-4 opacity-60"
              data-aos="fade-up"
            >
              Goods Forwarding Agency
            </h3>

            <p
              className="text-slate-600 leading-relaxed mb-4"
              data-aos="fade-up"
            >
              New Falcon Hazara was founded by <strong>Ghulam Farooq</strong> with a
              clear purpose: to provide reliable and honest logistics services
              for businesses across Pakistan. Starting from Karachi, the company
              grew through years of dedication, hard work, and strong client
              relationships.
            </p>

            <p
              className="text-slate-600 leading-relaxed mb-4"
              data-aos="fade-up"
            >
              Today, the business is jointly run by his two sons,
              <strong> Waqas Farooq</strong> and <strong>Bilal Farooq</strong>, who
              continue to carry forward the values their father built the
              company on.
            </p>

            <p
              className="text-slate-600 leading-relaxed"
              data-aos="fade-up"
            >
              Specializing in road logistics, the company transports goods from
              <strong> Karachi to multiple cities across Pakistan</strong> using
              a dependable fleet of trucks, focusing on safe handling, timely
              delivery, and long-term trust with customers.
            </p>
          </div>
        </div>
      </section>

<Btns />
      {/* MEET THE FAMILY */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-18"
            data-aos="fade-down"
          >
            Our Leadership
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            data-aos="fade-up"
          >
            {/* SON 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={manager1.src}
                  alt="Director"
                  className="w-full h-full cursor-pointer object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold">Waqas Farooq</h3>
              <p className="text-slate-500 mb-3">Co-Director</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Jointly manages operations, ensuring reliable transportation and
                smooth day-to-day logistics across all routes.
              </p>
            </div>

            {/* FOUNDER */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center group transform md:translate-y-[-2rem]">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={owner.src}
                  alt="Founder"
                  className="w-full h-full cursor-pointer object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold">Ghulam Farooq</h3>
              <p className="text-slate-500 mb-3">Founder</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founder of New Falcon Hazara, whose vision and dedication laid
                the foundation for a trusted logistics business serving
                Pakistan.
              </p>
            </div>

            {/* SON 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-center group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={manager2.src}
                  alt="Director"
                  className="w-full h-full cursor-pointer object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold">Bilal Farooq</h3>
              <p className="text-slate-500 mb-3">Co-Director</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Oversees business operations and client relationships, ensuring
                timely delivery and long-term customer trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
