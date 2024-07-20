import { useState } from 'react'
import './App.css'
import Home from './Home'
import EmployeesView from './component/employee/EmployeesView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "bg-blue-950 min-h-screen">
        <h2>Welcome to GVendor!</h2>
        <Home/> 
        <EmployeesView/>
      </div>
    </>
  )
}

export default App
