import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductsItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productCopy.slice(0, 5));
    }
  }, []);
  return (
    <>
      <main className="mt-10">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />

        {/* Related Product Here */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
          {related.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              img={item.img[0]}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default RelatedProduct;
