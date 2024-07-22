import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles.css';
import { Link } from 'react-router-dom';
import SearchVendor from '../common/SearchVendor';


const VendorsView = () => {
  const [vendors, setVendors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadVendors();
  }, []);
  
  const loadVendors = async () => {
    const result = await axios.get("http://localhost:9192/vendors", {
      validateStatus: () => {
        return true;
      }
    }

    );
    if(result.status === 302){
      setVendors(result.data); //or response?
    }
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9192/vendors/delete/${id}`);
    loadVendors();
  }
  
  return (
    <section className="max-w-screen-xl px-4 py-3 mx-auto mt-1 ">
      <SearchVendor search = {search} setSearch={setSearch} />
      
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white shadow-md rounded my-0">
          <thead>
            <tr className="bg-blue-500">
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Id</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">VendorName</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">VendorLogo</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Country</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">YearFounded</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">ProductCount</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">ContactPersonEmail</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm" colSpan="3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
            //vendors.filter((vndr) => vndr.firstName.toLowerCase().includes(search))
            vendors.filter((vndr) =>
              Object.values(vndr).some((field) =>
                typeof field === 'string' && field.toLowerCase().includes(search.toLowerCase())
              )
            )

            .map((vendor, index) => (
              <tr className ="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm" key={vendor.id}>
                <th scope="row" key ={index}>
                  {index + 1}
                </th>

                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{vendor.vendorName}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{vendor.vendorLogo}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{vendor.country}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{vendor.yearFounded}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{vendor.productCount}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{vendor.contactPersonEmail}</td>                
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">
                  <Link to = {`/vendor-profile/${vendor.id}`} className="bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                    View 
                  </Link>
                </td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
                  
                  <Link to = {`/edit-vendor/${vendor.id}`} className="bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                    Edit
                  </Link>
                </td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
                  <button className=" bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded"
                    onClick = {() => handleDelete(vendor.id)}>
                    Delete
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default VendorsView