const getPlaceholderImage = (width, height, text) => {
  return `https://placehold.co/${width}x${height}/F0F0F0/4B5563?text=${text.replace(
    /\s/g,
    "+"
  )}`;
};

// Data for the venue highlight sections
const highlights = [
  {
    image: getPlaceholderImage(400, 250, "BAM BAM Bar"),
    title: "BAM BAM Bar",
    description:
      "Set the vibe for your karaoke night in London with arrival drinks at our whimsical ground-floor cocktail bar, complete with its own outdoor terrace space. Head to the glamorous BAM BAM Bar on the lower ground floor for food, drink and live music to keep the party going, before or after your karaoke slot.",
  },
  {
    image: getPlaceholderImage(400, 250, "Summer Terrace"),
    title: "The summer terrace",
    description:
      "Pre or post-karaoke, enjoy food and drinks on our lush outside summer terrace. It's a charming spot to relax and have a chat before you head to your private karaoke room. And it's also the perfect setting for continuing your afternoon or night with your friends, family or colleagues after your karaoke booking.",
  },
  {
    image: getPlaceholderImage(400, 250, "Live Music & Events"),
    title: "Live music and events",
    description:
      "Come and paint the town rouge at one of our many BAM live events. Each week we have different entertainment options lined up for you to enjoy, including singers, bands, DJs and themed parties, so there's always a fun night out in Victoria to be had. At BAM Karaoke London, no 2 nights are the same.",
  },
];

/**
 * VenueHighlights component displays key features of the venue in a three-column layout.
 * It is designed to be neat, clean, and responsive, matching the provided image.
 */
const VenueHighlights = () => {
  return (
    // Main container with light background and consistent text styling
    <div className="bg-neutral-50 w-full font-inter text-gray-800 py-12 px-4 sm:px-6 lg:px-4">
      {/* Removed max-w-6xl and mx-auto to allow it to span full width. */}
      {/* Retained horizontal padding px-4 sm:px-6 lg:px-8 from the parent div for consistent edge spacing. */}
      <div>
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-12 text-gray-800">
          Venue Highlights
        </h2>

        {/* Three-column layout for highlights */}
        {/* Minimized the gap between items using gap-6 md:gap-8 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col">
              {" "}
              {/* Removed items-center and text-center */}
              {/* Highlight Image */}
              <div className="mb-4 shadow-sm border border-gray-200">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-48 sm:h-56 object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = getPlaceholderImage(400, 250, "Image Error");
                  }}
                />
              </div>
              {/* Highlight Title - now left-aligned */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 text-left">
                {highlight.title}
              </h3>
              {/* Highlight Description - now left-aligned */}
              <p className="text-sm text-gray-700 leading-relaxed mb-6 text-left">
                {highlight.description}
              </p>
              {/* "WHAT'S ON" button only for the last column - now left-aligned */}
              {index === highlights.length - 1 && (
                <button className="mt-auto px-6 py-2 border border-gray-500 text-gray-800 text-sm font-medium hover:bg-gray-100 transition-colors duration-200 self-start">
                  {" "}
                  {/* Added self-start for left alignment */}
                  WHAT'S ON
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueHighlights;
