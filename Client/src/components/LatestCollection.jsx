import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductsItem from './ProductsItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 45));
  }, [products]);

  return (
    <main>
      <Title text1={"LATEST"} text2={"COLLECTION"} />
      <p className="p-2 text-center m-5">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod
        aliquid nihil autem dolore.
      </p>

      {/* Rendering Products */}
      <div className="flex flex-wrap gap-5 p-5 m-5 justify-center items-center">
        {
            latestProducts.map((item,index)=>(
                <ProductsItem key={index} id={item._id} img={item.image[0]} name={item.name} description={item.description} price={item.price} />
            ))
        }
      </div>
    </main>
  );
};

export default LatestCollection;
