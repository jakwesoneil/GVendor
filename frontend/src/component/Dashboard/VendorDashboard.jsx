import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VendorDashboard = () => {
    const [vendorCount, setVendorCount] = useState(0);

    useEffect(() => {
        const fetchVendorCount = async () => {
            try {
                const response = await axios.get('http://localhost:9192/vendors/count');
                setVendorCount(response.data);
            } catch (error) {
                console.error("Error fetching vendor count:", error);
            }
        };

        fetchVendorCount();
    }, []);

    return (
        <div className="bg-red-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h2 className="mt-5 text-center text-white mb-5">Vendor Dashboard</h2>
                <div className="text-white text-center">
                    <h3>Total Vendors: {vendorCount}</h3>
                </div>
            </div>
        </div>
    );
};

export default VendorDashboard;
