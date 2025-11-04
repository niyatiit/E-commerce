import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext(); //global storage

const ShopContextProvider = (props) => {
  // store this values to use anywhere end any components
  const currency = "$";
  const delivaryFess = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems); //Copy all the cartItems data in the cartData

    if (!size) {
      toast.error("Please Select Product Size");
      return;
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1; // if any size is already 1 then increase that size
      } else {
        cartData[itemId][size] = 1; //if first time you add to cart any producct then size is first time 1
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getCartCount = () => {
    let totalCount = 0;

    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (err) {
          console.log("Error :----", err);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (let items in cartItems) {
      let itemInfo = products.find((product) => product.id === items);

      for (let item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (err) {
          console.log("err :--------", err);
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(backendUrl + "/api/product/list", {
      headers: { token },
    });
    console.log(response.data);

    if (response.data.success) {
      setProducts(response.data.product);
    } else {
      toast.error("Product is not displayed here");
    }
  } catch (error) {
    console.log(error);
    toast.error("List data has an error");
  }
};

  useEffect(()=>{
    getProductsData()
  })
  const value = {
    products,
    currency,
    delivaryFess,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;   