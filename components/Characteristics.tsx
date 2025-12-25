import React from 'react';
import art from '../media/art.jpeg'

const Characteristics = () => {
  const items = [
    {
      title: "Customer Satisfaction Tools",
      desc: "Advanced tracking, transparent communication, and responsive support systems designed to ensure a smooth and reliable delivery experience for every customer.",
    },
    {
      title: "Management & Reporting",
      desc: "Comprehensive reporting and performance insights that help businesses monitor shipments, optimize routes, and improve operational efficiency.",
    },
    {
      title: "Freight Payment Options",
      desc: "Flexible and secure payment solutions tailored to meet different business needs, ensuring convenience, transparency, and financial control.",
    },
    {
      title: "Compliance Solutions",
      desc: "Industry-compliant transport processes and documentation management to ensure safe, legal, and hassle-free road freight operations.",
      hasButton: true,
    },
  ];

  return (
    <div
      className="w-full min-h-[60vh] bg-[#1e2329] py-16 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${art.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-once="true"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch justify-center divide-y md:divide-y-0 md:divide-x divide-gray-700 border-t border-b border-gray-700">
          
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/4 p-10 flex flex-col items-center text-center relative group"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              data-aos-duration="700"
              data-aos-once="true"
            >
              {/* Title */}
              <h3
                className="text-xl font-bold mb-6 min-h-[3.5rem] flex items-end justify-center"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 100}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-400 text-sm leading-relaxed mb-8 font-light"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 200}
              >
                {item.desc}
              </p>

              {/* Blue Line Indicator */}
              <div
                className="w-12 h-0.5 bg-blue-600 mt-auto"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 300}
              ></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Characteristics;
