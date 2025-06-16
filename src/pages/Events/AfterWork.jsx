import React, { useState } from "react";
import { Info } from "lucide-react";

const AfterWork = () => {
  const [showTooltipBooze, setShowTooltipBooze] = useState(false);
  const [showTooltipBites, setShowTooltipBites] = useState(false);

  return (
    <div className="font-inter bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] flex flex-col justify-center items-center text-white p-4 rounded-b-lg"
        style={{
          backgroundImage: `url('https://placehold.co/1200x500/000000/FFFFFF?text=Jasybar+Pokhara')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-b-lg"></div>
        <div className="relative z-10 text-center px-4">
          <p className="text-xs sm:text-sm md:text-base mb-2 font-light">
            Jasybar Pokhara {">"} Sunset Specials
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            Sunset Specials (Daily 5-7pm)
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 leading-relaxed">
          Unwind After Exploring with Jasybar's{" "}
          <br className="hidden sm:block" /> Lakeside Sunset Experience!
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-light">
          Watch the sunset over Fewa Lake while enjoying our special packages
          that combine refreshing drinks with authentic Nepali flavors and great
          music.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 sm:mb-12">
          Prices start from just Rs. 1200 per person.
        </p>

        <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md uppercase tracking-wider font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-300 shadow-md">
          Enquire
        </button>
      </div>

      {/* Pricing Table Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Drinks & Views Pack */}
          <div className="border border-gray-300 p-6 sm:p-8 rounded-lg shadow-sm bg-white flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
              Drinks & Views Pack
            </h3>
            <ul className="text-base sm:text-lg md:text-xl space-y-3 sm:space-y-4 mb-6 sm:mb-8 w-full">
              <li className="py-2 border-b border-gray-200">
                Lakeside seating with sunset views
              </li>
              <li
                className="relative py-2 border-b border-gray-200 cursor-pointer flex justify-center items-center gap-2"
                onMouseEnter={() => setShowTooltipBooze(true)}
                onMouseLeave={() => setShowTooltipBooze(false)}
                onClick={() => setShowTooltipBooze(!showTooltipBooze)}
              >
                3 local drinks
                <Info
                  size={18}
                  className="text-gray-500 hover:text-gray-700 min-w-[18px]"
                />
                {showTooltipBooze && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs sm:text-sm rounded-md shadow-lg whitespace-nowrap z-20 top-full">
                    Local beer, Raksi, or house cocktails
                  </div>
                )}
              </li>
              <li className="py-2 border-b border-gray-200">x</li>
            </ul>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-8">
              Rs. 1200 pp
            </p>
            <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md uppercase tracking-wider font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-300 shadow-md w-full max-w-xs">
              Enquire
            </button>
          </div>

          {/* Full Experience Pack */}
          <div className="border border-gray-300 p-6 sm:p-8 rounded-lg shadow-sm bg-white flex flex-col items-center text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
              Full Experience Pack
            </h3>
            <ul className="text-base sm:text-lg md:text-xl space-y-3 sm:space-y-4 mb-6 sm:mb-8 w-full">
              <li className="py-2 border-b border-gray-200">
                Best lakeside seating
              </li>
              <li
                className="relative py-2 border-b border-gray-200 cursor-pointer flex justify-center items-center gap-2"
                onMouseEnter={() => setShowTooltipBites(true)}
                onMouseLeave={() => setShowTooltipBites(false)}
                onClick={() => setShowTooltipBites(!showTooltipBites)}
              >
                3 premium drinks
                <Info
                  size={18}
                  className="text-gray-500 hover:text-gray-700 min-w-[18px]"
                />
                {showTooltipBites && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs sm:text-sm rounded-md shadow-lg whitespace-nowrap z-20 top-full">
                    Imported beer, premium cocktails, or wine
                  </div>
                )}
              </li>
              <li className="py-2 border-b border-gray-200">
                1 Nepali thali set +<br />
                momos or chatamari
              </li>
            </ul>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 sm:mb-8">
              Rs. 2000 pp
            </p>
            <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md uppercase tracking-wider font-semibold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-300 shadow-md w-full max-w-xs">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterWork;
