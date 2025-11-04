import React from "react";

const Navbar = ({setToken}) => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-sm  fixed w-full z-50">
      {/* Left side */}
      <h1 className="text-2xl font-semibold text-pink-500 tracking-wide">
        FOREVER<span className="text-pink-400 ml-1">.</span>
        <span className="block text-xs font-medium text-gray-500">
          ADMIN PANEL
        </span>
      </h1>

      {/* Right side */}
      <button onClick={()=>setToken('')}  className="bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-800 cursor-pointer transition">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
