import { useState } from 'react'
import './App.css'
import Home from './Home'
import EmployeesView from './component/employee/EmployeesView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to GVendor!</h2>
      <Home/> 
      <EmployeesView/>
    </>
  )
}

export default App
