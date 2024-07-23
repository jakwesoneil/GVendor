import React from 'react'

const SearchEmployee = ({search, setSearch}) => {
  return (
    <div className= "">
        <form onSubmit={(e)=> e.preventDefault()}>
            <input className = "px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type = 'search' role = 'searchbox' placeholder= 'Search an Employee...' value= {search} onChange={(e)=> setSearch(e.target.value)}>
            
            </input>
        </form>
    </div>
  )
}

export default SearchEmployee