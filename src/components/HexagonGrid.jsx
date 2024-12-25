import React from "react";
import logo1 from "../assets/hexagon/right_pump.png";
import logo2 from "../assets/hexagon/time_delivery.png";
import logo3 from "../assets/hexagon/competitive_pricing.png";
import logo4 from "../assets/hexagon/call.png";
import logo5 from "../assets/hexagon/applications.png";

const services = [
  {
    id: 1,
    image: logo1,
    title: "RIGHT PUMP SELECTION",
    description: "We specialize in helping you select the right pump for your specific needs, ensuring optimal performance and efficiency."
  },
  {
    id: 2,
    image: logo2,
    title: "TIMELY DELIVERY",
    description: "We are committed to delivering your products on time, ensuring your projects stay on schedule."
  },
  {
    id: 3,
    image: logo3,
    title: "COMPETITIVE PRICING",
    description: "Our competitive pricing ensures that you get the best value for your investment without compromising on quality."
  },
  {
    id: 4,
    image: logo4,
    title: "24/7 AVAILABILITY ON CALL",
    description: "We provide round-the-clock availability to support your needs, ensuring you have access to assistance whenever required."
  },
  {
    id: 5,
    image: logo5,
    title: "RANGE OF APPLICATIONS",
    description: "Our solutions cater to a wide range of applications, ensuring versatility and adaptability across various industries."
  }
];

const HexagonGrid = () => {
  return (
    <div id="Services" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-12">
        Our{" "}
        <span className="bg-gradient-to-r from-blue-500 to-gray-800 text-transparent bg-clip-text">
          Services
        </span>
      </h1>
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-shadow duration-300">
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full border-4 border-blue-500"
                />
              </div>
              <h2 className="text-xl font-bold text-blue-600 mb-2">{service.title}</h2>
              <p className="text-center text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.slice(3).map((service) => (
            <div key={service.id} className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-shadow duration-300">
              <div className="relative w-24 h-24 mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full border-4 border-blue-500"
                />
              </div>
              <h2 className="text-xl font-bold text-blue-600 mb-2">{service.title}</h2>
              <p className="text-center text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HexagonGrid;
