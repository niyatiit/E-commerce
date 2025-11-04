import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto  mt-30 bg-white mb-10 pt-20 rounded-2xl shadow-md ">
      
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-10 text-center md:text-left mb-8 md:mb-0">
        <p className="text-gray-500 tracking-widest mb-2 text-sm">
          OUR BESTSELLERS
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
          Latest Arrivals
        </h1>

        {/* SHOP NOW with underline animation */}
        <a
          href="#"
          className="relative mx-auto md:mx-0 text-black text-lg font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-black hover:after:w-25 after:transition-all after:duration-300"
        >
          SHOP NOW
        </a>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src={assets.model_img} // <-- replace with your local image
          alt="Hero"
          className="object-contain h-[250px] md:h-[300px] w-[250px] md:w-[300px] rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
