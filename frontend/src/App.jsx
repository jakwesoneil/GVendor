import { useState } from 'react'
import './App.css'
import Home from './Home'
import EmployeesView from './component/employee/EmployeesView'
import NavBar from './component/common/NavBar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddEmployee from './component/employee/AddEmployee'
import EditEmployee from './component/employee/EditEmployee';
import EmployeeProfile from './component/employee/EmployeeProfile'

import AddVendor from './component/vendor/AddVendor'
import EditVendor from './component/vendor/EditVendor'
import VendorsView from './component/vendor/VendorsView'
import VendorProfile from './component/vendor/VendorProfile'

import ProductsView from './component/Product/ProductsView'
import AddProduct from './component/Product/AddProduct'
import EditProduct from './component/Product/EditProduct'

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
            <Route exact path="/add-employees" element={<AddEmployee />}> </Route>
            <Route exact path="/edit-employee/:id" element={<EditEmployee />}> </Route>
            <Route exact path="/employee-profile/:id" element={<EmployeeProfile />}> </Route>
            
            <Route exact path="/view-vendors" element={<VendorsView />}> </Route>
            <Route exact path="/add-vendors" element={<AddVendor />}> </Route>
            <Route exact path="/edit-vendor/:id" element={<EditVendor />}> </Route>
            <Route exact path="/vendor-profile/:id" element={<VendorProfile />}> </Route>

            <Route exact path="/view-products" element={<ProductsView />}> </Route>
            <Route exact path="/add-products" element={<AddProduct />}> </Route>
            <Route exact path="/edit-product/:id" element={<EditProduct />}> </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
