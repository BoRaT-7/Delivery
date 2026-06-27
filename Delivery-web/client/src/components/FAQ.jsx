import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaArrowUp } from "react-icons/fa6";

const faqs = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, the posture corrector is designed to accommodate different body types and can be used by adults of various ages.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Yes, regular use can help improve posture and reduce back pain caused by poor sitting or standing habits.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some advanced posture correctors include smart vibration alerts to notify users when their posture is incorrect.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe to email or SMS notifications to receive updates when the product becomes available.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#083344] mb-6">
          Frequently Asked Question (FAQ)
        </h2>

        <p className="text-center text-gray-500 text-lg max-w-3xl mx-auto mb-12">
          Enhance posture, mobility, and well-being effortlessly with
          Posture Pro. Achieve proper alignment, reduce pain, and
          strengthen your body with ease!
        </p>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                active === index
                  ? "border-[#0B7B87] bg-[#EDF7F7]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full flex justify-between items-center px-6 py-6 text-left"
              >
                <h3 className="text-[#083344] font-semibold text-lg">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FaChevronUp className="text-[#0B7B87]" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>

              {active === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-300 mb-5"></div>

                  <p className="text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button className="bg-[#CBE84D] hover:bg-[#b6d53d] text-black font-semibold px-8 py-4 rounded-2xl transition">
            See More FAQ's
          </button>

          <button className="w-14 h-14 rounded-full bg-black text-[#CBE84D] flex items-center justify-center">
            <FaArrowUp className="rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;