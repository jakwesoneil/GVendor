import React from 'react'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import VendorDashboard from './component/Dashboard/VendorDashboard'
import ProductDashboard from './component/Dashboard/ProductDashboard'

const Home = () => {
  return (
    <div>
        <EmployeeDashboard/>
        <VendorDashboard/>
        <ProductDashboard/>
    </div>
  )
}

export default Home