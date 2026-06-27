import React from "react";

import merchantBg from "../assets/be-a-merchant-bg.png";
import merchantImage from "../assets/location-merchant.png";

const MerchantSection = () => {
  return (
    <section className="py-20 ">
      <div
        className="max-w-7xl mx-auto rounded-[32px] overflow-hidden px-8 md:px-16 py-14"
        style={{
          backgroundImage: `url(${merchantBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#003B40",
        }} 
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
              Merchant and Customer Satisfaction
              <br />
              is Our First Priority
            </h2>

            <p className="text-gray-200 text-lg leading-8 mb-10 max-w-xl">
              We offer the lowest delivery charge with the highest value
              along with 100% safety of your product. ZapShift courier
              delivers your parcels in every corner of Bangladesh
              right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#D4F25A] text-[#083344] font-semibold px-8 py-4 rounded-full hover:opacity-90 transition">
                Become a Merchant
              </button>

              <button className="border border-[#D4F25A] text-[#D4F25A] font-semibold px-8 py-4 rounded-full hover:bg-[#D4F25A] hover:text-[#083344] transition">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={merchantImage}
              alt="Merchant"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantSection;