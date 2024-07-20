import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className="bg-white">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="https://globe.com.ph" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Globe_Telecom_logo.svg/1200px-Globe_Telecom_logo.svg.png" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl  font-semibold whitespace-nowrap text-blue-900">GVendor</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="tel:5541251234" className="text-sm  text-blue-900 hover:underline">(555) 412-1234</a>
                    <a href="#" className="text-sm  text-blue-900  hover:underline">Login</a>
                </div>
            </div>
        </nav>
        <nav className="bg-blue-600 ">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a href="#" className="text-white  hover:underline" aria-current="page">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline">View All Employees</a>
                        </li>
                        <li>
                            <a href="#" className="text-white  hover:underline">Add New Employees</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar