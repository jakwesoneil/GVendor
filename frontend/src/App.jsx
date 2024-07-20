import { useState } from 'react'
import './App.css'
import Home from './Home'
import EmployeesView from './component/employee/EmployeesView'
import NavBar from './component/common/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "bg-blue-900 min-h-screen">
        <NavBar/>
        <h2>Welcome to GVendor!</h2>
        <Home/> 
        <EmployeesView/>
      </div>
    </>
  )
}

export default App
