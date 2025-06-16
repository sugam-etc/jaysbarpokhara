import {
  Mic,
  Utensils,
  Martini,
  Smartphone,
  Lock,
  Footprints,
} from "lucide-react"; // Importing relevant icons

const features = [
  {
    icon: <Mic size={36} className="text-gray-800" />,
    description: "22 unique private karaoke rooms",
  },
  {
    icon: <Utensils size={36} className="text-gray-800" />,
    description: "Food menus",
  },
  {
    icon: <Martini size={36} className="text-gray-800" />,
    description: "2 cocktail bars",
  },
  {
    icon: <Smartphone size={36} className="text-gray-800" />,
    description: "Photo booths",
  },
  {
    icon: <Lock size={36} className="text-gray-800" />,
    description: "Private Hire",
  },
  {
    icon: <Footprints size={36} className="text-gray-800" />,
    description: "Capacity: 450",
  },
];

/**
 * VenueFeatures component displays a grid of venue highlights with icons and descriptions.
 * Designed to be clean, minimalistic, and responsive, matching the provided image.
 */
const VenueFeatures = () => {
  return (
    <div className="bg-neutral-50 font-inter py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main grid for features */}
        {/* Adjusted gap and grid columns for responsiveness and clean spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3">{feature.icon}</div>
              <p className="text-sm text-gray-800 leading-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueFeatures;
