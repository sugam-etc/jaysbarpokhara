import { useState } from "react";

const faqData = [
  {
    question: "How do I book a karaoke room?",
    answer:
      "You can easily book a karaoke room directly through our website by navigating to the 'Book Now' section. Simply select your preferred date, time, room size, and any additional packages. You can also call us to make a reservation.",
  },
  {
    question: "What is included in a private karaoke room booking?",
    answer:
      "Each private karaoke room booking includes exclusive access to your chosen room, state-of-the-art sound equipment, a vast song catalog with over 45,000 tracks, and in-room service for food and drinks. Some packages may include complimentary drinks or snacks.",
  },
  {
    question: "Do you serve food and drinks?",
    answer:
      "Yes, we have a comprehensive menu featuring delicious signature dishes designed by our culinary director, along with a wide selection of cocktails, wines, beers, and non-alcoholic beverages. You can order directly to your room or enjoy our main bar area.",
  },
  {
    question: "Are your rooms suitable for children's parties?",
    answer:
      "Absolutely! We offer family-friendly rooms and special packages for kids' parties. Our sound levels are adjustable, and we can tailor the experience to suit younger guests. Please contact us for more details on age-appropriate options.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Our opening hours vary by day: Tuesday to Friday: 4pm-1:30am, Saturday: 12pm-1:30am, Sunday: 12pm-8pm. We are closed on Mondays. Please check our website for any holiday hours or special events.",
  },
  {
    question: "Can I bring my own food or drinks?",
    answer:
      "No, outside food and beverages are not permitted. We offer a full menu of delicious food and drinks available for order directly to your private room or at our main bar.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <span className="ml-4 text-gray-500">
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`px-6 pb-6 pt-0 text-gray-700 transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
