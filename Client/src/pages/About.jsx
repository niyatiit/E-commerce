import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <>
      <section className="w-[90%] max-w-6xl mx-auto my-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-1 flex justify-center mt-20">
          <img
            src={assets.about_img}
            alt="About Us"
            className="rounded-lg shadow-md w-full max-w-md object-cover h-[300px] md:h-[500px] mt-5 md:mt-10"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-gray-700 mt-5 md:mt-0">
          <Title text1={"ABOUT"} text2={"US"} />

          <p className="mb-5 leading-relaxed mt-5 text-sm">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>

          <p className="mb-5 leading-relaxed text-sm">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <h3 className=" py-1 inline-block rounded-md font-semibold mb-3">
            Our Mission
          </h3>

          <p className="leading-relaxed text-sm">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>

        <br />
      </section>

      {/* Why we choose  */}
      <section class="max-w-6xl mx-auto py-12 px-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          <div class="border border-gray-200 rounded-md p-6 text-gray-700 hover:shadow-md transition-shadow duration-300">
            <h3 class="font-semibold mb-2">Quality Assurance:</h3>
            <p class="text-sm leading-relaxed">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>

          <div class="border border-gray-200 rounded-md p-6 text-gray-700 hover:shadow-md transition-shadow duration-300">
            <h3 class="font-semibold mb-2">Convenience:</h3>
            <p class="text-sm leading-relaxed">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>

          <div class="border border-gray-200 rounded-md p-6 text-gray-700 hover:shadow-md transition-shadow duration-300">
            <h3 class="font-semibold mb-2">Exceptional Customer Service:</h3>
            <p class="text-sm leading-relaxed">
              Our team of dedicated professionals is here to assist you every
              step of the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </section>

      <NewsLetterBox />
    </>
  );
};

export default About;
