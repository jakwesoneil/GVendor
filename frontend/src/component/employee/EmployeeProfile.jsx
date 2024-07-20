import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeeProfile = () => {
	const { id } = useParams();

	const [employee, setEmployee] = useState({firstName: "",lastName: "",email: "",department: ""});

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:9192/employees/employee/${id}`
		);
		setEmployee(result.data);
	};
  return (

    <section className="py-10">
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center">
                <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-4 mb-4">
                    <div className="px-6 py-4">
                        <div className="card-body text-center">
                            <img className="rounded-full mx-auto w-32"
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"/>
                            <h5 className="mt-4 text-xl font-semibold text-center">
                                {`${employee.firstName} ${employee.lastName}`}
                            </h5>
                            <div className="flex justify-center mt-2">
                                <button className="btn btn-primary mr-2">
                                    Call
                                </button>
                                <button className="btn btn-warning">
                                    Message
                                </button>
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
                                        <h5 className="font-semibold">First Name</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{employee.firstName}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-2">
                                    <div className="w-3/5">
                                        <h5 className="font-semibold">Last Name</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{employee.lastName}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-2">
                                    <div className="w-3/5">
                                        <h5 className="font-semibold">Email</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{employee.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center mb-2">
                                    <div className="w-3/5">
                                        <h5 className="font-semibold">Department</h5>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="text-muted mb-0">{employee.department}</p>
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
  


export default EmployeeProfile