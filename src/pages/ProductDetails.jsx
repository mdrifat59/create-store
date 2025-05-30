import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let { id } = useParams()
    let [product, setProduct] = useState(null)
    let [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await axios.get('https://glore-bd-backend-node-mongo.vercel.app/api/product');
                let items = response.data?.data;
                let targetProduct = items.find(item => item._id === id)
                setProduct(targetProduct)
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
            finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div className="h-screen flex justify-center items-center ">Loading ...</div>
    }

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="w-full flex flex-col gap-4">
                    <img
                        src={product.images[0].optimizeUrl}
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded-2xl shadow-lg cursor-pointer"
                        onClick={() => setShowModal(true)}
                    />
                    <video
                        controls
                        src={product.video.secure_url}
                        className="w-full h-[300px] object-cover rounded-2xl shadow-md"
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-Roboto-Medium font-bold text-gray-800">{product.name}</h1>
                    <p className="font-Roboto-Reguler capitalize text-lg  text-gray-600">{product.description}</p>
                    <div>
                        <span className="font-Roboto-Medium text-sm text-gray-500">Category:</span>
                        <p className="font-Roboto-Reguler text-md font-medium text-indigo-600">{product.category.name}</p>
                    </div>
                    <div>
                        <span className="font-Roboto-Medium text-sm text-gray-500">Price:</span>
                        <p className="font-Roboto-Reguler text-2xl font-semibold text-green-600">${product.price}</p>
                    </div>
                    <div className="mt-4">
                        <button className="px-6 py-3 font-Roboto-Medium bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer font-medium rounded-xl shadow-lg transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                    <div className="text-sm text-gray-500 mt-4 flex justify-between">
                        <p className='font-Roboto-Reguler'>Created At: {new Date(product.createdAt).toLocaleDateString()}</p>
                        <p className='font-Roboto-Reguler'>Updated At: {new Date(product.updatedAt).toLocaleDateString()}</p>
                    </div>
                </div>
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                        <div className=" max-w-3xl w-full p-4">
                            <img
                                src={product.images[0].secure_url}
                                alt="Enlarged"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-20   text-red-500  border border-red-500 rounded-full px-1.5 shadow-md cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails