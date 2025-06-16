import React from "react";
import { Link } from "react-router-dom";
import highlights1 from "../../assets/highlight1.jpg";

const DiscoverCatalogue = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={highlights1}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-normal mb-6">
          More than 45,000 songs at your fingertips
        </h3>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore our extensive collection across all genres and decades.
        </p>
        <Link
          to="/"
          className="inline-block border-2 border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
        >
          Discover our catalogue
        </Link>
      </div>
    </section>
  );
};

export default DiscoverCatalogue;
