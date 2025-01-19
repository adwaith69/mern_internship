import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Addlog from './components/Addlog'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/home' element={<Home  />} />
        <Route path='/add' element={<Addlog />} />

      </Routes>
    </>
  )
}

export default App
