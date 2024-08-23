// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import NewCar from './pages/NewCar/NewCar'
import Cars from './pages/Cars/Cars'

// components
import NavBar from './components/NavBar/NavBar'

// css
import './App.css'

function App() {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()

  const handleAddCar = carData => {
    setCars([...cars, carData])
    navigate('/cars')
  }

  const handleRemoveCar = carId => {
    setCars(cars.filter(car => car.id !== carId))
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path='/cars' 
          element={
            <Cars 
              cars={cars} 
              handleRemoveCar={handleRemoveCar} 
            />
          }
        />
        <Route 
          path='/cars/new' 
          element={<NewCar handleAddCar={handleAddCar} />} 
        />
      </Routes>
    </>
  )
}

export default App
