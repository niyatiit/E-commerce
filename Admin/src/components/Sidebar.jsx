import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-21 left-0 h-[calc(100vh-4rem)] w-20 md:w-64 bg-[#f8faf8] border-r border-gray-200 p-4">
      <ul className="space-y-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-200 rounded-md p-3 cursor-pointer mb-2 ${
              isActive ? "bg-zinc-200" : "hover:bg-gray-100"
            }`
          }
        >
          <IoAddCircleOutline className="text-gray-600 text-xl" />
          <span className="font-medium text-gray-700 hidden md:inline">
            Add Items
          </span>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-200 rounded-md p-3 cursor-pointer mb-2 ${
              isActive ? "bg-zinc-200" : "hover:bg-gray-100"
            }`
          }
        >
          <MdFormatListBulletedAdd className="text-gray-600 text-xl" />
          <span className="font-medium text-gray-700 hidden md:inline">
            List Items
          </span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 border border-gray-200 rounded-md p-3 cursor-pointer mb-2 ${
              isActive ? "bg-zinc-200" : "hover:bg-gray-100"
            }`
          }
        >
          <MdFormatListBulletedAdd className="text-gray-600 text-xl" />
          <span className="font-medium text-gray-700 hidden md:inline">
            Orders
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
