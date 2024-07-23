import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditProduct = () => {

    let navigate = useNavigate();

    const {id} = useParams();

    const [product, setProduct] = useState({productName: "", productLogo: "", productType: "", yearAcquired: "",});
    
    const { productName, productLogo, productType, yearAcquired } = product;

    useEffect(() => {
        loadProduct();
    }, []);
      
      const loadProduct = async () => {
        const result = await axios.get(`http://localhost:9192/products/product/${id}`);
        setProduct(result.data); //or response?
      }

    const handleInputChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9192/products/update/${id}`, product);
        navigate("/view-products");
    };


  return (
    <div className= "bg-blue-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
            <form className= "space-y-6" onSubmit = {(e)=> updateProduct(e)}>
            <h2 className="mt-5 text-center text-white mb-5">Edit Product</h2>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='productName'>Product Name</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="productName" id ="productName" required value={productName} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='productLogo'>Product Logo</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="productLogo" id ="productLogo" required value={productLogo} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='productType'>Product Type</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="productType" id ="productType" required value={productType} onChange={(e) => handleInputChange(e)}>
                </input>

                <div className="mb-5">
                    <label className="block text-sm font-medium text-white" htmlFor='yearAcquired'>Year Acquired</label>
                </div>
                <input className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" type ="text" name ="yearAcquired" id ="yearAcquired" required value={yearAcquired} onChange={(e) => handleInputChange(e)}>
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
							to={"/view-products"}
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

export default EditProduct