import React from "react";
import { Link } from "react-router-dom";
import highlight1 from "../../assets/highlight1.jpg";

const events = Array(4).fill({
  title: "Voulez-Vous Karaoke Brunch",
  description:
    "Enjoy our themed brunches with bottomless food and 2 hours of private karaoke with live entertainment.",
  link: "/",
  buttonName: "Find Out More",
  image: highlight1,
});

const WhatsOn = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-gray-900 mb-4">
            What's on at BAM
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif font-normal text-gray-900 mb-3">
                  {event.title}
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <Link
                  to={event.link}
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center"
                >
                  {event.buttonName}
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsOn;
