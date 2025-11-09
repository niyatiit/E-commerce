import React, { useContext, useEffect, useState } from "react";
import "../App.css";
// import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuSearch, LuUser } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  const { getCartCount } = useContext(ShopContext);
  const { navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  useEffect(() => {
    setShowMenu(false);
  }, [token]);
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 fixed top-0 left-0 bg-white shadow-md z-50">
      {/* Logo */}
      <Link to={`/`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          FOREVER<span className="text-pink-500">.</span>
        </h2>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <NavLink className="nav-link" to="/">
          <p>Home</p>
        </NavLink>
        <NavLink className="nav-link" to="/about">
          <p>About</p>
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          <p>Contact</p>
        </NavLink>
        <NavLink className="nav-link" to="/collection">
          <p>Collection</p>
        </NavLink>
      </ul>

      {/* Icons + Mobile Menu */}
      <div className="flex items-center gap-5 p-5">
        {/* Search icon */}
        <LuSearch
          onClick={() => setShowSearch(true)}
          className="hover:cursor-pointer text-xl"
        />

        {/* User dropdown */}
        <div className="relative">
          <LuUser
            className="hover:cursor-pointer text-xl"
            onClick={() => {
              if (token) {
                setShowMenu((prev) => !prev); // toggle menu only when logged in
              } else {
                navigate("/login"); // go to login if not logged in
              }
            }}
          />

          {token && showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg p-2 z-50">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Profile
              </p>

              <p
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  navigate("/orders");
                  setShowMenu(false);
                }}
              >
                Orders
              </p>

              <p
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  logout();
                  setShowMenu(false);
                }}
              >
                Logout
              </p>
            </div>
          )}
        </div>

        {/* Cart icon */}
        <Link to="/cart">
          <div className="relative inline-block">
            <SlHandbag className="hover:cursor-pointer text-xl" />
            <span className="absolute -top-2 -right-3.5 bg-black text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {getCartCount()}
            </span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          {mobileMenu ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenu && (
        <div className="absolute top-0 right-0 bg-white w-2/3 h-screen shadow-lg flex flex-col items-start p-6 gap-6 z-50 transition-all duration-300">
          <button
            className="self-end text-2xl"
            onClick={() => setMobileMenu(false)}
          >
            <FiX />
          </button>
          <NavLink
            to="/"
            className="text-lg font-medium hover:text-blue-600"
            onClick={() => setMobileMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg font-medium hover:text-blue-600"
            onClick={() => setMobileMenu(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg font-medium hover:text-blue-600"
            onClick={() => setMobileMenu(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/collection"
            className="text-lg font-medium hover:text-blue-600"
            onClick={() => setMobileMenu(false)}
          >
            Collection
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
