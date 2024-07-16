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
    <section>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row" key ={index}>
                  {index + 1}
                </th>

                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>View</td>
                <td>Update</td>
                <td>Delete</td>
                {/*</tbody><td><button>Delete</button></td>*/}
              </tr>
            ))}
          </tbody>
        </table>
    </section>
  )
}

export default EmployeesView