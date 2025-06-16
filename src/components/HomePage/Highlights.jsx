import { Link } from "react-router-dom";
import highlights1 from "../../assets/highlight1.jpg";
import highlights2 from "../../assets/highlight1.jpg";

const Highlights = () => {
  const sections = [
    {
      title: "Private Karaoke Rooms",
      description:
        "Discover our uniquely designed private karaoke rooms, each with its own theme and atmosphere. Perfect for groups of all sizes, our soundproof rooms feature state-of-the-art audio systems, mood lighting, and in-room recording capabilities to capture your performance.",
      cta1: "View Room Options",
      cta2: "Book Your Room",
      image: highlights1,
      features: [
        "Capacity from 2 to 40 people",
        "High-quality microphones and sound systems",
        "Customizable lighting effects",
        "In-room recording available",
      ],
    },
    {
      title: "Gourmet Dining & Craft Cocktails",
      description:
        "The BAM BAM Bar offers an exceptional culinary experience curated by our executive chef. Enjoy signature small plates, Asian-inspired cuisine, and creative cocktails designed to complement your karaoke experience. Our mixologists craft unique beverages using premium spirits and fresh ingredients.",
      cta1: "Explore Our Menu",
      cta2: "Reserve a Table",
      image: highlights2,
      features: [
        "Seasonal small plates & sharing platters",
        "Craft cocktails & premium spirits",
        "Bottle service available",
        "Dietary accommodations",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-gray-900 mb-4">
            The Ultimate Karaoke Experience
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            Europe's largest karaoke venue featuring 22 private rooms,
            exceptional dining, and unforgettable entertainment
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 mb-20 last:mb-0`}
          >
            <div className="w-full md:w-1/2 aspect-[5/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src={section.image}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-serif font-normal text-gray-900 mb-6">
                {section.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {section.description}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-900 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="bg-gray-900 text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors duration-300 text-center"
                >
                  {section.cta1}
                </Link>
                <Link
                  to="/"
                  className="border border-gray-900 text-gray-900 px-6 py-3 rounded-sm font-medium hover:bg-gray-50 transition-colors duration-300 text-center"
                >
                  {section.cta2}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
