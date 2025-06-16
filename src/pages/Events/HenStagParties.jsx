import React from "react";
import {
  GlassWater,
  Mic2,
  Cake,
  Gift,
  Calendar,
  Clock,
  Ticket,
} from "lucide-react";

const HenStagParties = () => {
  // Event data array
  const events = [
    {
      id: 1,
      title: "Lakeside Celebration Package",
      description:
        "Celebrate your special occasion with our ultimate lakeside party package. Enjoy a private seating area with stunning Fewa Lake views, delicious Nepali cuisine, refreshing drinks, and great music. Perfect for birthdays, anniversaries, or any group celebration.",
      day: "Daily",
      time: "11:00 – 22:00",
      price: "Rs. 2500 per person",
      specialOffer: "Group discounts available (10+ people)",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "BOOK NOW",
    },
  ];

  const features = [
    {
      icon: <GlassWater className="w-6 h-6" />,
      title: "Signature Cocktails",
      description: "Try our Himalayan Mule and other local-inspired drinks",
    },
    {
      icon: <Mic2 className="w-6 h-6" />,
      title: "Live Music",
      description: "Weekend acoustic performances with lake views",
    },
    {
      icon: <Cake className="w-6 h-6" />,
      title: "Custom Cakes",
      description: "Arrange a special cake for your celebration",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Special Decorations",
      description: "We'll help make your event memorable",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] max-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Group Parties at Jasybar"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-20 text-center px-6 py-12 text-white">
          <p className="tracking-[0.3em] text-sm mb-4 opacity-90">
            JASYBAR POKHARA
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">
            Hen Stag Parties
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-light">
            Celebrate special occasions with lakeside views, great food and
            unforgettable memories
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-gray-200 transition-colors duration-300 border border-white">
            BOOK YOUR PARTY
          </button>
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col lg:flex-row gap-12 items-center mb-24 last:mb-0"
          >
            <div className="lg:w-1/2 w-full">
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">{event.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">{event.time}</span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
                {event.title}
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                {event.description}
              </p>
              <div className="border-t border-b border-gray-200 py-4 mb-8">
                <div className="flex items-center gap-4">
                  <Ticket className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-medium">{event.price}</p>
                    <p className="text-gray-600">{event.specialOffer}</p>
                  </div>
                </div>
              </div>
              <button className="bg-black text-white px-8 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors duration-300 border border-black">
                {event.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-16">
            Your Perfect Group Celebration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 text-center border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <div className="text-gray-900 mb-4 mx-auto w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12">
          Celebration Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden aspect-square bg-gray-100"
            >
              <img
                src={img}
                alt={`Celebration moment ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            Ready to Plan Your Group Celebration?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Limited availability for group bookings - reserve your spot today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-gray-200 transition-colors duration-300 border border-white">
              ENQUIRE NOW
            </button>
            <button className="border border-white px-8 py-3 rounded-none font-medium hover:bg-white/10 transition-colors duration-300">
              SEE PACKAGES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HenStagParties;
