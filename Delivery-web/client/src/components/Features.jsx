import React from "react";

import liveTracking from "../assets/live-tracking.png";
import safeDelivery from "../assets/safe-delivery.png";

const features = [
  {
    id: 1,
    image: liveTracking,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    image: safeDelivery,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    image: safeDelivery,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">

        {/* top dotted line */}
        <div className="border-t-2 border-dashed border-[#0B4A52] mb-14"></div>

        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-3xl p-8 mb-8 flex flex-col lg:flex-row items-center gap-10"
          >
            {/* image */}
            <div className="lg:w-[180px] flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[170px] object-contain"
              />
            </div>

            {/* divider */}
            <div className="hidden lg:block h-[120px] border-l-2 border-dashed border-[#0B4A52]"></div>

            {/* content */}
            <div className="flex-1">
              <h3 className="text-[#083344] text-3xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-8 text-lg">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* bottom dotted line */}
        <div className="border-t-2 border-dashed border-[#0B4A52] mt-14"></div>
      </div>
    </section>
  );
};

export default Features;