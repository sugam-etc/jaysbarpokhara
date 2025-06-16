import React from "react";
import { Sparkles, Wine, Music, Heart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const LadiesNight = () => {
  // Main event data
  const events = [
    {
      id: 1,
      title: "Ladies Night",
      description:
        "Every Thursday night - enjoy special discounts, great music and stunning Fewa Lake views with your girlfriends.",
      schedule: "Every Thursday, 6pm-10pm",
      cta: "JOIN US",
      image: {
        desktop:
          "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        mobile:
          "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      },
    },
  ];

  // Gallery images
  const gallery = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551218378-a5b5e5b9f8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Friends enjoying lakeside views",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551836222-d5b88e9660c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Signature cocktails",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Live music by the lake",
    },
  ];

  // Features array
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Lakeside Vibes",
      description:
        "Beautiful Fewa Lake views create the perfect backdrop for your girls' night out.",
    },
    {
      icon: <Wine className="w-6 h-6" />,
      title: "Happy Hour Specials",
      description:
        "50% off selected cocktails and wines for ladies all night long.",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Live Acoustic Music",
      description:
        "Relax to live acoustic performances while enjoying the lakeside breeze.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Special Treats",
      description: "Complimentary snacks and surprises throughout the evening.",
    },
  ];

  // Testimonials array
  const testimonials = [
    {
      id: 1,
      quote:
        "The perfect girls' night with amazing lake views! The cocktails were delicious and the atmosphere was so relaxing. We'll definitely be back next Thursday!",
      author: "Priya & Friends",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      {events.map((event) => (
        <div
          key={event.id}
          className="relative h-[70vh] max-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <picture>
            <source media="(max-width: 640px)" srcSet={event.image.mobile} />
            <source media="(min-width: 641px)" srcSet={event.image.desktop} />
            <img
              src={event.image.desktop}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </picture>
          <div className="relative z-20 text-center px-6 py-12 text-white">
            <p className="tracking-[0.3em] text-sm mb-4 opacity-90">
              JASYBAR POKHARA
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6">
              {event.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">
              {event.description}
            </p>
            <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-gray-100 transition-colors duration-300 border border-white">
              {event.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Intro Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-6 md:mb-8">
          Ladies Night with Fewa Lake Views
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12">
          Gather your friends for a relaxing evening by the lake with special
          drinks, delicious food, and great music. Our Ladies Night is the
          perfect way to unwind and enjoy Pokhara's beautiful scenery with your
          favorite people.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to={"/"}
            className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-gray-800 transition-colors duration-300 border border-black"
          >
            ENQUIRE NOW
          </Link>
          <Link
            to={"/gallery"}
            className="border-2 border-black px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-gray-50 transition-colors duration-300"
          >
            SEE GALLERY
          </Link>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {gallery.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Event Schedule */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Calendar className="w-6 h-6 text-gray-600" />
          <p className="text-lg sm:text-xl font-medium text-center">
            {events[0].schedule}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-12 md:py-16 lg:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-center mb-12 md:mb-16">
            What Makes Our Ladies Night Special
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 hover:border-black transition-colors duration-300 text-center"
              >
                <div className="text-gray-900 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24"
        >
          <div className="border-t border-b border-gray-200 py-8 md:py-12 relative">
            <blockquote className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl italic mb-6">
                "{testimonial.quote}"
              </p>
              <footer className="font-medium">- {testimonial.author}</footer>
            </blockquote>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-6">
            Ready for a Relaxing Evening by the Lake?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join us every Thursday for Ladies Night specials!
          </p>
          <Link
            to={"/bookingpage"}
            className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-none font-medium hover:bg-gray-100 transition-colors duration-300 border border-white"
          >
            RESERVE YOUR TABLE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LadiesNight;
