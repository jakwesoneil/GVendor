import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles.css';


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
    <section className="py-4">
        <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left py-2 px-3">Id</th>
              <th className="text-left py-2 px-3">FirstName</th>
              <th className="text-left py-2 px-3">LastName</th>
              <th className="text-left py-2 px-3">Email</th>
              <th className="text-left py-2 px-3">Department</th>
              <th className="text-left py-2 px-3">Actions</th>
              <th className="text-left py-2 px-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row" key ={index}>
                  {index + 1}
                </th>

                <td className="border py-2 px-3">{employee.firstName}</td>
                <td className="border py-2 px-3">{employee.lastName}</td>
                <td className="border py-2 px-3">{employee.email}</td>
                <td className="border py-2 px-3">{employee.department}</td>
                <td className="border py-2 px-3">View</td>
                <td className="border py-2 px-3">Update</td>
                <td className="border py-2 px-3">Delete</td>
                {/*</tbody><td><button>Delete</button></td>*/}
              </tr>
            ))}
          </tbody>
        </table>
    </section>
  )
}

export default EmployeesView