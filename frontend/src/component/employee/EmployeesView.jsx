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
        <table className="min-w-full bg-white shadow-md rounded my-0">
          <thead>
            <tr className="bg-blue-500">
              <th className="text-center py-2 px-3 text-white">Id</th>
              <th className="text-center py-2 px-3 text-white">FirstName</th>
              <th className="text-center py-2 px-3 text-white">LastName</th>
              <th className="text-center py-2 px-3 text-white">Email</th>
              <th className="text-center py-2 px-3 text-white">Department</th>
              <th className="text-center py-2 px-3 text-white">Actions</th>
              <th className="text-center py-2 px-3 text-white">Actions</th>
              <th className="text-center py-2 px-3 text-white">Actions</th> {/*added for delete */}
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row" key ={index}>
                  {index + 1}
                </th>

                <td className="border py-2 px-3 text-center text-blue-900">{employee.firstName}</td>
                <td className="border py-2 px-3 text-center text-blue-900">{employee.lastName}</td>
                <td className="border py-2 px-3 text-center text-blue-900">{employee.email}</td>
                <td className="border py-2 px-3 text-center text-blue-900">{employee.department}</td>
                <td className="border py-2 px-3 text-center text-blue-900">
                  <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">View</button></td>
                <td className="border py-2 px-3 text-center">
                  <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Update</button></td>
                <td className="border py-2 px-3 text-center">
                  <button className=" bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Delete</button></td>
                {/*</tbody><td><button>Delete</button></td>*/}
              </tr>
            ))}
          </tbody>
        </table>
    </section>
  )
}

export default EmployeesView