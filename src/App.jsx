import { useState, useEffect } from "react"; // Import useState and useEffect
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"; // Assuming you might use this later
import Venue from "./pages/Venue";
import RenderWhatsOn from "./pages/WhatisOn_Page";
import WhatsOnFormPreview from "./components/WhatsOn/PreviewForm";
import Groups from "./pages/Events/Groups";
import KidsFamily from "./pages/Events/KidsFamily";
import AfterWork from "./pages/Events/AfterWork";
import LadiesNight from "./pages/Events/LadiesNight";
import HenStagParties from "./pages/Events/HenStagParties";
import PrivateBooking from "./pages/Events/PrivateBooking";
import FoodDrink from "./pages/FoodDrinks/FoodDrinks";
import Parties from "./pages/Parties";
import GalleryPage from "./pages/Gallery/GalleryPage";
import AlbumForm from "./pages/Gallery/AlbumForm";
import BookingPage from "./pages/Booking";
import ContactUs from "./pages/Contactus";

export const API = "http://localhost:5000";
function App() {
  // Empty dependency array means this effect runs once on mount

  return (
    <>
      {/* Pass the 'scrolled' prop to the Navbar */}
      <Navbar />
      <div className="mt-14">
        {/* This div adds space below the fixed navbar */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/albumform" element={<AlbumForm />} />
          <Route path="/events/groups" element={<Groups />} />
          <Route path="/events/kids-family" element={<KidsFamily />} />
          <Route path="/events/afterwork" element={<AfterWork />} />
          <Route path="/events/ladiesnight" element={<LadiesNight />} />
          <Route path="/events/henstag" element={<HenStagParties />} />
          <Route path="/events/private-booking" element={<PrivateBooking />} />
          <Route path="/food-drinks" element={<FoodDrink />} />
          <Route path="/parties" element={<Parties />} />
          {/* <Route path="/whats-on" element={<RenderWhatsOn />} /> */}
          <Route path="/whats-on/:id" element={<RenderWhatsOn />} />
          <Route path="/whats-on/form" element={<WhatsOnFormPreview />} />
        </Routes>
      </div>
      {/* If you plan to use Footer, uncomment it */}
      <Footer />
    </>
  );
}

export default App;
