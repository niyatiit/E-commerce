  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { toast } from "react-toastify";
  import { backendUrl, currency } from "../App";

  const List = () => {
    const [list, setList] = useState([]);
  

    const fetchList = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/product/list");
        // console.log(response)
        if (response.data.success) {
          setList(response.data.products);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Product List is not available");
      }
    };


    const removeProduct = async (id) =>{
      try{
        const token = localStorage.getItem("token");
        const response = await axios.post(backendUrl+'/api/product/remove' , {id} ,{headers:{token}})

        if(response.data.success)
        {
          toast.success("Product Removed Successfully")
          await fetchList()
        }
      }
      catch(error)
      {
        console.log(error)
        toast.error("Not Removed the product")
      }
    }
    useEffect(() => {
      fetchList();
    }, []);
    return (
      <>
        <div className="p-6 bg-gray-50 min-h-screen relative top-25 left-60 w-[80%]">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            All Products List
          </h2>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="py-3 px-5 text-left font-medium">Image</th>
                  <th className="py-3 px-5 text-left font-medium">Name</th>
                  <th className="py-3 px-5 text-left font-medium">Category</th>
                  <th className="py-3 px-5 text-left font-medium">Price</th>
                  <th className="py-3 px-5 text-center font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {list?.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition duration-200"
                  >
                    <td className="py-3 px-5">
                      <img
                        src={item.image?.[0]}
                        alt="product"
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                    </td>
                    <td className="py-3 px-5 text-gray-800">{item.name}</td>
                    <td className="py-3 px-5 text-gray-600">{item.category}</td>
                    <td className="py-3 px-5 text-gray-800">
                      {currency}
                      {item.price}
                    </td>
                    <td
                      onClick={() => removeProduct(item._id)}
                      className="py-3 px-5 text-center text-red-500 font-semibold cursor-pointer"
                    >
                      X
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  export default List;
