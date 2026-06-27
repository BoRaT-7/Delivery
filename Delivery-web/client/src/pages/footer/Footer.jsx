import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-4">
      <div className="max-w-7xl mx-auto bg-black rounded-[32px] py-16 px-8">

        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="logo"
              className="w-12"
            />

            <h2 className="font-bold text-4xl text-white -ml-2">
              ZapShift
            </h2>
          </Link>

          {/* Description */}
          <p className="text-gray-300 text-center max-w-3xl mt-6 leading-8">
            Enjoy fast, reliable parcel delivery with real-time
            tracking and zero hassle. From personal packages to
            business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-[#0B4A52] my-10"></div>

        {/* Menu */}
        <div className="flex flex-wrap justify-center gap-10 text-white text-lg">
          <Link to="/">Services</Link>
          <Link to="/">Coverage</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-[#0B4A52] my-10"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">

          {/* LinkedIn */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white text-xl"
          >
            <FaLinkedinIn />
          </a>

          {/* X/Twitter */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black text-xl"
          >
            <FaXTwitter />
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-xl"
          >
            <FaFacebookF />
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white text-xl"
          >
            <FaYoutube />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;