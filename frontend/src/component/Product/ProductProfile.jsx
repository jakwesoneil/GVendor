import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductProfile = () => {
	const { id } = useParams();

	const [product, setProduct] = useState({productName: "", productLogo: "",productType: "", yearAcquired: ""});

	useEffect(() => {
		loadProduct();
	}, []);

	const loadProduct = async () => {
		const result = await axios.get(
			`http://localhost:9192/products/product/${id}`
		);
		setProduct(result.data);
	};
  return (

    <section className="py-10">
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center">
                <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-4 mb-4">
                    <div className="px-6 py-4">
                        <div className="card-body text-center">
                            <img className="rounded-full mx-auto w-32"
                            src="https://i.pinimg.com/474x/a9/16/bc/a916bc5494815c4ed63714e6b6df57bf.jpg"/>
                            <h5 className="mt-4 text-xl font-semibold text-center">
                                {`${[product.productName]}`}
                            </h5>
                            <div className="flex justify-center mt-2">
                            <Link to = {`/edit-product/${product.id}`} className="bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                                Edit
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl rounded-lg overflow-hidden shadow-lg bg-white mx-5 mb-4">
                    <div className="px-20 py-5">
                        <div className="border-b border-blue-900 mb-4">
                            <h4 className="text-lg font-semibold text-blue-800">Details</h4>

                            <div className="mb-5 mt-5">
                                <div className="flex items-center mb-2">
                                    <div className="w-3/5">
                                        <h5 className="font-semibold">Product Name</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{product.productName}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-2">
                                    <div className="w-3/5">
                                        <h5 className="font-semibold">Product Logo</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{product.productLogo}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-2">
                                    <div className="w-3/5">
                                        <h5 className="font-semibold">Product Type</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{product.productType}</p>
                                    </div>
                                </div>
                                

                                <div className="flex items-center mb-2">
                                    <div className="w-3/5">
                                        <h5 className="font-semibold">Year Acquired</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{product.yearAcquired}</p>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 )
};
  


export default ProductProfile