import React from 'react';
import slide1 from '../assets/brand partners/Alpha.webp';
import slide2 from '../assets/brand partners/KSB.webp';
import slide3 from '../assets/brand partners/Kirloskar.webp';
import slide4 from '../assets/brand partners/Falcon.webp';

const Brand = () => {
  const slides = [
    { url: slide1, alt: 'Alpha Brand Partner' },
    { url: slide2, alt: 'KSB Brand Partner' },
    { url: slide3, alt: 'Kirloskar Brand Partner' },
    { url: slide4, alt: 'Falcon Brand Partner' },
  ];

  return (
    <div className="relative overflow-hidden bg-white py-6">
      <div className="flex animate-marquee space-x-4">
        {slides.concat(slides).map((slide, index) => (
          <div
            key={index}
            className="min-w-[300px] md:min-w-[400px] h-[200px] md:h-[300px] flex-shrink-0 bg-white flex items-center justify-center border border-gray-200"
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

export default Brand;
