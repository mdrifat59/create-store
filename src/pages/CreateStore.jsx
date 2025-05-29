import axios from 'axios'
import React, { useState } from 'react'
import { FaEarthAsia } from 'react-icons/fa6'
import { LuMonitor } from 'react-icons/lu'
import { MdCategory, MdCurrencyExchange, MdOutlineEditLocation, MdOutlineEmail } from 'react-icons/md'

const CreateStore = () => {

    let [form, setForm] = useState({
        name: "",
        domain: "",
        country: "Bangladesh",
        currency: "BDT",
        category: "Fashion",
        email: "",
    })
    let [domainStatus, setDomainStatus] = useState(null);
    let [errors, setErrors] = useState({});
    let [message, setMessage] = useState("");

    let handleChange = (e) => {
        let { name, value } = e.target
        setForm({ ...form, [name]: value })
        setErrors({ ...errors, [name]: "" });
    }

    let validate = () => {
        let errors = {};

        if (form.name.trim().length < 3) {
            errors.name = "Store name must be at least 3 characters.";
        }

        if (!form.domain || domainStatus !== false) {
            errors.domain = "Domain is not available. Please try another.";
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            errors.email = "Please enter a valid email address.";
        }

        return errors;
    };

    let checkDomain = () => {
        if (!form.domain) return;
        const fullDomain = `${form.domain}.expressitbd.com`;

        axios.get(`https://interview-task-green.vercel.app/task/domains/check/${fullDomain}`)
            .then((res) => {
                setDomainStatus(res.data.data.taken);
            })
            .catch(() => {
                setDomainStatus(true);
            });
    };

    let handlesubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        axios.post("https://interview-task-green.vercel.app/task/stores/create", {
            name: form.name,
            currency: form.currency,
            country: form.country,
            domain: form.domain,
            category: form.category,
            email: form.email,
        })
            .then(() => {
                setMessage("✅ Store created successfully!");
            })
            .catch(() => {
                setMessage("❌ Store creation failed.");

            });


    }
    return (
        <>
            <div className="w-full h-screen flex bg-[#f3f4f6] justify-center items-center ">
                <div className="w-[950px] bg-[#ffffff] rounded-xl  p-7">
                    <h1 className='font-Roboto-Medium text-3xl'>Create a store</h1>
                    <h3 className='mt-5 mb-3 text-mateBlack'>Add your basic store information and complete the setup</h3>
                    <hr className=' text-[#e5e7eb]' />
                    <form onSubmit={handlesubmit} className="mt-5">
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
                                <input type="text" name='name' onChange={handleChange} value={form.name} className={`w-full border ${errors.name ? ' border-red-500' : 'border-borderColor'} rounded-md p-2 outline-none`} placeholder="How'd you like to call your store?" />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                            <div className="w-[49%] relative">
                                <input type="text" name='domain' onChange={handleChange} value={form.domain} onBlur={checkDomain} className={`w-full relative  border ${domainStatus == true ? ' border-red-500' : 'border-borderColor'}   p-2 rounded-md outline-none`} placeholder="enter you domain name " />
                                <span className="absolute top-0 right-0 p-2 rounded-r">
                                    .expressitbd.com
                                </span>
                                {domainStatus == true && errors.domain && <p className="text-red-500 text-sm mt-1">{errors.domain}</p>}
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
                                <select name='country' onChange={handleChange} value={form.country} className='w-full border border-borderColor rounded-md p-2 outline-none'>
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
                                <select name='category' onChange={handleChange} value={form.category} className='w-full border border-borderColor rounded-md p-2 outline-none'>
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
                                <select name='currency' onChange={handleChange} value={form.currency} className='w-full border border-borderColor rounded-md p-2 outline-none'>
                                    <option value="BDT">BDT (Taka)</option>
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
                                <input type="text" name='email' onChange={handleChange} value={form.email} className={`w-full border  ${errors.email ? ' border-red-500' : 'border-borderColor'} rounded-md p-2 outline-none`} placeholder="You@example.com" />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button type='submit' className='font-Roboto-Reguler py-2 px-5 cursor-pointer rounded-xl text-white bg-violet-500 disabled:opacity-50 ' disabled={domainStatus === true}  >Create Store</button>
                        </div>
                        {message && <p className="text-center text-sm mt-3">{message}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateStore