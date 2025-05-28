import React from 'react'
import { FaEarthAsia } from 'react-icons/fa6'
import { LuMonitor } from 'react-icons/lu'
import { MdCategory, MdCurrencyExchange, MdOutlineEditLocation, MdOutlineEmail } from 'react-icons/md'

const CreateStore = () => {
    return (
        <>
            <div className="w-full h-screen flex bg-[#f3f4f6] justify-center items-center ">
                <div className="w-[950px] bg-[#ffffff] rounded-xl  p-7">
                    <h1 className='font-Roboto-Medium text-3xl'>Create a store</h1>
                    <h3 className='mt-5 mb-3 text-mateBlack'>Add your basic store information and complete the setup</h3>
                    <hr className=' text-[#e5e7eb]' />
                    <div className="mt-5">
                        <div className="flex justify-between items-center mt-5">
                            <div className="w-[49%] flex  gap-2">
                                <div className='mt-1'>
                                    <LuMonitor className='text-iconBlue' />
                                </div>
                                <div>
                                    <h3 className='font-Roboto-Medium text-headBlack'>Give your online store a name</h3>
                                    <p className='font-Roboto-Reguler text-sm text-mateBlack'>A great store name is a big part of your success. Make sure it aligns with your brand and products.</p>
                                </div>
                            </div>
                            <div className="w-[49%] ">
                                <input type="text" className='w-full border border-borderColor rounded-md p-2 outline-none' placeholder="How'd you like to call your store?" />
                            </div>
                        </div>


                        <div className="flex justify-between items-center mt-5">
                            <div className="w-[49%] flex  gap-2">
                                <div className='mt-1'>
                                    <FaEarthAsia className='text-iconBlue' />
                                </div>
                                <div>
                                    <h3 className='font-Roboto-Medium text-headBlack'>Your online store subdomain</h3>
                                    <p className='font-Roboto-Reguler text-sm text-mateBlack'>A SEO-friendly store name is a crucial part of your success. Make sure it aligns with your brand and products.</p>
                                </div>
                            </div>
                            <div className="w-[49%] flex ">
                                <input type="text" className='w-full border border-borderColor p-2 rounded-md outline-none' placeholder="enter you domain name " />
                                <span className="bg-gray-100 p-2 rounded-r border border-l-0 border-gray-300">
                                    .expressitbd.com
                                </span>
                            </div>
                        </div>


                        <div className="flex justify-between items-center mt-5">
                            <div className="w-[49%] flex  gap-2">
                                <div className='mt-1'>
                                    <MdOutlineEditLocation className='text-iconBlue' />
                                </div>
                                <div>
                                    <h3 className='font-Roboto-Medium text-headBlack'>Give your online store a name</h3>
                                    <p className='font-Roboto-Reguler text-sm text-mateBlack'>A great store name is a big part of your success. Make sure it aligns with your brand and products.</p>
                                </div>
                            </div>
                            <div className="w-[49%] ">
                                <select className='w-full border border-borderColor rounded-md p-2 outline-none'>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Japan">Japan</option>
                                    <option value="China">China</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Russia">Russia</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-5">
                            <div className="w-[49%] flex  gap-2">
                                <div className='mt-1'>
                                    <MdCategory className='text-iconBlue' />
                                </div>
                                <div>
                                    <h3 className='font-Roboto-Medium text-headBlack'>What's your Category?</h3>
                                    <p className='font-Roboto-Reguler text-sm text-mateBlack'>Set your store's default location so we can optimize store access and speed for your customers.</p>
                                </div>
                            </div>
                            <div className="w-[49%] ">
                                <select className='w-full border border-borderColor rounded-md p-2 outline-none'>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Home & Kitchen">Home & Kitchen</option>
                                    <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                                    <option value="Sports & Outdoors">Sports & Outdoors</option>
                                    <option value="Toys & Games">Toys & Games</option>
                                    <option value="Books">Books</option>
                                    <option value="Automotive">Automotive</option>
                                    <option value="Health & Wellness">Health & Wellness</option>
                                    <option value="Groceries">Groceries</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-5">
                            <div className="w-[49%] flex  gap-2">
                                <div className='mt-1'>
                                    <MdCurrencyExchange className='text-iconBlue' />
                                </div>
                                <div>
                                    <h3 className='font-Roboto-Medium text-headBlack'>Choose store currency</h3>
                                    <p className='font-Roboto-Reguler text-sm text-mateBlack'>This is the main currency you wish to sell in.</p>
                                </div>
                            </div>
                            <div className="w-[49%] ">
                                <select className='w-full border border-borderColor rounded-md p-2 outline-none'>
                                    <option value="USD">USD (US Dollar)</option>
                                    <option value="EUR">EUR (Euro)</option>
                                    <option value="GBP">GBP (British Pound)</option>
                                    <option value="JPY">JPY (Japanese Yen)</option>
                                    <option value="CNY">CNY (Chinese Yuan)</option>
                                    <option value="INR">INR (Indian Rupee)</option>
                                    <option value="AUD">AUD (Australian Dollar)</option>
                                    <option value="CAD">CAD (Canadian Dollar)</option>
                                    <option value="CHF">CHF (Swiss Franc)</option>
                                    <option value="SGD">SGD (Singapore Dollar)</option>
                                    <option value="HKD">HKD (Hong Kong Dollar)</option>
                                    <option value="KRW">KRW (South Korean Won)</option>
                                    <option value="SEK">SEK (Swedish Krona)</option>
                                    <option value="NZD">NZD (New Zealand Dollar)</option>
                                    <option value="BDT">BDT (Taka)</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-5">
                            <div className="w-[49%] flex  gap-2">
                                <div className='mt-1'>
                                    <MdOutlineEmail className='text-iconBlue' />
                                </div>
                                <div>
                                    <h3 className='font-Roboto-Medium text-headBlack'>Store contact email</h3>
                                    <p className='font-Roboto-Reguler text-sm text-mateBlack'>This is the email you'll use to send notifications to and receive orders from customers.</p>
                                </div>
                            </div>
                            <div className="w-[49%] ">
                                <input type="email" className='w-full border border-borderColor rounded-md p-2 outline-none' placeholder="You@example.com" />
                            </div>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button className='font-Roboto-Reguler py-2 px-5 cursor-pointer rounded-xl text-white bg-violet-500'>Create Store</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateStore