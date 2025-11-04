import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FiX } from "react-icons/fi"; // Close icon
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const[visible , setVisible] = useState(false)

  useEffect(()=>{
    // console.log(location)
    if(location.pathname.includes('collection'))
    {
        setVisible(true)
    }
    else
    {
        setVisible(false)
    }
  },[location])

  return showSearch && visible ? (
    <div className="fixed top-28 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] md:w-[70%] lg:w-[50%] bg-white shadow-md rounded-xl flex items-center justify-between p-1 border border-gray-200 z-50 transition-all duration-300">
      {/* Input Field */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here..."
        className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent text-sm sm:text-base"
      />

      {/* Close Button */}
      <button
        onClick={() => setShowSearch(false)}
        className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:cursor-pointer transition duration-200"
      >
        <FiX size={22} />
      </button>
    </div>
  ) : null;
};

export default SearchBar;
