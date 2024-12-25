import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div id="Home" className="flex flex-col items-center mt-6 lg:mt-20 w-full">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide w-full">
        About 
        <span className="bg-gradient-to-r font-bold from-blue-500 to-gray-800 text-transparent bg-clip-text">
          {" "}
          HYDROFLAIR ENGINEERS
        </span>
      </h1>
      <p className="mt-10 text-3xl text-center text-black-500 max-w-4xl w-full px-4 lg:px-0">
        We bring over 35 years of experience, led by our second generation, specializing in 
        pumping solutions for both domestic and industrial segments. Our commitment from the 
        outset has been to deliver the most reliable systems, ensuring the highest quality 
        products that meet our clients' exact needs. We eagerly anticipate the chance to 
        collaborate with you, confident that our products and services will prove invaluable 
        to your requirements.
      </p>
    </div>
  );
};

export default HeroSection;
