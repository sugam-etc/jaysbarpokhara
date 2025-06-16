import React from "react";
import {
  Calendar,
  Users,
  Music,
  Utensils,
  Download,
  ChevronRight,
} from "lucide-react";

const PrivateBooking = () => {
  // Booking options data with images
  const bookingOptions = [
    {
      id: 1,
      title: "Private Venue Hire",
      description: [
        "Host your special event at Jasybar with our exclusive private hire options.",
        "From intimate gatherings to larger celebrations, our lakeside venue offers the perfect setting for your occasion.",
        "Capacity for groups up to 100 people with customizable seating arrangements.",
      ],
      image: {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Lakeside event space at Jasybar",
      },
      highlights: [
        "Exclusive use of our lakeside terrace",
        "Custom Nepali and international menus",
        "Sound system included",
        "Dedicated event staff",
      ],
      cta: "Request Proposal",
      secondaryAction: {
        text: "View Floor Plans",
        icon: <Download className="w-4 h-4 ml-2" />,
      },
    },
    {
      id: 2,
      title: "Special Celebrations",
      description: [
        "Make your birthday, anniversary or special occasion unforgettable with our celebration packages.",
        "Enjoy beautiful Fewa Lake views while celebrating with your loved ones.",
        "Flexible options for groups of all sizes with customized decorations.",
      ],
      image: {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Celebration at Jasybar Pokhara",
      },
      highlights: [
        "Custom decoration packages",
        "Signature cocktail options",
        "Live acoustic music available",
        "Special cake arrangements",
      ],
      cta: "Explore Packages",
      secondaryAction: {
        text: "Sample Menu",
        icon: <Download className="w-4 h-4 ml-2" />,
      },
    },
  ];

  // Features with icons
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Flexible Spaces",
      description: "Multiple setup options for 10-100 guests",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Local Cuisine",
      description: "Authentic Nepali and international dishes",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Entertainment",
      description: "Sound system and live music options",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Year-Round",
      description: "Perfect for any special occasion",
    },
  ];

  // Gallery images
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Private dining with lake view",
    },
    {
      url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Group celebration at Jasybar",
    },
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Lakeside cocktail reception",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
        <img
          src={bookingOptions[0].image.url}
          alt={bookingOptions[0].image.alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-20 text-center px-6 py-12 text-white max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal mb-6 leading-tight">
            Private Events by the Lake
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Stunning Fewa Lake views, delicious food and memorable experiences
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-all duration-300 flex items-center mx-auto">
            Enquire Now <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-4">
              Event Experiences
            </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
          </div>

          {bookingOptions.map((option) => (
            <div
              key={option.id}
              className={`flex flex-col lg:flex-row gap-12 mb-24 last:mb-0 ${
                option.id % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden aspect-[5/3] bg-gray-100 shadow-lg">
                  <img
                    src={option.image.url}
                    alt={option.image.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal mb-6">
                  {option.title}
                </h3>
                <div className="space-y-4 mb-6 text-gray-700">
                  {option.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {option.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-900 font-medium">✓</span>
                      <span className="ml-2">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-all duration-300 flex-1 sm:flex-none">
                    {option.cta}
                  </button>
                  {option.secondaryAction && (
                    <button className="border border-gray-900 px-6 py-3 rounded-sm font-medium hover:bg-gray-50 transition-all duration-300 flex items-center justify-center flex-1 sm:flex-none">
                      {option.secondaryAction.text}
                      {option.secondaryAction.icon}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-4">
              Why Choose Jasybar
            </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 text-center border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-sm"
              >
                <div className="text-gray-900 mb-4 flex justify-center">
                  <div className="bg-gray-50 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-4">
              Our Lakeside Venue
            </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-square bg-gray-100"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-6">
            Plan Your Special Event
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Our team will create a customized experience for your celebration
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-all duration-300">
              Get in Touch
            </button>
            <button className="border border-white px-8 py-3 rounded-sm font-medium hover:bg-white/10 transition-all duration-300">
              View Pricing Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateBooking;
