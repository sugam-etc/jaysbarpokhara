import React, { useState } from "react";

const KidsFamily = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your age policy for family events?",
      answer:
        "Children of all ages are welcome at Jasybar when accompanied by adults. We have special family hours every day from 11am-6pm where kids can enjoy our facilities in a family-friendly environment.",
    },
    {
      question: "Can we decorate for a birthday party?",
      answer:
        "Yes! We welcome decorations for special occasions. You can bring balloons and banners, but please avoid glitter, confetti, or anything that requires adhesive. Our staff will help you set up.",
    },
    {
      question: "How many people can we book for a kids party?",
      answer:
        "We accommodate groups of all sizes - from small family gatherings to larger birthday parties. For groups over 15, we recommend contacting us in advance to ensure proper arrangements.",
    },
    {
      question: "Can we bring our own birthday cake?",
      answer:
        "Absolutely! You're welcome to bring your own cake for celebrations. We'll provide plates and cutlery, and our staff can help with serving.",
    },
    {
      question: "Can we bring outside food and drinks?",
      answer:
        "We offer a variety of kid-friendly Nepali and international dishes, but you're welcome to bring special snacks for children if needed. Outside alcoholic beverages are not permitted.",
    },
    {
      question: "What food options are available for kids?",
      answer:
        "Our kids menu includes Nepali favorites like chicken momos, fried rice, and chow mein, as well as international options like pizza, pasta, and sandwiches.",
    },
    {
      question: "Do you have special activities for kids?",
      answer:
        "Yes! We often organize kid-friendly entertainment including music, simple dance activities, and occasionally face painting on weekends.",
    },
    {
      question: "Can we add more food or activities on the day?",
      answer:
        "While we recommend pre-booking for large groups, we're usually able to accommodate additional requests based on availability. Just ask our staff!",
    },
  ];

  return (
    <div className="font-sans text-gray-700 bg-gray-50 antialiased">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[650px] flex items-center justify-center text-white overflow-hidden shadow-xl">
        <img
          src="https://placehold.co/1920x650/1c2635/ffffff?text=Family+Fun+at+Jasybar"
          alt="Family Fun at Jasybar"
          className="absolute inset-0 object-cover w-full h-full filter brightness-[.65]"
        />
        <div className="relative z-10 text-center p-6 max-w-6xl mx-auto">
          <p className="text-sm sm:text-base uppercase tracking-widest mb-3 opacity-90">
            Jasybar Pokhara {">"} Kids & Family
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg px-4">
            Kids & Family
          </h1>
        </div>
      </section>

      {/* Family Fun at Jasybar */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-gray-800">
          Family Fun at Jasybar Pokhara
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed mb-6">
          Looking for a family-friendly spot in Lakeside? Jasybar welcomes
          families daily from 11am to 6pm for a fun, relaxed experience with
          beautiful Fewa Lake views. We offer special kids menus, comfortable
          seating, and a welcoming atmosphere for families traveling with
          children.
        </p>
        <p className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
          On weekends, we often have special family entertainment including live
          acoustic music suitable for all ages. Our staff are experienced in
          helping families have a great time while respecting other guests'
          experience.
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-8 md:mt-12 mb-6 md:mb-8 px-4">
          Please note: While we welcome families during the day, after 8pm the
          atmosphere becomes more adult-oriented. For any questions about family
          visits, please contact us at{" "}
          <a
            href="mailto:info@jasybarpokhara.com"
            className="text-blue-600 hover:underline transition-colors duration-300"
          >
            info@jasybarpokhara.com
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-6 md:mt-8 px-4">
          <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 text-base sm:text-lg font-semibold tracking-wide">
            ENQUIRE
          </button>
          <button className="bg-white text-black border border-gray-300 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 text-base sm:text-lg font-semibold tracking-wide">
            VIEW KIDS MENU
          </button>
        </div>
      </section>

      {/* Family Packages */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col lg:flex-row items-center lg:space-x-8 xl:space-x-12 bg-white rounded-3xl shadow-xl mb-12 md:mb-24 p-6 sm:p-8 lg:p-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Family Packages
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Our family packages are perfect for enjoying quality time together
            with delicious Nepali food and beautiful lakeside views. Available
            daily from 11am-6pm.
          </p>
          <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
            Our Family Package includes:
          </h4>
          <ul className="list-disc list-inside text-base sm:text-lg space-y-2 sm:space-y-3 mb-6 sm:mb-8">
            <li>Dedicated family seating area with lake views</li>
            <li>
              1 main dish per person (kids can choose from momos, fried rice, or
              pasta while adults select from our regular menu)
            </li>
            <li>Complimentary soft drinks for children</li>
            <li>Special kids dessert</li>
          </ul>
          <p className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
            Price: Rs. 1500{" "}
            <span className="font-normal text-gray-600">per adult</span>
          </p>
          <p className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">
            Rs. 800{" "}
            <span className="font-normal text-gray-600">
              per child (under 12)
            </span>
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-10">
            *Special birthday cake arrangement available with advance notice
          </p>
          <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 text-base sm:text-lg font-semibold tracking-wide">
            BOOK NOW
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center w-full">
          <img
            src="https://placehold.co/700x500/ffe4e1/000000?text=Family+Dining+with+Lake+View"
            alt="Family Dining"
            className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-xl"
          />
        </div>
      </section>

      {/* Weekend Family Brunch */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-8 xl:space-x-12 bg-white rounded-3xl shadow-xl mb-12 md:mb-24 p-6 sm:p-8 lg:p-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Weekend Family Brunch
          </h3>
          <p className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
            Saturdays & Sundays, 11am-2pm
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Join us every weekend for our special family brunch featuring a mix
            of Nepali and international breakfast favorites. Enjoy live acoustic
            music while taking in the beautiful Fewa Lake views.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Our brunch includes a selection of fresh juices, tea/coffee,
            traditional Nepali breakfast items, pancakes, eggs prepared your
            way, and a special kids buffet corner. The relaxed atmosphere is
            perfect for families to enjoy quality time together.
          </p>
          <p className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">
            Rs. 1200{" "}
            <span className="font-normal text-gray-600">per adult</span>
            <br />
            Rs. 600{" "}
            <span className="font-normal text-gray-600">
              per child (under 12)
            </span>
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-10">
            *Reservations recommended for weekend brunch
          </p>
          <button className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full shadow-md hover:bg-gray-800 transition-all duration-300 text-base sm:text-lg font-semibold tracking-wide">
            RESERVE TABLE
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center w-full">
          <img
            src="https://placehold.co/700x500/f0f8ff/000000?text=Weekend+Brunch+with+Family"
            alt="Weekend Family Brunch"
            className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-xl"
          />
        </div>
      </section>

      {/* Why Choose Jasybar for Family Time? */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-gray-800">
          Why Choose Jasybar for Family Time?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-0">
          {[
            {
              title: "Beautiful Lakeside Setting",
              description:
                "Enjoy stunning views of Fewa Lake while you dine. Our outdoor seating is perfect for families to relax and take in Pokhara's natural beauty.",
              image:
                "https://placehold.co/350x250/e0f2f7/000000?text=Lake+View",
            },
            {
              title: "Kid-Friendly Menu",
              description:
                "We offer a special kids menu featuring both Nepali favorites and international dishes that children love, prepared with care by our chefs.",
              image:
                "https://placehold.co/350x250/ffe4b5/000000?text=Kids+Food",
            },
            {
              title: "Family-Friendly Atmosphere",
              description:
                "Our staff are experienced in making families feel welcome. We provide high chairs, kid-friendly utensils, and a relaxed environment for parents.",
              image:
                "https://placehold.co/350x250/d3f8d3/000000?text=Family+Time",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mb-4 sm:mb-6 w-full object-cover h-48 sm:h-56 md:h-60"
              />
              <h4 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-800">
                {item.title}
              </h4>
              <p className="text-center text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {item.description}
              </p>
              <button className="bg-white text-black border border-gray-300 px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-sm sm:text-base">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0 py-4 sm:py-5"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none px-2 sm:px-4 py-2"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg sm:text-xl font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-500 ml-4">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <p className="mt-2 sm:mt-4 px-2 sm:px-4 text-base sm:text-lg text-gray-700 leading-relaxed animate-fade-in-down">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KidsFamily;
