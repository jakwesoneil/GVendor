import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
    const [employeeCount, setEmployeeCount] = useState(0);

    useEffect(() => {
        const fetchEmployeeCount = async () => {
            try {
                const response = await axios.get('http://localhost:9192/employees/count');
                setEmployeeCount(response.data);
            } catch (error) {
                console.error("Error fetching employee count:", error);
            }
        };

        fetchEmployeeCount();
    }, []);

    return (
        <div className="bg-blue-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <h2 className="mt-5 text-center text-white mb-5">Employee Dashboard</h2>
                <div className="text-white text-center">
                    <h3>Total Employees: {employeeCount}</h3>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
