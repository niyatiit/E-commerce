import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductsItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  // Show all products in the collection pages
  const [filterProduct, setFilterProduct] = useState([]);

  // show all only category section :- checkbox for CATEGORIES
  const [category, setCategory] = useState([]);

  // show all subcategory section :- checkbox for TYPES
  const [subCategory, setSubCategory] = useState([]);

  // Show Sorted Products here
  const [sortType, setSortType] = useState("relevance");

  useEffect(() => {
    setFilterProduct(products);
  }, []);

  // only for category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // check that only console in all categorys
  // useEffect(()=>{
  //   console.log(category)
  // },[category])

  // only for type
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Check that only console in all Types
  // useEffect(()=>{
  //   console.log(subcategory)
  // },[subcategory])

  // When Checkbox Click then thi function run other wise show all the Products in the collection pages
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilterProduct(productsCopy);
  };

  // when load the checkbox then show only this property values of products
  useEffect(() => {
    applyFilter();
    // console.log("subcategory :- ", subCategory);
    // console.log("category :- ", category);
  }, [category, subCategory , search , showSearch]);

  // Sorted Product show Only
  const sortProducts = () => {
    let filterProductCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(filterProductCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);
  return (
    <main className="mt-30 px-5 md:px-10 lg:px-20">
      {/* --- FILTER SECTION HEADING + TOGGLE BUTTON --- */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">FILTERS</h2>

          {/* 🌟 NEW CODE: Mobile toggle button */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="md:hidden px-4 py-2 border border-gray-400 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer transition"
          >
            {showFilter ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* --- FILTER BOXES --- */}
        {/* 🌟 NEW CODE: Visible toggle for mobile, always visible on desktop */}
        <div
          className={`space-y-6 md:space-y-0 md:flex md:justify-center md:items-center md:gap-10 md:items-center  ${
            showFilter ? "block" : "hidden"
          } md:flex`}
        >
          {/* --- CATEGORIES BOX --- */}
          <div className="border border-gray-300 p-5 w-60 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              CATEGORIES
            </h3>
            <div className="flex flex-col gap-2 text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Men"
                  className="accent-black w-4 h-4"
                  onChange={toggleCategory}
                />
                Men
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Women"
                  className="accent-black w-4 h-4"
                  onChange={toggleCategory}
                />
                Women
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Kids"
                  className="accent-black w-4 h-4"
                  onChange={toggleCategory}
                />
                Kids
              </label>
            </div>
          </div>

          {/* --- TYPE BOX (NEW CODE) --- */}
          <div className="border border-gray-300 p-5 w-60 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">TYPE</h3>
            <div className="flex flex-col gap-2 text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Topwear"
                  className="accent-black w-4 h-4"
                  onChange={toggleSubCategory}
                />
                Topwear
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Bottomwear"
                  className="accent-black w-4 h-4"
                  onChange={toggleSubCategory}
                />
                Bottomwear
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Winterwear"
                  className="accent-black w-4 h-4"
                  onChange={toggleSubCategory}
                />
                Winterwear
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Title End Drop down Menu  */}
      <section className="mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Title */}
          <Title text1={"ALL"} text2={"COLLECTION"} />

          {/* Sort Dropdown */}
          <div className="flex items-center md:justify-end justify-center w-full md:w-auto">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 w-[70%] sm:w-64 md:w-auto focus:outline-none focus:ring-2 cursor-pointer"
            >
              <option value="relevance">Sort by: Relevance</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* All products show in collection pages */}
      <section className=" mt-5 flex justify-around flex-wrap items-center gap-5">
        {filterProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            img={item.img[0]}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Collection;
