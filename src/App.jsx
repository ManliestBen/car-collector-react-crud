// npm modules
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import NewCar from './pages/NewCar/NewCar'
import Cars from './pages/Cars/Cars'

// components
import NavBar from './components/NavBar/NavBar'

// css
import './App.css'

function App() {
  const [cars, setCars] = useState([])

  const handleAddCar = carData => {
    setCars([...cars, carData])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/cars' element={<Cars cars={cars} />}/>
        <Route 
          path='/cars/new' 
          element={<NewCar handleAddCar={handleAddCar} />} 
        />
      </Routes>
    </>
  )
}

export default App
