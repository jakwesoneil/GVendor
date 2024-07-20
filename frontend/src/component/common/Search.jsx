import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className= "">
        <form onSubmit={(e)=> e.preventDefault()}>
            <input className = "form-control" type = 'search' role = 'searchbox' placeholder= 'Search an Employee...' value= {search} onChange={(e)=> setSearch(e.target.value)}>
            
            </input>
        </form>
    </div>
  )
}

export default Search