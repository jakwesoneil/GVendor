import React from 'react'

const EmployeesView = () => {

  const [employees, setEmployees] = useState([]);
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