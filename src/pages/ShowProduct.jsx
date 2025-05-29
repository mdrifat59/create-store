import axios from "axios";
import { useEffect, useState } from "react";

const ShowProduct = () => {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get('https://glore-bd-backend-node-mongo.vercel.app/api/product');
        let items = response.data?.data;
        console.log(items);

        setProducts(items);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className=" w-[1300px]  mx-auto   p-6">
        <h2 className="text-4xl font-Roboto-Medium font-bold mb-10 text-center ">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
            >
              <img
                src={product.images?.[0]?.secure_url}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-500 mb-2">{product.category?.name}</p>
                <p className="text-green-600 font-bold text-xl">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}
export default ShowProduct