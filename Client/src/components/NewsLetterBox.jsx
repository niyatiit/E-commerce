import React from "react";
import Title from "./Title";

const NewsLetterBox = () => {
    const onSubmitHandler = (e) =>{
        e.preventDefault()
    }
  return (
    <main className="w-full flex flex-col items-center justify-center bg-gray-50 p-6">
      <Title text1={"OUR"} text2={"NEWS BOX"} />
      <p className="p-2 text-center m-5">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod
        aliquid nihil autem dolore.
      </p>
      <div className="w-full pt-5 max-w-md flex flex-col sm:flex-row">
        <form onSubmit={onSubmitHandler}>
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="px-6 py-3 text-white bg-black font-semibold rounded-md hover:bg-zinc-900 hover:cursor-pointer transition-colors duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
};

export default NewsLetterBox;
