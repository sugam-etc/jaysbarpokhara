import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";

const Footer = () => {
  return (
    // Background is black as requested
    <footer className="bg-black text-gray-300 py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
      {/*
        To ensure the entire content block is centered and the internal columns are also centered:
        - `mx-auto` centers the `max-w-7xl` container itself.
        - `md:justify-center` will center the three child columns within this container.
        - Removed `flex-1` from children to prevent them from stretching, allowing them to
          take their natural width and be collectively centered.
        - `w-full md:w-auto` ensures children take full width on mobile but only needed width on desktop.
      */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around items-center md:items-start gap-16">
        {/* Company Information Section */}
        {/* Removed flex-1 and added w-full md:w-auto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto min-w-[200px]">
          {/* Logo Placeholder - You can replace this with your actual logo image */}
          <Link
            className="flex items-center justify-center md:flex-grow md:text-center"
            to={"/"}
          >
            <img
              className="h-8 md:h-10 cursor-pointer transition-all duration-200 hover:opacity-90"
              src={logo}
              alt="Company Logo"
            />
          </Link>
          <p className="mt-4 text-sm max-w-xs leading-relaxed text-gray-400">
            Between Street 14 & 15, Main Street
            <br /> Lakeside, Pokhara 33700
          </p>
          <p className="mt-2 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Jay's Bar
          </p>
        </div>

        {/* Navigation Links Section */}
        {/* Removed flex-1 and added w-full md:w-auto */}
        <nav className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto min-w-[150px]">
          <h3 className="font-semibold text-gray-100 mb-2 uppercase tracking-wide">
            Quick Links
          </h3>
          {/* Using <a> tags as react-router-dom Link is not directly available in this environment */}
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300 rounded-md py-1 px-2 -mx-2"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300 rounded-md py-1 px-2 -mx-2"
          >
            Jays Experience
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300 rounded-md py-1 px-2 -mx-2"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-300 rounded-md py-1 px-2 -mx-2"
          >
            FAQ
          </a>
        </nav>

        {/* Social Media Section */}
        {/* Removed flex-1 and added w-full md:w-auto */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto min-w-[150px]">
          <h3 className="font-semibold text-gray-100 mb-2 uppercase tracking-wide">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaFacebook size={26} />{" "}
              {/* Increased icon size slightly for better visibility */}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
