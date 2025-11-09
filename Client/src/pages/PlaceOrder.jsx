import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  const { currency, delivaryFess, getCartAmount,navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");


  return (
    <main className="flex flex-col md:flex-row justify-between w-[90%] max-w-6xl mx-auto mt-30 mb-12">
      {/* LEFT SIDE — DELIVERY INFORMATION */}
      <section className="w-full md:w-[55%]">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 p-3 rounded-md col-span-2"
          />
          <input
            type="text"
            placeholder="Street"
            className="border border-gray-300 p-3 rounded-md col-span-2"
          />
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Zipcode"
            className="border border-gray-300 p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 p-3 rounded-md col-span-2"
          />
        </form>
      </section>

      {/* RIGHT SIDE — CART TOTALS + PAYMENT METHOD */}
      <section className="w-full md:w-[40%] mt-10 md:mt-0">
        <CartTotal />

        {/* PAYMENT METHODS */}
        <div className="mt-5">
          <Title text1="PAYMENT" text2="METHOD" />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <label
            className={`flex items-center border border-gray-300 px-5 py-3 rounded-md cursor-pointer hover:border-gray-500 transition ${
              method === "stripe" ? "bg-zinc-200" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              onChange={() => setMethod("stripe")}
              name="payment"
              value="stripe"
              className="mr-2 "
              checked={method === "stripe"}
            />
            <span className="font-medium">Stripe</span>
          </label>

          <label
            className={`flex items-center border border-gray-300 px-5 py-3 rounded-md cursor-pointer hover:border-gray-500 transition  ${
              method === "razorpay" ? "bg-zinc-200" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              onChange={() => setMethod("razorpay")}
              name="payment"
              value="razorpay"
              className="mr-2"
              checked={method === "razorpay"}
            />
            <span className="font-medium">Razorpay</span>
          </label>

          <label
            className={`flex items-center border border-gray-300 px-5 py-3 rounded-md cursor-pointer hover:border-gray-500 transition  ${
              method === "cod" ? "bg-zinc-200" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              onChange={() => setMethod("cod")}
              name="payment"
              value="cod"
              className="mr-2"
              checked={method === "cod"}
            />
            <span className="font-medium">Cash on Delivery</span>
          </label>
        </div>

        <button onClick={()=>navigate('/orders')} className="w-full bg-black text-white py-3 rounded-md mt-6 hover:bg-gray-900 cursor-pointer transition">
          Place Order
        </button>
      </section>
    </main>
  );
};

export default PlaceOrder;
