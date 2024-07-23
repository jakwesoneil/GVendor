import React, {useState} from 'react'
import { Link } from 'react-router-dom'; 
import Home from '../../Home';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div>
        <nav className="bg-white">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link  className="flex items-center space-x-3 rtl:space-x-reverse" to="https://globe.com.ph">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Globe_Telecom_logo.svg/1200px-Globe_Telecom_logo.svg.png" className="h-8" alt="Globe Logo" />
                    <span className="self-center text-2xl  font-semibold whitespace-nowrap text-blue-900">GVendor</span>
                </Link>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <a href="tel:5541251234" className="text-sm  text-blue-900 hover:underline">(555) 412-1234</a>

                    <div className="relative">
                        <button className="flex text-sm bg-blue-800 rounded-full md:me-0 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600" 
                        type="button" id="user-menu-button" aria-expanded={isDropdownOpen} onClick={toggleDropdown}>
                            
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="/src/assets/pfp.jpg" alt="user photo" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-blue-800 divide-y divide-blue-100 rounded-lg shadow-lg dark:bg-blue-900 dark:divide-blue-400" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Jacques Gonzalez</span>
                                <span className="block text-sm text-gray-500 truncate dark:text-blue-200">name@globe.com.ph</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white">Home</a>
                                </li>
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white">View Employees</a>
                                </li>
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white">Add Employee</a>
                                </li>
                                <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                            </div>
                        )}
                        </div>
                  
                </div>
            </div>
        </nav>

    
        <nav className="bg-blue-600 ">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <Link className="text-white hover:underline" aria-current="page" to={"/"} >Home</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:underline" aria-current="page" to={"/view-employees"} >View All Employees</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:underline" aria-current="page" to={"/add-employees"} >Add an Employee</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:underline" aria-current="page" to={"/view-vendors"} >View Vendors</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:underline" aria-current="page" to={"/add-vendors"} >Add a Vendor</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:underline" aria-current="page" to={"/view-products"} >View Products</Link>
                        </li>
                        <li>
                            <Link className="text-white hover:underline" aria-current="page" to={"/add-products"} >Add a Product</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar