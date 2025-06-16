import React from "react";
import Images from "../components/Venue/Images";
import mg1 from ".././assets/highlight1.jpg";
import VenueHighlights from "../components/Venue/Highlights";
import { Features } from "tailwindcss";
import VenueFeatures from "../components/Venue/Features";
import MapwImages from "../components/HomePage/MapwImages";
const Venue = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-inter text-gray-800">
      {/* Top content section - now full width with horizontal padding */}
      <div className="pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
          JASYBAR POKHARA
        </h1>
        <p className="text-sm sm:text-base text-gray-700 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          Nestled in the vibrant Lakeside area of Pokhara, Jasybar is perfectly
          located between street 14 and 15. Our cozy establishment combines a
          lively bar atmosphere with delicious food and refreshing drinks, all
          while offering stunning views of Fewa Lake and the surrounding
          mountains.
        </p>
        <p className="text-sm sm:text-base text-gray-700 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're looking for a place to unwind after a day of adventure
          or want to experience Pokhara's nightlife, Jasybar welcomes you with
          great music and warm hospitality.
        </p>
      </div>

      {/* Full-width image section - removed max-w and mx-auto */}
      {/* Replaced local image import with placeholder for live environment compatibility */}
      <div className="my-10 rounded-none overflow-hidden shadow-sm border-t border-b border-gray-200">
        <img
          src={mg1} // Increased placeholder size
          alt="Jasybar Pokhara"
          className="w-full h-96 object-cover object-center" // Increased height to h-96
        />
      </div>

      {/* Bottom content section - now full width with horizontal padding */}
      <div className="pt-6 pb-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800">
          Experience the Spirit of Lakeside
        </h1>

        <p className="text-sm sm:text-base text-gray-700 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          Jasybar captures the essence of Pokhara's laid-back yet vibrant
          atmosphere. Our space features a perfect blend of local charm and
          modern comforts, with decor inspired by the natural beauty of Nepal.
        </p>
        <p className="text-sm sm:text-base text-gray-700 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Our venue in Lakeside can accommodate groups of various sizes, making
          it ideal for both intimate gatherings and larger celebrations.
        </p>
      </div>

      {/* Images component rendered within its own structure */}
      <Images />

      {/* VenueHighlights component rendered within its own structure */}
      <VenueHighlights />
      <VenueFeatures />
      <MapwImages />
    </div>
  );
};

export default Venue;
