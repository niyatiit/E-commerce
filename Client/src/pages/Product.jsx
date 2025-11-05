import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [img, setImg] = useState("");
  const [size, setSize] = useState(""); //Size

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  useEffect(() => {
    if (productData && productData.img && productData.img.length > 0) {
      setImg(productData.image[0]);
    }
  }, [productData]);

  return productData ? (
    <>
      <main className="mt-28 bg-white px-4 md:px-20 py-10 flex flex-col md:flex-row gap-10">
        {/* Left thumbnails */}
        <div className="flex md:flex-col gap-4 justify-center md:justify-start">
          {productData?.image?.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Thumbnail ${index}`}
              onClick={() => setImg(item)}
              className={`w-20 h-24 object-cover rounded-lg cursor-pointer border ${
                img === item ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Main Image — shows only when selected */}
        <div className="flex-1 flex justify-center items-center">
          {img && (
            <img
              src={img}
              alt="Main"
              className="w-full max-w-md h-[500px] object-contain rounded-xl shadow-md md:h-[600px]"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-center text-gray-800">
          <h2 className="text-2xl font-semibold mb-2">{productData.name}</h2>
          <div className="flex items-center mb-3">
            <span className="text-yellow-500 text-lg">★★★★☆</span>
            <span className="text-sm text-gray-500 ml-2">(122 reviews)</span>
          </div>
          <h3 className="text-2xl font-bold mb-3">${productData.price}</h3>
          <p className="text-gray-600 mb-6">{productData.description}</p>
          <p className="font-bold"> Select Size </p>
          <div className="felx">
            {productData?.size?.map((item, index) => (
              <button
                className={`border-1 my-2 mx-2 p-2 w-10 rounded-lg hover:cursor-pointer ${
                  item === size ? "border-orange-700" : ""
                }`}
                key={index}
                onClick={() => setSize(item)}
              >
                {" "}
                {item}{" "}
              </button>
            ))}
          </div>

          {/* Some Text */}
          <div className="mt-5 p-2 mb-5">
            <ul className="list-disc pl-6">
              <li className="leading-[2]">100% Orignal Products. </li>
              <li className="leading-[2]">
                Case on delivery is available on this product.
              </li>{" "}
              <li className="leading-[2]">
                Each return end exchange policy within 7 days.
              </li>
            </ul>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-all"
          >
            Add to Cart
          </button>
        </div>
      </main>
      <div className="mt-10 pt-6 px-4 sm:px-8 md:px-12">
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-2 text-center sm:text-left">
          <button className="font-semibold border border-gray-300 p-2 rounded-sm">
            Description
          </button>
          <button className="text-gray-500 hover:text-black border border-gray-300 p-2 rounded-sm">
            Reviews (122)
          </button>
        </div>

        {/* Description Section */}
        <div className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>

          <p className="mt-4">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
