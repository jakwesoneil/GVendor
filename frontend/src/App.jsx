import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to GVendor!</h2>
      <Home/> 
    </>
  )
}

export default App
