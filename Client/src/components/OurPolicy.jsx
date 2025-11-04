import React from "react";
import {
  MdCompareArrows,
  MdOutlineVerifiedUser,
  MdHeadsetMic,
} from "react-icons/md";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <main className="w-full bg-gray-100 py-12 text-center">
      <Title text1={"OUR"} text2={"POLICY"} />

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mt-10 px-4">
        {/* 1️⃣ Easy Exchange Policy */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[300px] flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
          <div className="text-5xl mb-4 text-gray-800">
            <MdCompareArrows />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Easy Exchange Policy
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            We offer hassle-free exchange policy
          </p>
        </div>

        {/* 2️⃣ 7 Days Return Policy */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[300px] flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
          <div className="text-5xl mb-4 text-gray-800">
            <MdOutlineVerifiedUser />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            7 Days Return Policy
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            We provide 7 days free return policy
          </p>
        </div>

        {/* 3️⃣ Best Customer Support */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-[300px] flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
          <div className="text-5xl mb-4 text-gray-800">
            <MdHeadsetMic />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">
            Best Customer Support
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            We provide 24/7 customer support
          </p>
        </div>
      </div>
    </main>
  );
};

export default OurPolicy;
