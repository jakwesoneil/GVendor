import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../../styles.css';
import { Link } from 'react-router-dom';
import SearchProduct from '../common/SearchProduct';


const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);
  
  const loadProducts = async () => {
    const result = await axios.get("http://localhost:9192/products", {
      validateStatus: () => {
        return true;
      }
    }

    );
    if(result.status === 302){
      setProducts(result.data); //or response?
    }
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9192/products/delete/${id}`);
    loadProducts();
  }
  
  return (
    <section className="max-w-screen-xl px-4 py-3 mx-auto mt-1 ">
      <SearchProduct search = {search} setSearch={setSearch} />
      
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white shadow-md rounded my-0">
          <thead>
            <tr className="bg-blue-500">
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Id</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Product Name</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Product Logo</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Product Type</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm">Year Acquired</th>
              <th className="py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-white text-sm" colSpan="3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {
            products.filter((prd) =>
              Object.values(prd).some((field) =>
                typeof field === 'string' && field.toLowerCase().includes(search.toLowerCase())
              )
            )
            //products.filter((prd) => prd.firstName.toLowerCase().includes(search))


 

            .map((product, index) => (
              <tr className ="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm" key={product.id}>
                <th scope="row" key ={index}>
                  {index + 1}
                </th>

                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{product.productName}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{product.productLogo}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{product.productType}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">{product.yearAcquired}</td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center text-blue-900 text-sm">
                  <Link to = {`/product-profile/${product.id}`} className="bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                    View 
                  </Link>
                </td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
                  
                  <Link to = {`/edit-product/${product.id}`} className="bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded">
                    Edit
                  </Link>
                </td>
                <td className="border py-2 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-center">
                  <button className=" bg-blue-500 hover:bg-blue-900 text-center text-white text-sm font-bold py-2 px-4 rounded"
                    onClick = {() => handleDelete(product.id)}>
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

export default ProductsView