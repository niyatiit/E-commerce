import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setsubCategory] = useState("Topwear");
  const [bestseller, setBestSeller] = useState(false);
  const [size, setsize] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("size", JSON.stringify(size));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const res = await axios.post(backendUrl + "/api/product/add", formData, {
        headers: { token },
      });

      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setsize("")
        setBestSeller("")
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Form Data is invlid ");
    }
  };

  return (
    <div className="w-[80%] relative top-25 left-60">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Upload Product
        </h1>

        {/* <!-- Upload Section --> */}
        <div className="mb-8">
          <div className="flex items-center justify-left gap-5">
            {/* 1 */}
            <label className="border-2 border-dashed border-gray-300 rounded-lg h-28 w-20 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage1(e.target.files[0])}
              />
              <div className="text-center">
                <div className="text-gray-400 mb-2">
                  {!image1 ? (
                    <svg
                      className="w-4 h-4 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ) : (
                    <img
                      src={URL.createObjectURL(image1)}
                      alt="upload preview"
                      className="w-20 h-28 relative top-1 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </label>

            {/* 2 */}
            <label className="border-2 border-dashed border-gray-300 rounded-lg h-28 w-20 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage2(e.target.files[0])}
              />
              <div className="text-center">
                <div className="text-gray-400 mb-2">
                  {!image2 ? (
                    <svg
                      className="w-4 h-4 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ) : (
                    <img
                      src={URL.createObjectURL(image2)}
                      alt="upload preview"
                      className="w-20 h-28 relative top-1 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </label>

            {/* 3 */}
            <label className="border-2 border-dashed border-gray-300 rounded-lg h-28 w-20 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage3(e.target.files[0])}
              />
              <div className="text-center">
                <div className="text-gray-400 mb-2">
                  {!image3 ? (
                    <svg
                      className="w-4 h-4 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ) : (
                    <img
                      src={URL.createObjectURL(image3)}
                      alt="upload preview"
                      className="w-20 h-28 relative top-1 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </label>

            {/* 4 */}
            <label className="border-2 border-dashed border-gray-300 rounded-lg h-28 w-20 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage4(e.target.files[0])}
              />
              <div className="text-center">
                <div className="text-gray-400 mb-2">
                  {!image4 ? (
                    <svg
                      className="w-4 h-4 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ) : (
                    <img
                      src={URL.createObjectURL(image4)}
                      alt="upload preview"
                      className="w-20 h-28 relative top-1 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            </label>
          </div>
        </div>

        <form className="space-y-6" onSubmit={onSubmitHandler}>
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Type here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Product Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write content here"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
            ></textarea>
          </div>

          {/* Category, Sub Category, Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                <option value={"Women"}>Women</option>
                <option value={"Men"}>Men</option>
                <option value={"Kids"}>Kids</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sub category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                <option value={"Topwear"}>Topwear</option>
                <option value={"Bottomwear"}>Bottomwear</option>
                <option value={"Sweater"}>Sweater</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Price
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  $
                </span>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  min={1}
                  type="number"
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Product Sizes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Product Sizes
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  setsize((prev) =>
                    prev.includes("S")
                      ? prev.filter((item) => item !== "S")
                      : [...prev, "S"]
                  )
                }
                type="button"
                className={`${
                  size.includes("S") ? "bg-pink-200" : ""
                } px-6 py-2 border rounded-md font-medium transition-colors`}
              >
                S
              </button>

              <button
                onClick={() =>
                  setsize((prev) =>
                    prev.includes("M")
                      ? prev.filter((item) => item !== "M")
                      : [...prev, "M"]
                  )
                }
                type="button"
                className={`${
                  size.includes("M") ? "bg-pink-200" : ""
                } px-6 py-2 border rounded-md font-medium transition-colors`}
              >
                M
              </button>

              <button
                onClick={() =>
                  setsize((prev) =>
                    prev.includes("L")
                      ? prev.filter((item) => item !== "L")
                      : [...prev, "L"]
                  )
                }
                type="button"
                className={`${
                  size.includes("L") ? "bg-pink-200" : ""
                } px-6 py-2 border rounded-md font-medium transition-colors`}
              >
                L
              </button>

              <button
                onClick={() =>
                  setsize((prev) =>
                    prev.includes("XL")
                      ? prev.filter((item) => item !== "XL")
                      : [...prev, "XL"]
                  )
                }
                type="button"
                className={`${
                  size.includes("XL") ? "bg-pink-200" : ""
                } px-6 py-2 border rounded-md font-medium transition-colors`}
              >
                XL
              </button>
            </div>
          </div>

          {/* Add to Bestseller */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={bestseller}
              onChange={() => setBestSeller((prev) => !prev)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-black"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              Add to bestseller
            </span>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-zinc-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors font-medium"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
