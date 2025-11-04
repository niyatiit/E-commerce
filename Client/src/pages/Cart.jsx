import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { AiTwotoneDelete } from "react-icons/ai";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems,updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <main className="mt-30 px-6 md:px-20">
      <Title  text1={"YOUR"} text2={"CARTS"} />
      <div className="mt-10 space-y-6">
      
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product.id === item.id
          );
          if (!productData) return null;

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-all duration-200"
            >
              {/* Left Section */}
              <div className="flex items-center gap-6 w-full md:w-auto">
                <img
                  src={productData.img[0]}
                  alt="Product"
                  className="w-28 h-32 object-cover rounded-lg border"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {productData.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-base">
                    {currency}
                    {productData.price}
                  </p>
                  <button className="border border-gray-300 px-4 py-1 mt-3 rounded-md text-sm font-medium text-gray-700">
                    Size: {item.size}
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex justify-center  items-center gap-4 mt-4 md:mt-0">
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item.id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min="1"
                  defaultValue={item.quantity}
                  className="border border-gray-300 px-3 mr-70 py-1.5 w-16 text-center rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  className="text-gray-500 hover:text-red-600 text-xl transition-all"
                  title="Remove item"
                >
                  <AiTwotoneDelete className="hover:cursor-pointer"
                    onClick={() => updateQuantity(item.id, item.size, 0)}
                  />
                </button>
              </div>
            </div>
          );
        })}
       
      </div>
      <CartTotal/>
    </main>
  );
};

export default Cart;
