import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { toast } from "react-toastify";
import axios from "axios";

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
      // console.log(orderItems);
      let orderData = {
        userId : localStorage.getItem('userId'),
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivaryFess,
      };

      switch (method) {
        // Api calls for cash on delivary
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response.data);

          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
      toast.success("Order placed successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <main className="w-[95%] max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10 py-12 mt-20 bg-gray-50 min-h-screen">
      {/* LEFT SIDE — DELIVERY INFORMATION */}
      <form
        className="flex flex-col lg:flex-row justify-between w-full gap-10"
        onSubmit={onSubmitHandler}
      >
        {/* LEFT FORM SECTION */}
        <section className="w-full lg:w-[50%] bg-white shadow-lg rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />

          {/* INPUT FIELDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="First name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              type="text"
              placeholder="Last name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200"
            />
            <input
              required
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email address"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200 col-span-2"
            />
            <input
              required
              onChange={onChangeHandler}
              name="street"
              value={formData.street}
              type="text"
              placeholder="Street"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200 col-span-2"
            />
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200"
            />
            <input
              required
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              type="text"
              placeholder="State"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200"
            />
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              type="text"
              placeholder="Zipcode"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              type="text"
              placeholder="Country"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200"
            />
            <input
              required
              onChange={onChangeHandler}
              name="phone"
              value={formData.phone}
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-shadow duration-200 col-span-2"
            />
          </div>
        </section>

        {/* RIGHT SIDE — CART TOTAL & PAYMENT */}
        <section className="w-full lg:w-[45%] flex flex-col gap-8 bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <section className="bg-white shadow-md rounded-2xl p-6 sm:p-8 w-full">
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
          </section>

          <div>
            <Title text1="PAYMENT" text2="METHOD" />
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <label
              className={`flex items-center border border-gray-300 px-5 py-3 rounded-lg cursor-pointer transition duration-200 hover:bg-gray-100 ${
                method === "stripe" ? "bg-gray-50 border-gray-500" : ""
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
              className={`flex items-center border border-gray-300 px-5 py-3 rounded-lg cursor-pointer transition duration-200 hover:bg-gray-100 ${
                method === "razorpay" ? "bg-gray-50 border-gray-500" : ""
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
              className={`flex items-center border border-gray-300 px-5 py-3 rounded-lg cursor-pointer transition duration-200 hover:bg-gray-100 ${
                method === "cod" ? "bg-gray-50 border-gray-500" : ""
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

           
            <button
              type="submit"
              className="hidden md:block bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 shadow-md cursor-pointer transition-transform transform hover:scale-105"
            >
              Place Order
            </button>
          </div>
        </section>
      </form>
    </main>
  );
};

export default PlaceOrder;
