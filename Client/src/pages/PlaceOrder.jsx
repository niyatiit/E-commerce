import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    backendUrl,
    token,
    cartItems,
    setCartItems,
    products,
    currency,
    delivaryFess,
    getCartAmount,
    navigate,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      console.log(orderItems);

      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <main className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 py-12">
      {/* LEFT SIDE — DELIVERY INFORMATION */}
      <section className="w-full md:w-[55%]">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          onSubmit={onSubmitHandler}
        >
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="First name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email address"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 col-span-2"
          />
          <input
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            type="text"
            placeholder="Street"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 col-span-2"
          />
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            type="text"
            placeholder="City"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            type="text"
            placeholder="State"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="text"
            placeholder="Zipcode"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            type="text"
            placeholder="Country"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            type="text"
            placeholder="Phone"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 col-span-2"
          />

          {/* Button visible only on small screens */}
          <button
            type="submit"
            className="block md:hidden bg-black text-white py-3 rounded-md mt-6 hover:bg-gray-900 transition"
          >
            Place Order
          </button>
        </form>
      </section>

      {/* RIGHT SIDE — CART TOTAL & PAYMENT */}
      <section className="w-full md:w-[40%] flex flex-col gap-6">
        <CartTotal />

        <div>
          <Title text1="PAYMENT" text2="METHOD" />
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <label
            className={`flex items-center border border-gray-300 px-5 py-3 rounded-md cursor-pointer transition ${
              method === "stripe" ? "bg-zinc-100 border-gray-500" : ""
            }`}
          >
            <input
              type="radio"
              onChange={() => setMethod("stripe")}
              name="payment"
              value="stripe"
              className="mr-2"
              checked={method === "stripe"}
            />
            <span className="font-medium">Stripe</span>
          </label>

          <label
            className={`flex items-center border border-gray-300 px-5 py-3 rounded-md cursor-pointer transition ${
              method === "razorpay" ? "bg-zinc-100 border-gray-500" : ""
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
            className={`flex items-center border border-gray-300 px-5 py-3 rounded-md cursor-pointer transition ${
              method === "cod" ? "bg-zinc-100 border-gray-500" : ""
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

          {/* Button visible on desktop */}
          <button
            type="submit"
            className="hidden md:block bg-black text-white py-3 rounded-md mt-6 hover:bg-gray-900 cursor-pointer transition"
          >
            Place Order
          </button>
        </div>
      </section>
    </main>
  );
};

export default PlaceOrder;
