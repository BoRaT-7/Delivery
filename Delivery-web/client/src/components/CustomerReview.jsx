import React, { useState } from "react";
import customerTop from "../assets/customer-top.png";
import reviewQuote from "../assets/reviewQuote.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 2,
    name: "Nasir Uddin",
    role: "CEO",
    review:
      "A posture corrector helps improve body alignment, reduces pain, and provides long-term posture support for daily activities.",
  },
  {
    id: 3,
    name: "Rasel Ahamed",
    role: "CTO",
    review:
      "This product significantly improved my posture and reduced my back pain after only a few weeks of consistent use.",
  },
];

export default function CustomerReview() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  };

  const nextSlide = () => {
    setCurrent(
      current === testimonials.length - 1
        ? 0
        : current + 1
    );
  };

  const prev =
    testimonials[
      (current - 1 + testimonials.length) %
        testimonials.length
    ];

  const active = testimonials[current];

  const next =
    testimonials[
      (current + 1) % testimonials.length
    ];

  return (
    <section className="py-20 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Image */}
        <div className="flex justify-center mb-6">
          <img
            src={customerTop}
            alt="customer"
            className="w-52"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#083344] mb-6">
          What our customers are saying
        </h2>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16 text-lg">
          Enhance posture, mobility, and well-being effortlessly with
          Posture Pro.
        </p>

        {/* Cards */}
        <div className="flex justify-center items-center gap-8 transition-all duration-500">

          {/* Previous */}
          <div className="hidden lg:block opacity-30 scale-90 transition-all">
            <ReviewCard review={prev} />
          </div>

          {/* Active */}
          <div className="scale-100 transition-all duration-500">
            <ReviewCard review={active} active />
          </div>

          {/* Next */}
          <div className="hidden lg:block opacity-30 scale-90 transition-all">
            <ReviewCard review={next} />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-8 mt-10">

          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaArrowLeft />
          </button>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index
                    ? "bg-[#083344]"
                    : "bg-[#A7D7D5]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#C8E54E] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, active }) {
  return (
    <div
      className={`bg-white rounded-[32px] p-8 w-[420px] transition-all duration-500 ${
        active ? "shadow-xl scale-100" : "shadow-sm"
      }`}
    >
      <img
        src={reviewQuote}
        alt="quote"
        className="w-12 mb-6"
      />

      <p className="text-gray-600 leading-8 mb-8">
        {review.review}
      </p>

      <div className="border-t border-dashed border-[#0B4A52] pt-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#083344]"></div>

        <div>
          <h4 className="font-bold text-[#083344] text-xl">
            {review.name}
          </h4>

          <p className="text-gray-500">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}