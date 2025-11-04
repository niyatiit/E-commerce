import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-7 px-6 pt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            FOREVER<span className="text-pink-500">.</span>
          </h2>
          <p className="text-sm leading-6 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-600">
            <Link to="/">
              <li className="hover:text-gray-900 cursor-pointer transition">
                Home
              </li>{" "}
            </Link>
            <Link to="/about">
              {" "}
              <li className="hover:text-gray-900 cursor-pointer transition">
                About us
              </li>
            </Link>
            <Link to="/">
              {" "}
              <li className="hover:text-gray-900 cursor-pointer transition">
                Delivery
              </li>
            </Link>
            <Link to="/">
              {" "}
              <li className="hover:text-gray-900 cursor-pointer transition">
                Privacy policy
              </li>
            </Link>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
            GET IN TOUCH
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-5 pt-5 text-center text-sm text-gray-600">
        Copyright 2024@ forever.com – All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
