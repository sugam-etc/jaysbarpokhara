import React from "react";
import HeroSection from "../components/HomePage/Hero";
import Highlights from "../components/HomePage/Highlights";
import DiscoverCatalogue from "../components/HomePage/DiscoverCatalogue";
import WhatsOn from "../components/HomePage/WhatsOn";
import MapwImages from "../components/HomePage/MapwImages";
import PrivateRooms from "../components/HomePage/PrivateRooms";
import FAQ from "../components/HomePage/FAQ";

const Home = () => {
  return (
    <div className="overflow-x-hidden font-sans antialiased">
      <HeroSection />
      <Highlights />
      <DiscoverCatalogue />
      <WhatsOn />
      <MapwImages />
      <PrivateRooms />
      <FAQ />
    </div>
  );
};

export default Home;
