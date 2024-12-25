import React from 'react';
import slide1 from '../assets/clients/sugee.webp';
import slide2 from '../assets/clients/romell.webp';
import slide3 from '../assets/clients/apcotex.webp';
import slide4 from '../assets/clients/hcc.webp';
import slide5 from '../assets/clients/pernod-ricard.webp';
import slide6 from '../assets/clients/birla_century.webp';

const Clients = () => {
  const slides = [
    { url: slide1, alt: 'Sugee Client' },
    { url: slide2, alt: 'Romell Client' },
    { url: slide3, alt: 'Apcotex Client' },
    { url: slide4, alt: 'HCC Client' },
    { url: slide5, alt: 'Pernod Ricard Client' },
    { url: slide6, alt: 'Birla Century Client' },
  ];

  return (
    <div className="relative overflow-hidden bg-white py-6">
      <div className="flex animate-marquee space-x-4">
        {slides.concat(slides).map((slide, index) => (
          <div
            key={index}
            className="min-w-[33.33%] h-[200px] md:h-[300px] flex-shrink-0 bg-white shadow-md"
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Clients;
