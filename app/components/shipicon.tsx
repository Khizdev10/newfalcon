import React from 'react';

// --- Icons ---
const ShipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.8 2.38 8"/><path d="M12 10v4"/><path d="M12 2v3"/><polyline points="20 19 12 10 4 19"/></svg>
);
const BoxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22v-9"/></svg>
);
const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"/><path d="M22 2 13.03 11a3 3 0 0 0 0 4.24l1.42 1.42a3 3 0 0 1 0 4.24L11 17.5l-2.07 1.83a2 2 0 0 1-2.91-2.58L9.5 13.5l-2-2-3.8 2.2a2 2 0 0 1-2.79-1.6l-.16-.94a2 2 0 0 1 1.1-2.2l5.05-2.65L11 2Z"/></svg>
);
const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
);
const FeaturesFlex = () => {
  const services = [
    {
      title: "Full Truck Load (FTL)",
      icon: <TruckIcon />,
      desc: "Dedicated trucks for large shipments, ensuring fast, secure, and direct delivery without unnecessary stops."
    },
    {
      title: "Less Than Truck Load (LTL)",
      icon: <BoxIcon />,
      desc: "Cost-effective transport for smaller consignments, combining multiple shipments while maintaining safety and efficiency."
    },
    {
      title: "Express Road Delivery",
      icon: <TruckIcon />,
      desc: "Time-critical road transport services designed for urgent deliveries with optimized routing and real-time tracking."
    },
    {
      title: "Custom & Distribution",
      icon: <BoxIcon />,
      desc: "Reliable distribution and local delivery solutions with flexible scheduling to support your business operations."
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex gap-4"
          data-aos="fade-down"                 // Animation type
          data-aos-delay={index * 150}       // Staggered delay
          data-aos-duration="600"            // Animation duration
          data-aos-once="true"               // Only animate once
        >
          {/* Icon Circle */}
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
            {service.icon}
          </div>
          {/* Text Content */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="text-xs text-slate-500 mb-2 leading-relaxed">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesFlex;
