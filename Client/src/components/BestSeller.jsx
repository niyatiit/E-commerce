import { react, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);

    setBestSellers(bestProducts.slice(0, 45));
  }, [products]);

  return (
    <main>
      <Title text1={"BEST"} text2={"SELLERS"} />
      <p className="p-2 text-center m-5">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod
        aliquid nihil autem dolore.
      </p>

      {/* Rendering Products */}
      <div className="flex flex-wrap gap-5 p-5 m-5 justify-center items-center">
        {bestSellers.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            img={item.image[0]}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </main>
  );
};

export default BestSeller;
