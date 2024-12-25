import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div id="ContactUs" className="container mx-auto text-center px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Visit Us At</h2>
        <p className="text-lg mb-2">HYDROFLAIR ENGINEERS</p>
        <p className="text-lg mb-2">Office1, 1st Floor, Arihant Enclave,</p>
        <p className="text-lg mb-2">Ashok Chakravarti Road,</p>
        <p className="text-lg mb-6">Kandivali (East), Mumbai 400101</p>

        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Find Us On The Map</h2>
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15071.553089099696!2d72.8567087!3d19.2000817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a7bf804e8d%3A0x19de0acf6d9a7e36!2sHydroflair%20Engineers!5e0!3m2!1sen!2sin!4v1722867236706!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
