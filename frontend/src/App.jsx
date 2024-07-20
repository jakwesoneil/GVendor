import { useState } from 'react'
import './App.css'
import Home from './Home'
import EmployeesView from './component/employee/EmployeesView'
import NavBar from './component/common/NavBar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "bg-blue-900 min-h-screen">
        
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/view-employees" element={<EmployeesView />}> </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
