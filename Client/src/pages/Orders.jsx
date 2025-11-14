import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const { currency, backendUrl, token } = useContext(ShopContext);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      // console.log(response.data)

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <main className="w-[90%] max-w-6xl mx-auto mt-30 mb-16">
      <Title text1={"MY"} text2={"ORDERS"} />

      {/* Example structure for one order — map your real data here */}
      <section className="mt-6 flex flex-col gap-6">
        {orderData.map((item,index) => (
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
                  {item.price} &nbsp; | &nbsp; {item.quantity} &nbsp; | &nbsp;{" "}
                  {item.size}
                </p>
                <p className="text-gray-500 text-sm mt-1">{item.date}</p>
                <p className="text-gray-500 text-sm mt-1">{item.payment}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {item.paymentMethod}
                </p>
              </div>
            </div>

            {/* Status + Button */}
            <div className="flex items-center flex-wrap gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <span className="flex items-center text-sm text-gray-700 mr-70">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                Ready to ship
              </span>
              <button
                onClick={loadOrderData}
                className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer transition"
              >
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
