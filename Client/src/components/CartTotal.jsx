import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivaryFess, getCartAmount,navigate } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivaryFess;

  return (
    <main className="relaive  px-6 sm:px-10 relative ">
      {/* Title */}
      <Title text1={"CART"} text2={"TOTALS"} />

      {/* Cart summary box */}
      <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 mt-6 w-full max-w-md mx-auto">
        {/* Subtotal */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-3">
          <p className="text-gray-700 font-medium">Subtotal</p>
          <p className="text-gray-900 font-semibold">
            {currency}
            {getCartAmount()}.00
          </p>
        </div>

        {/* Shipping Fees */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-3">
          <p className="text-gray-700 font-medium">Shipping Fees</p>
          <p className="text-gray-900 font-semibold">
            {currency}
            {delivaryFess}.00
          </p>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-800">Total</p>
          <p className="text-lg font-bold text-green-600">
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivaryFess}.00
          </p>
        </div>

        {/* Checkout Button */}
        <button onClick={()=>navigate('/place-order')} className="mt-6 w-full bg-black hover:bg-gray-900 cursor-pointer text-white font-semibold py-3 rounded-xl transition-all duration-300">
          Proceed to Checkout
        </button>
      </section>
    </main>
  );
};

export default CartTotal;
