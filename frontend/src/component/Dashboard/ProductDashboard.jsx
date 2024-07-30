import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDashboard = () => {
    const [productCount, setProductCount] = useState(0);

    useEffect(() => {
        const fetchProductCount = async () => {
            try {
                const response = await axios.get('http://localhost:9192/products/count');
                setProductCount(response.data);
            } catch (error) {
                console.error("Error fetching product count:", error);
            }
        };

        fetchProductCount();
    }, []);

    return (
        <div className="bg-green-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h2 className="mt-5 text-center text-white mb-5">Product Dashboard</h2>
                <div className="text-white text-center">
                    <h3>Total Products: {productCount}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductDashboard;
