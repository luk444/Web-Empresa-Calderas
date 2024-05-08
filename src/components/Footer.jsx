import React from "react";
// Icons
import {
  RiFacebookBoxFill, 
  RiTwitterFill, 
  RiWhatsappLine, 
  RiInstagramLine
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer text-white"
          >
            BaxiNova<span className="text-primary text-5xl">.</span>{" "}
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="https://facebook.com/servicebaxinova" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookBoxFill />{" "}
          </a>
          <a href="https://twitter.com/servicebaxinova" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterFill />{" "}
          </a>
          <a href="https://instagram.com/servicebaxinova" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="https://web.whatsapp.com/servicebaxinova" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiWhatsappLine  />{" "}
          </a>
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Company
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Press
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Events
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl"
          >
            <a href="tel:01177094182">Contactar</a>
          </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © lukdev - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
