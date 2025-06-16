import React from "react";
import vid from "../../assets/vid.mp4";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={vid}
      >
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-normal text-white mb-6 tracking-tight">
          Jays Bar Pokhara
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 font-light">
          Europe's most extraordinary karaoke experience
        </p>
        <Link
          to={"/gallery"}
          className="bg-white cursor-pointer text-gray-900 px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
        >
          Jay's Gallery
        </Link>
      </div>
    </section>
  );
}
