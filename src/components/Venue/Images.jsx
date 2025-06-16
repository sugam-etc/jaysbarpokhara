import React, { useEffect, useState } from "react";
import img1 from "../../assets/highlight1.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const getPlaceholderImage = (width, height, text) => {
  return `https://placehold.co/${width}x${height}/252525/FFFFFF?text=${text.replace(
    /\s/g,
    "+"
  )}`;
};

// Original venues data, updated with placeholder image URLs for demonstration.
// Each venue now has multiple unique placeholder images.
const venues = [
  {
    name: "Karaoke Room",
    images: [
      getPlaceholderImage(600, 350, "Karaoke 1"), // Further adjusted image height
      getPlaceholderImage(600, 350, "Karaoke 2"),
      getPlaceholderImage(600, 350, "Karaoke 3"),
    ],
    capacity: "4 people",
  },
  {
    name: "Dine",
    images: [
      getPlaceholderImage(600, 350, "Dine Area 1"),
      getPlaceholderImage(600, 350, "Dine Area 2"),
    ],
    capacity: "4 people",
  },
  {
    name: "Cocktail Bar",
    images: [
      getPlaceholderImage(600, 350, "Cocktail Bar 1"),
      getPlaceholderImage(600, 350, "Cocktail Bar 2"),
      getPlaceholderImage(600, 350, "Cocktail Bar 3"),
      getPlaceholderImage(600, 350, "Cocktail Bar 4"),
    ],
    capacity: "4 people",
  },
  {
    name: "Performance Zone",
    images: [
      getPlaceholderImage(600, 350, "Performance Zone 1"),
      getPlaceholderImage(600, 350, "Performance Zone 2"),
    ],
    capacity: "4 people",
  },
  {
    name: "XYZ Zone",
    images: [getPlaceholderImage(600, 350, "XYZ Zone 1")],
    capacity: "4 people",
  },
];

/**
 * Images component displays venue information including a list of venues
 * and a dynamic image carousel for the selected venue.
 * It features responsive design, attractive styling, and navigation buttons
 * for image traversal.
 */
const Images = () => {
  // State to manage the currently selected venue (by its name).
  // Defaults to the first venue's name if available, otherwise null.
  const [selectedVenueName, setSelectedVenueName] = useState(
    venues[0]?.name || null
  );
  // State to manage the current image index within the selected venue's images array.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the currently selected venue object from the `venues` array based on `selectedVenueName`.
  const selectedVenue = venues.find(
    (venue) => venue.name === selectedVenueName
  );

  // Effect to reset the image index to 0 whenever a new venue is selected.
  useEffect(() => {
    setCurrentImageIndex(0); // Resets the carousel to the first image of the new venue.
  }, [selectedVenueName]);

  /**
   * Handles the click event on a venue selection button.
   * Updates `selectedVenueName` state.
   * @param {string} venueName - The name of the venue to be selected.
   */
  const handleVenueClick = (venueName) => {
    setSelectedVenueName(venueName);
  };

  /**
   * Handles navigation to the previous image in the carousel.
   * It calculates the new index, wrapping around to the end of the array if at the beginning.
   */
  const handlePrevImage = () => {
    if (selectedVenue && selectedVenue.images.length > 0) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedVenue.images.length) %
          selectedVenue.images.length
      );
    }
  };

  /**
   * Handles navigation to the next image in the carousel.
   * It calculates the new index, wrapping around to the beginning of the array if at the end.
   */
  const handleNextImage = () => {
    if (selectedVenue && selectedVenue.images.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedVenue.images.length
      );
    }
  };

  // Handler for the capacity buttons (currently illustrative)
  const handleCapacityClick = (capacity) => {
    // In a full application, this might trigger filtering or a different view.
    // For now, it just logs a message to show interactivity.
    console.log(
      `Capacity button clicked: ${capacity}. This currently does not filter images.`
    );
    // You could add state here if you wanted to visually highlight the selected capacity button.
  };

  return (
    // Changed overall background to a light, off-white color (matching image)
    <div className="min-h-screen bg-neutral-50 font-inter text-gray-800 p-4 sm:p-6 lg:p-8">
      {" "}
      {/* Increased padding for spacing */}
      <div className="max-w-5xl mx-auto py-8">
        {" "}
        {/* Adjusted max-width and vertical padding */}
        {/* Main title for the component - dark text, simple */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800">
          Our Venues
        </h2>
        {/* Descriptive text from the image */}
        <p className="text-sm sm:text-base text-gray-700 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          Inspired by London's original bonne vivante, Nell Gwyn, each of our
          private karaoke rooms immerses you in a chic décor imbued with
          18th-century extravagance. Explore BAM Victoria below.
        </p>
        <p className="text-sm sm:text-base text-gray-700 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Our venue in Victoria has capacity for groups of up to 450 people.
        </p>
        {/* Venue/Capacity Selection Buttons - styled to match the image */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {" "}
          {/* Adjusted gap and margin */}
          {/* Main Venue Name Buttons */}
          {venues.map((item) => (
            <button
              key={item.name}
              onClick={() => handleVenueClick(item.name)}
              className={`
                px-4 py-2 rounded-sm text-sm font-medium transition-colors duration-200
                border border-gray-400 text-gray-800 whitespace-nowrap
                ${
                  selectedVenueName === item.name
                    ? "bg-gray-800 text-white" // Selected state: solid dark background, white text
                    : "bg-white hover:bg-gray-100" // Default state: white background, subtle hover
                }
              `}
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* Selected Venue Image Display and Details */}
        {selectedVenue ? (
          <div className="bg-white w-full  shadow-md overflow-hidden border border-gray-200">
            {" "}
            {/* White background, subtle shadow, light border */}
            <div className="relative">
              {/* Current Image */}
              {selectedVenue.images && selectedVenue.images.length > 0 ? (
                <>
                  <img
                    src={selectedVenue.images[currentImageIndex]}
                    alt={`${selectedVenue.name} image ${currentImageIndex + 1}`}
                    className="w-full h-64 sm:h-96 object-cover object-center transition-opacity duration-500 ease-in-out"
                    style={{ opacity: 1 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = getPlaceholderImage(
                        600,
                        350,
                        "Image Not Available"
                      );
                    }}
                  />

                  {/* Navigation Buttons (Prev/Next) - styled to match the image's light arrow */}
                  {selectedVenue.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-1 p-1.5 rounded-full text-gray-800 hover:bg-opacity-60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 z-10"
                        aria-label="Previous image"
                      >
                        <FaChevronLeft size={20} />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-1 p-1.5 rounded-full text-gray-800 hover:bg-opacity-60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 z-10"
                        aria-label="Next image"
                      >
                        <FaChevronRight size={20} />
                      </button>
                    </>
                  )}
                  {/* Image counter display - removed for a cleaner look as per image */}
                </>
              ) : (
                <div className="w-full h-56 sm:h-72 flex items-center justify-center bg-gray-200 text-gray-600 text-sm rounded-b-md">
                  No images available for this venue.
                </div>
              )}
            </div>
            {/* Venue Name and Capacity Details - styled to match image */}
            <div className="p-4 text-center">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                {selectedVenue.name}
              </h1>
              <h3 className="text-sm sm:text-base text-gray-600 font-normal">
                Capacity:{" "}
                <span className="font-semibold">{selectedVenue.capacity}</span>
              </h3>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-base mt-6">
            Please select a venue to view its details.
          </p>
        )}
      </div>
    </div>
  );
};

export default Images;
