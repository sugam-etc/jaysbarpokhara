import React, { useState, useRef, useEffect } from "react";

const Groups = () => {
  const [showDetails, setShowDetails] = useState({
    packageId: null,
    type: null, // 'plates' or 'drinks'
  });
  const detailsRef = useRef(null);
  const infoIconRef = useRef(null);

  const packages = [
    {
      name: "Lakeside Starter",
      plates: "1 starter plate",
      platesDetails: ["Choose any starter from our menu"],
      drinks: "2 drinks",
      drinksDetails: ["Choose any 2 drinks from our standard menu"],
      price: "Rs. 1200 pp",
      karaoke: "1 hour of private karaoke",
      id: "lakeside-starter",
      additionalPerks: [],
    },
    {
      name: "Fewa Feast",
      plates: "2 starter plates + 1 main",
      platesDetails: [
        "Momo Platter (veg or non-veg)",
        "Chicken Sekuwa",
        "Newari Platter",
        "Vegetable Pakoras",
        "Paneer Tikka",
        "French Fries",
        "Garlic Bread",
        "Chicken Wings",
        "Fish Finger",
        "Spring Rolls",
        "Salad Platter",
      ],
      drinks: "3 drinks",
      drinksDetails: ["Choose any 3 drinks from our premium menu"],
      price: "Rs. 1800 pp",
      karaoke: "2 hours of private karaoke",
      id: "fewa-feast",
      additionalPerks: [],
    },
    {
      name: "Himalayan Delight",
      plates: "3 starter plates + 1 main",
      platesDetails: ["Choose any 3 starters and 1 main from our menu"],
      drinks: "Unlimited drinks for 1 hour",
      drinksDetails: ["Includes local beers, wines, and soft drinks"],
      price: "Rs. 2500 pp",
      karaoke: "2 hours of private karaoke",
      id: "himalayan-delight",
      additionalPerks: ["Complimentary welcome drink"],
    },
    {
      name: "Annapurna Special",
      plates: "Full course meal",
      platesDetails: ["3 starters, 1 main, 1 dessert from our premium menu"],
      drinks: "Unlimited drinks for 2 hours",
      drinksDetails: ["Includes premium cocktails, spirits, and wine"],
      price: "Rs. 3500 pp",
      karaoke: "3 hours of private karaoke",
      id: "annapurna-special",
      additionalPerks: [
        "Welcome champagne",
        "Unlimited snacks",
        "Lakeside seating priority",
      ],
    },
  ];

  const InfoIcon = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-info ml-1 cursor-pointer hover:opacity-70 transition-opacity"
      onClick={onClick}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );

  const handleShowDetails = (packageId, type) => {
    setShowDetails({
      packageId,
      type,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target) &&
        infoIconRef.current &&
        !infoIconRef.current.contains(event.target)
      ) {
        setShowDetails({ packageId: null, type: null });
      }
    };

    if (showDetails.packageId) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDetails.packageId]);

  return (
    <div className="font-sans min-h-screen bg-white text-black">
      {/* Header Section */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Group Packages at Jasybar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            Group Packages
          </h1>
        </div>
      </div>

      {/* Introductory Text Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 text-center max-w-4xl">
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Planning a group gathering at Jasybar? Our pre-order packages make it
          easy to enjoy delicious Nepali cuisine, refreshing drinks, and karaoke
          by the beautiful Fewa Lake. Simply choose your package and we'll take
          care of the rest - just show up and enjoy!
        </p>
        <p className="font-medium mb-6 md:mb-8 text-lg">
          Packages available for groups of 6-50 people.
        </p>
        <p className="text-sm md:text-base">
          For larger groups or special requests, contact us at{" "}
          <a href="mailto:events@jasybarpokhara.com" className="underline">
            events@jasybarpokhara.com
          </a>
          .
        </p>
      </div>

      {/* Packages Section */}
      <div className="container mx-auto px-4 pb-12 max-w-7xl">
        {/* Mobile view - Cards */}
        <div className="md:hidden space-y-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-center mb-4">
                {pkg.name}
              </h2>

              <div className="space-y-4">
                {/* Plates */}
                <div className="flex items-start">
                  <div className="w-6 h-6 mr-3 mt-0.5">🍽️</div>
                  <div className="flex-1">
                    <p className="font-medium">Food</p>
                    <div className="flex items-center">
                      <p>{pkg.plates}</p>
                      <span ref={infoIconRef}>
                        <InfoIcon
                          onClick={() => handleShowDetails(pkg.id, "plates")}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Drinks */}
                <div className="flex items-start">
                  <div className="w-6 h-6 mr-3 mt-0.5">🍷</div>
                  <div className="flex-1">
                    <p className="font-medium">Drinks</p>
                    <div className="flex items-center">
                      <p>{pkg.drinks}</p>
                      <span ref={infoIconRef}>
                        <InfoIcon
                          onClick={() => handleShowDetails(pkg.id, "drinks")}
                        />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Perks */}
                <div className="flex items-start">
                  <div className="w-6 h-6 mr-3 mt-0.5">✨</div>
                  <div className="flex-1">
                    <p className="font-medium">Special Perks</p>
                    {pkg.additionalPerks.length > 0 ? (
                      pkg.additionalPerks.map((perk, index) => (
                        <p key={index} className="text-sm mb-1">
                          {perk}
                        </p>
                      ))
                    ) : (
                      <span>—</span>
                    )}
                  </div>
                </div>

                {/* Karaoke */}
                <div className="flex items-start">
                  <div className="w-6 h-6 mr-3 mt-0.5">🎤</div>
                  <div className="flex-1">
                    <p className="font-medium">Karaoke</p>
                    <p>{pkg.karaoke}</p>
                  </div>
                </div>

                {/* Details Popup */}
                {showDetails.packageId === pkg.id && (
                  <div
                    ref={detailsRef}
                    className="fixed inset-0 bg-white p-6 z-50 flex flex-col md:hidden"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">
                        {pkg.name}{" "}
                        {showDetails.type === "plates" ? "Food" : "Drink"}{" "}
                        Details:
                      </h3>
                      <button
                        className="text-2xl"
                        onClick={() =>
                          setShowDetails({ packageId: null, type: null })
                        }
                      >
                        ✕
                      </button>
                    </div>
                    <ul className="list-disc pl-5 text-base space-y-2 flex-1 overflow-y-auto">
                      {(showDetails.type === "plates"
                        ? pkg.platesDetails
                        : pkg.drinksDetails
                      ).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <button
                      className="mt-4 border-2 border-black py-3 px-6 rounded-lg text-lg font-medium w-full"
                      onClick={() =>
                        setShowDetails({ packageId: null, type: null })
                      }
                    >
                      Close
                    </button>
                  </div>
                )}

                {/* Price */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold mb-4 text-center">
                    {pkg.price}
                  </p>
                  <button className="w-full border-2 border-black font-medium py-3 px-6 hover:bg-white hover:text-black bg-black text-white rounded-lg">
                    ENQUIRE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - Table */}
        <div className="hidden md:block">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-5 divide-x divide-gray-200">
              <div className="p-4 font-medium text-left"></div>
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="p-4 font-medium text-center bg-black text-white text-lg"
                >
                  {pkg.name}
                </div>
              ))}
            </div>

            {/* Plates Row */}
            <div className="grid grid-cols-5 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-4 text-left font-medium flex items-center text-lg">
                Food
              </div>
              {packages.map((pkg) => (
                <div
                  key={`${pkg.id}-plates`}
                  className="relative p-4 text-center flex items-center justify-center"
                >
                  <span className="flex items-center">
                    {pkg.plates}
                    <span ref={infoIconRef} className="ml-2">
                      <InfoIcon
                        onClick={() => handleShowDetails(pkg.id, "plates")}
                      />
                    </span>
                  </span>
                  {showDetails.packageId === pkg.id &&
                    showDetails.type === "plates" && (
                      <div
                        ref={detailsRef}
                        className="absolute top-full mt-2 shadow-lg left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none bg-white border border-gray-200 rounded-lg p-4 z-20 w-80 max-w-[90vw]"
                      >
                        <ul className="list-disc pl-2 ">
                          {pkg.platesDetails.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* Drinks Row */}
            <div className="grid grid-cols-5 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-4 text-left font-medium flex items-center text-lg">
                Drinks
              </div>
              {packages.map((pkg) => (
                <div
                  key={`${pkg.id}-drinks`}
                  className="relative p-4 text-center flex items-center justify-center"
                >
                  <span className="flex items-center">
                    {pkg.drinks}
                    <span ref={infoIconRef} className="ml-2">
                      <InfoIcon
                        onClick={() => handleShowDetails(pkg.id, "drinks")}
                      />
                    </span>
                  </span>
                  {showDetails.packageId === pkg.id &&
                    showDetails.type === "drinks" && (
                      <div
                        ref={detailsRef}
                        className="absolute top-full mt-2 shadow-lg left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none bg-white border border-gray-200 rounded-lg p-4 z-20 w-80 max-w-[90vw]"
                      >
                        <ul className="">
                          {pkg.drinksDetails.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* Additional Perks Row */}
            <div className="grid grid-cols-5 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-4 text-left font-medium text-lg">
                Special Perks
              </div>
              {packages.map((pkg) => (
                <div
                  key={`${pkg.id}-extra-details`}
                  className="p-4 text-center"
                >
                  {pkg.additionalPerks.length > 0 ? (
                    pkg.additionalPerks.map((perk, index) => (
                      <p key={index} className="mb-2">
                        {perk}
                      </p>
                    ))
                  ) : (
                    <span>—</span>
                  )}
                </div>
              ))}
            </div>

            {/* Karaoke Row */}
            <div className="grid grid-cols-5 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-4 text-left font-medium flex items-center text-lg">
                Karaoke
              </div>
              {packages.map((pkg) => (
                <div key={`${pkg.id}-karaoke`} className="p-4 text-center">
                  {pkg.karaoke}
                </div>
              ))}
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-5 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-4 text-left font-medium text-lg">Price</div>
              {packages.map((pkg) => (
                <div key={`${pkg.id}-price`} className="p-4 text-center">
                  <p className="text-2xl font-bold mb-4">{pkg.price}</p>
                  <button className="border-2 border-black font-medium py-2 px-6 hover:bg-white hover:text-black bg-black text-white rounded-lg">
                    ENQUIRE
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
