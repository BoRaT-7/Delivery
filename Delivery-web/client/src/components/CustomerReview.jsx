import React from "react";
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
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 3,
    name: "Rasel Ahamed",
    role: "CTO",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
];

const CustomerReview = () => {
  return (
    <section className="py-20 bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Image */}
        <div className="flex justify-center mb-6">
          <img
            src={customerTop}
            alt="customer"
            className="w-52 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#083344] mb-6">
          What our customers are sayings
        </h2>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16 text-lg">
          Enhance posture, mobility, and well-being effortlessly with
          Posture Pro. Achieve proper alignment, reduce pain, and
          strengthen your body with ease!
        </p>

        {/* Review Cards */}
        <div className="flex justify-center items-center gap-8">

          {/* Left faded card */}
          <div className="hidden lg:block opacity-30 scale-90">
            <ReviewCard review={testimonials[2]} />
          </div>

          {/* Center card */}
          <div className="scale-100">
            <ReviewCard review={testimonials[0]} active />
          </div>

          {/* Right faded card */}
          <div className="hidden lg:block opacity-30 scale-90">
            <ReviewCard review={testimonials[1]} />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-8 mt-10">

          <button className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
            <FaArrowLeft />
          </button>

          <div className="flex gap-3">
            <div className="w-3 h-3 rounded-full bg-[#083344]"></div>
            <div className="w-3 h-3 rounded-full bg-[#A7D7D5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#A7D7D5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#A7D7D5]"></div>
            <div className="w-3 h-3 rounded-full bg-[#A7D7D5]"></div>
          </div>

          <button className="w-12 h-12 rounded-full bg-[#C8E54E] flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, active }) => {
  return (
    <div
      className={`bg-white rounded-[32px] p-8 w-[420px] shadow-sm ${
        active ? "shadow-lg" : ""
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

          <p className="text-gray-500">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;