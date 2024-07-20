import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles.css';
import { Link } from 'react-router-dom';


const EmployeesView = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, [])
  
  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:9192/employees", {
      validateStatus: () => {
        return true;
      }
    }

    );
    if(result.status === 302){
      setEmployees(result.data); //or response?
    }
  }
  
  return (
    <section className="max-w-screen-xl px-4 py-3 mx-auto mt-5">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded my-0">
          <thead>
            <tr className="bg-blue-500">
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Id</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">FirstName</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">LastName</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Email</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Department</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm" colSpan="3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr className ="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm" key={employee.id}>
                <th scope="row" key ={index}>
                  {index + 1}
                </th>

                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{employee.firstName}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{employee.lastName}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{employee.email}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{employee.department}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">
                  <Link to = {`/employee-profile/${employee.id}`} className="bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                    View
                  </Link>
                </td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
                  
                  <Link to = {`/edit-employee/${employee.id}`} className="bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                    Edit
                  </Link>
                </td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
                  <button className=" bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default EmployeesView