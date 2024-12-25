import React from 'react';
import Footer from './Footer';
import serviceImage1 from '../assets/services/service-1.jpg';
import serviceImage2 from '../assets/services/service-2.jpg';
import serviceImage3 from '../assets/services/service-3.jpg';
import serviceImage4 from '../assets/services/service-4.jpg';
import serviceImage5 from '../assets/services/service-5.jpg';
import serviceImage6 from '../assets/services/service-6.jpg';

const services = [
  { id: 1, title: "Water Pump Repairing", image: serviceImage1, description: "Expert repair services for various types of water pumps to ensure optimal performance and reliability." },
  { id: 2, title: "Borewell Drilling", image: serviceImage2, description: "Professional borewell drilling services for accessing groundwater efficiently and effectively." },
  { id: 3, title: "Rain Water Harvesting", image: serviceImage3, description: "Systems to collect and store rainwater for various uses, promoting sustainability and conservation." },
  { id: 4, title: "Water Pump Energy Audit", image: serviceImage4, description: "Comprehensive energy audits for water pumps to optimize efficiency and reduce operational costs." },
  { id: 5, title: "Geological Survey", image: serviceImage5, description: "Detailed geological surveys to assess ground conditions and guide drilling and construction activities." },
  { id: 6, title: "Water Pump Automation", image: serviceImage6, description: "Advanced automation solutions for water pumps to enhance control and operational efficiency." },
];

const ServicesPage = () => {
  return (
    <div className="relative bg-blue-900 min-h-screen text-white">

      <div className="relative container mx-auto py-12 px-4 z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Our Services
        </h1>
        <p className="text-center mb-12 text-lg text-gray-200">
          Explore our range of services designed to meet all your water-related needs with precision and care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-600">{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
