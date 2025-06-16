import React from "react";
import { ChevronRight, Star, Music, Utensils, MapPin } from "lucide-react";

const Parties = () => {
  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center z-0 opacity-70"></div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center text-sm text-gray-300 mb-6">
            <span className="hover:text-white transition-colors">
              Jays Bar Pokhara
            </span>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-white font-medium">Christmas Parties</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            Christmas Parties <span className="font-bold">2025</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
            The ultimate festive celebration at Pokhara's premier karaoke venue
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Party
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium uppercase tracking-wider hover:bg-white/10 transition-all duration-300">
              View Packages
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Host the Ultimate <span className="font-bold">Christmas Party</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Jays Bar Pokhara invites you to experience Pokhara's most
              unforgettable Christmas celebration. As Pokhara's best karaoke
              venue, we offer bespoke event packages perfect for socials, team
              outings, or corporate events.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">22</div>
                <div className="text-gray-600">Private Rooms</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">450+</div>
                <div className="text-gray-600">Guest Capacity</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">2</div>
                <div className="text-gray-600">Chic Bars</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-black mb-2">10k</div>
                <div className="text-gray-600">Sq Ft Venue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="BAM Karaoke Venue"
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="text-4xl font-light mb-8">
                Discover Our <span className="font-bold">Unique Venue</span>
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Located on Main Street, Lakeside, our 10,000 sq ft venue spans
                two floors of entertainment paradise, designed to make your
                Christmas party unforgettable.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <Star
                    className="text-black mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    <strong>22 Unique Private Karaoke rooms</strong> - Each
                    individually designed for groups of 4 to 30
                  </span>
                </li>
                <li className="flex items-start">
                  <Music
                    className="text-black mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    <strong>Two Stylish Bars</strong> - Including the stunning
                    BAM BAM Bar with live music stage
                  </span>
                </li>
                <li className="flex items-start">
                  <Utensils
                    className="text-black mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    <strong>Gourmet Dining</strong> - Curated menu by renowned
                    chef Sabrina Gidda
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin
                    className="text-black mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-700">
                    <strong>Scenic Outdoor Terrace</strong> - Perfect for
                    festive mingling
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium uppercase tracking-wider transition-colors duration-300 shadow-md">
                  Enquire Now
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium uppercase tracking-wider hover:bg-gray-50 transition-colors duration-300">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-4">
            Why Choose BAM for Your{" "}
            <span className="font-bold">Christmas Party?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Everything you need for an unforgettable festive celebration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Unmatched Entertainment
              </h3>
              <p className="text-gray-600">
                Private karaoke rooms, live music stages, and DJ booths ensure
                non-stop festive fun for all your guests.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Gourmet Festive Menu
              </h3>
              <p className="text-gray-600">
                Enjoy a specially curated Christmas menu featuring modern
                European cuisine with festive twists.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Prime Central Location
              </h3>
              <p className="text-gray-600">
                Easily accessible from anywhere in London with excellent
                transport links via tube, bus, and train.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-4 text-center">
            Festive <span className="font-bold">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 text-center">
            See our venue transformed for Christmas celebrations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <img
                  src={`https://source.unsplash.com/random/600x400/?christmas,party,${item}`}
                  alt={`Gallery ${item}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium uppercase tracking-wider hover:bg-gray-50 transition-colors duration-300 shadow-sm">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Ready to Book Your{" "}
            <span className="font-bold">Christmas Party?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-300">
            Limited availability for December 2025 - secure your date today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors duration-300 shadow-lg transform hover:scale-105">
              Enquire Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-colors duration-300">
              Call Us: 020 1234 5678
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parties;
