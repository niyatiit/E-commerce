import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { currency, products } = useContext(ShopContext);

  return (
    <main className="w-[90%] max-w-6xl mx-auto mt-30 mb-16">
      <Title text1={"MY"} text2={"ORDERS"} />

      {/* Example structure for one order — map your real data here */}
      <section className="mt-6 flex flex-col gap-6">
        {products.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-5 gap-4"
          >
            {/* Product Info */}
            <div className="flex items-center flex-wrap gap-5 w-full sm:w-auto">
              <img
                src={item.image[0]}
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="font-medium text-lg">{item.name}</h2>
                <p className="text-gray-700 mt-1">
                  {currency}
                  {item.price} &nbsp; | &nbsp; Quantity: 1 &nbsp; | &nbsp; Size: M
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Date: 25 Jul, 2024
                </p>
              </div>
            </div>

            {/* Status + Button */}
            <div className="flex items-center flex-wrap gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <span className="flex items-center text-sm text-gray-700 mr-70">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                Ready to ship
              </span>
              <button className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Orders;
