import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, img, name, price, description }) => {
  const { currency } = useContext(ShopContext);
  return (
    <main className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
      <Link to={`/product/${id}`} className="text-gay-700 cursor-pointer">
        {/* Product Image */}
        <img
          src={img}
          alt={name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Product Info */}
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
          <p className="text-xl font-bold text-gray-900 mt-3">
            {currency}
            {price}
          </p>
        </div>
      </Link>
    </main>
  );
};

export default ProductItem;
