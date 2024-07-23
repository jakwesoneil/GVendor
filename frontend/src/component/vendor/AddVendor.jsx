import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddVendor = () => {

    let navigate = useNavigate();

    const [vendor, setVendor] = useState({vendorName: "", vendorLogo: "",country: "", yearFounded: "", productCount:0, contactPersonEmail: ""});
    const{vendorName, vendorLogo, country, yearFounded, productCount, contactPersonEmail} = vendor;

    const handleInputChange = (e) => {
        setVendor({...vendor, [e.target.name]: e.target.value});
    };

    const saveVendor = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9192/vendors", vendor);
        navigate("/view-vendors");
    };


  return (
    <div className= "bg-blue-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
        <h2 className="mt-5 text-center text-white mb-5">Add Vendor</h2>
            <form className= "space-y-6" onSubmit = {(e)=> saveVendor(e)}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='vendorName'>Vendor Name</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="vendorName" id ="vendorName" required value={vendorName} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='vendorLogo'>Vendor Logo</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="vendorLogo" id ="vendorLogo" required value={vendorLogo} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='country'>Country</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="country" id ="country" required value={country} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='yearFounded'>Year Founded</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="yearFounded" id ="yearFounded" required value={yearFounded} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='contactPersonEmail'>Contact Person Email</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="contactPersonEmail" id ="contactPersonEmail" required value={contactPersonEmail} onChange={(e) => handleInputChange(e)}>
                </input>                


                <div className="mb-5 flex justify-between">
                    <div>
                        <button
							type="submit"
							className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
							Save
						</button>
					</div>
                
                    <div className="">
						<Link
							to={"/view-vendors"}
							type="submit"
							className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg inline-block focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
							Cancel
						</Link>
					</div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddVendor