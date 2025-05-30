import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowProduct = () => {

  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get('https://glore-bd-backend-node-mongo.vercel.app/api/product');
        let items = response.data?.data;
        setProducts(items);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="h-screen flex justify-center items-center ">Loading ...</div>
  }

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold font-Roboto-Medium text-center mb-10">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              to={`/ShowProduct/${product._id}`}
              key={product._id}
              className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden"
            >
              <img
                src={product.images?.[0]?.secure_url}
                alt={product.name}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold font-Roboto-Regular mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 font-Roboto-Regular mb-2">
                  {product.category?.name}
                </p>
                <p className="text-green-600 font-bold text-xl font-Roboto-Regular">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default ShowProduct