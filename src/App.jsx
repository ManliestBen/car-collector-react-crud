// npm modules
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import NewCar from './pages/NewCar/NewCar'

// components
import NavBar from './components/NavBar/NavBar'

// css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path='/cars' /> */}
        <Route path='/cars/new' element={<NewCar />} />
      </Routes>
    </>
  )
}

export default App
