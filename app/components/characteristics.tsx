import React from 'react';
import art from '../../media/art.jpeg'
const Characteristics = () => {
  // Data derived directly from your image text
  const items = [
    {
      title: "Customer Satisfication Tools", // Note: Kept original spelling from image
      desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem",
    },
    {
      title: "Management & Reporting",
      desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem",
    },
    {
      title: "Freight Payment Options",
      desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem",
    },
    {
      title: "ComplianceSolutions",
      desc: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem",
      hasButton: true // To mark the last item with the blue button
    },
  ];

  return (
    <div className="w-full min-h-[60vh] bg-[#1e2329] py-16 text-white" 
    style={{backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${art.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}> {/* Dark background color */}
      <div className="container mx-auto px-4">
        {/* Flex container with dividers */}
        <div className="flex flex-col md:flex-row items-stretch justify-center divide-y md:divide-y-0 md:divide-x divide-gray-700 border-t border-b border-gray-700">
          
          {items.map((item, index) => (
            <div key={index} className="w-full md:w-1/4 p-10 flex flex-col items-center text-center relative group">
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-6 min-h-[3.5rem] flex items-end justify-center">
                {item.title}
              </h3>
              
              {/* Description Text */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                {item.desc}
              </p>
              
              {/* Blue Line Indicator */}
              <div className="w-12 h-0.5 bg-blue-600 mt-auto"></div>

              {/* Blue Arrow Button (Only for the last item, per the image) */}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Characteristics; 