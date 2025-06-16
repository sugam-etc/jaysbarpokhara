import React from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiClock,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

const MapwImages = () => {
  return (
    <div className="bg-black text-white w-full overflow-hidden font-inter">
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Section 1: JAYSBAR KARAOKE Title + Book Now Button */}
        <div className="flex justify-between items-center p-4 sm:p-6">
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">
            JAYSBAR KARAOKE
          </h1>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Book Now <FiArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Main Content Sections */}
        <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4 sm:px-6 sm:pb-6">
          {/* Left Column - Images */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Main Image */}
            <div className="w-full aspect-video rounded overflow-hidden mb-4">
              <img
                src="https://placehold.co/800x600/1D2C3D/FFFFFF?text=Main+View"
                alt="JAYSBAR main view"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Smaller Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="aspect-[4/3] overflow-hidden rounded">
                <img
                  src="https://placehold.co/400x300/2A3F50/FFFFFF?text=Interior+View"
                  alt="JAYSBAR interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded">
                <img
                  src="https://placehold.co/400x300/3C5A6B/FFFFFF?text=Karaoke+Room"
                  alt="JAYSBAR karaoke room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Map and Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Map Container */}
            <div className="w-full aspect-video rounded overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.908843947254!2d83.9545513117785!3d28.21008197579758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995950019c6566b%3A0xe21765d2a4463836!2sJay&#39;s%20Bar!5e0!3m2!1sen!2snp!4v1749545766616!5m2!1sen!2snp"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info Section */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-sm flex-grow">
              <div className="h-full overflow-y-auto">
                <ul className="space-y-3 text-gray-300">
                  {/* Address */}
                  <li className="flex items-start">
                    <FiMapPin className="mt-1 mr-3 flex-shrink-0 text-white" />
                    <div>
                      <p className="text-white">
                        Between Street 14 & 15, Main Street, Lakeside
                      </p>
                      <p className="text-sm text-gray-400">
                        Nearest tube: Hallanchowk, Pokhara
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-center">
                    <FiPhone className="mt-1 mr-3 flex-shrink-0 text-white" />
                    <span>0203 7402205</span>
                  </li>

                  {/* Email */}
                  <li className="flex items-center">
                    <FiMail className="mt-1 mr-3 flex-shrink-0 text-white" />
                    <span>booking@jaysbarpokhara.com</span>
                  </li>

                  {/* Hours */}
                  <li className="flex items-start">
                    <FiClock className="mt-1 mr-3 flex-shrink-0 text-white" />
                    <div className="flex-1">
                      <ul className="space-y-1">
                        <li className="flex justify-between">
                          <span className="text-gray-400">Monday:</span>
                          <span className="text-white">Closed</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Tuesday:</span>
                          <span>4pm-12:30am</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">
                            Wednesday-Friday:
                          </span>
                          <span>4pm-1:30am</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapwImages;
