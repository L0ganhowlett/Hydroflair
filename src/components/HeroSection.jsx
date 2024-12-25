import React from 'react';
import video1 from '../assets/video1.mp4';

const HeroSection = () => {
  return (
    <div
      id="AboutUs"
      className="flex flex-col items-center py-12 lg:py-20 bg-blue-900 text-white relative overflow-hidden"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-center tracking-wide">
        Specialist in Fluid Handling Solutions
      </h1>
      <p className="mt-6 text-lg sm:text-2xl text-center font-medium max-w-4xl lg:max-w-5xl">
        We strive to provide the best quality products to our clients and are dedicated
        to meeting their needs and requirements. We are committed to providing our
        customers with the highest quality products and services at the most competitive prices.
      </p>
      <div id="Home" className="flex flex-col items-center mt-12 lg:mt-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white text-center tracking-wide">
          Brand Partners
        </h1>
      </div>

      {/* Optional: Add a video or background effect */}
      <video
        src={video1}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full opacity-30"
      ></video>
    </div>
  );
};

export default HeroSection;
