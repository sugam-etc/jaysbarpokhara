import React from "react";
import { Link } from "react-router-dom";

const FoodDrink = () => {
  return (
    <div className="font-inter bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96 md:h-[500px] flex flex-col justify-center items-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          {/* Breadcrumb */}

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-4">
            Food & Drink
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed mb-8 font-light text-gray-700">
            Experience the flavors of Nepal and beyond at Jasybar. Enjoy our
            delicious menu featuring local specialties and international
            favorites, paired with refreshing drinks and cocktails.
          </p>
          <Link
            to={"/bookingpage"}
            className="bg-black text-white px-8 py-3 rounded-none uppercase tracking-wider text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Book a Table
          </Link>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32 px-4 pb-20">
        {/* Happy Hour Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Happy Hour
            </h2>
            <p className="text-gray-700 font-light mb-4 leading-relaxed">
              Join us every evening from 5-7pm for our special Happy Hour with
              discounted drinks including local beers, cocktails, and spirits.
              Perfect for watching the sunset over Fewa Lake.
            </p>
            <p className="text-gray-700 font-light mb-6 leading-relaxed">
              Try our happy hour snack combo - momos with a drink for just Rs.
              800!*
            </p>
            <p className="text-xs text-gray-500 mb-6 italic">
              *Selected drinks and snacks available during happy hour.
            </p>
            <button className="border border-black text-black px-6 py-2.5 rounded-none uppercase tracking-wider text-sm font-medium hover:bg-gray-50 transition-colors duration-300">
              Book a Table
            </button>
          </div>
          <div className="order-1 md:order-2 aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Happy Hour Image</span>
          </div>
        </section>

        {/* Signature Dishes Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Signature Dishes Image</span>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Local flavors & signature cocktails
            </h2>
            <p className="text-gray-700 font-light mb-4 leading-relaxed">
              Our menu celebrates Nepali cuisine with dishes like thukpa,
              sekuwa, and authentic Newari platters. We also offer international
              favorites for travelers.
            </p>
            <p className="text-gray-700 font-light mb-6 leading-relaxed">
              Don't miss our signature Himalayan Mule cocktail or our
              locally-inspired Raksi specials. We have options for every taste
              and dietary preference.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="border border-black text-black px-6 py-2.5 rounded-none uppercase tracking-wider text-sm font-medium hover:bg-gray-50 transition-colors duration-300">
                Food Menu
              </button>
              <button className="border border-black text-black px-6 py-2.5 rounded-none uppercase tracking-wider text-sm font-medium hover:bg-gray-50 transition-colors duration-300">
                Drinks Menu
              </button>
            </div>
          </div>
        </section>

        {/* Group Packages Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              For Groups
            </h2>
            <p className="text-gray-700 font-light mb-4 leading-relaxed">
              Planning a gathering with friends or a special celebration?
              Jasybar offers special group packages perfect for parties and
              events.
            </p>
            <p className="text-gray-700 font-light mb-6 leading-relaxed">
              Our group menus feature sharing platters of Nepali specialties and
              drink pitchers, with options to customize for your group's
              preferences.
            </p>
            <button className="border border-black text-black px-6 py-2.5 rounded-none uppercase tracking-wider text-sm font-medium hover:bg-gray-50 transition-colors duration-300">
              View Packages
            </button>
          </div>
          <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Group Dining Image</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodDrink;
