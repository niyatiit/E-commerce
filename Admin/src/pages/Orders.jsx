import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import axios from "axios";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      console.log("Orders fetched:", response.data.orders);

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) fetchAllOrders();
  }, [token]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative top-25 left-60 w-[80%]">
      <h3 className="text-xl font-semibold mb-4">Order Page</h3>

      {orders.length === 0 && <p>No orders found.</p>}

      {orders.map((order, orderIndex) => (
        <div key={orderIndex} className="mb-6 p-4 border rounded shadow">
          <h4 className="font-medium mb-2">
            {order.address
              ? order.address.firstName + " " + order.address.lastName
              : "No Address"}
          </h4>

          <div>
            {order.items &&
              order.items.map((item, idx) => (
                <p key={idx}>
                  {item.name} X {item.quantity} {item.size && `(${item.size})`}
                </p>
              ))}
          </div>

          <div>
            <p>{order.address?.street}</p>
            <p>
              {order.address?.city}, {order.address?.state}, {order.address?.country}, {order.address?.zipcode}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
