import React from "react";

import amazon from "../assets/brands/amazon.png";
import amazon_vector from "../assets/brands/amazon_vector.png";
import casio from "../assets/brands/casio.png";
import moonstar from "../assets/brands/moonstar.png";
import randstad from "../assets/brands/randstad.png";
import star from "../assets/brands/star.png";
import star_people from "../assets/brands/start_people.png";

const brands = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  star_people,
];

const Brands = () => {
  return (
    <section className="py-10 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#083344] mb-12">
        We've helped thousands of sales teams
      </h2>

      <div className="overflow-hidden">
        <div className="marquee-container">
          {[...brands, ...brands].map((logo, index) => (
            <div key={index} className="brand-item">
              <img
                src={logo}
                alt={`brand-${index}`}
                className="h-6 md:h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Brands;