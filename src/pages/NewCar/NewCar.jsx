import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const NewCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: 0,
    color: '',
    mileage: 0,
    id: uuidv4().replaceAll('-', '')
  })

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <form>
      <label>
        Make
        <input 
          type="text" 
          name="make" 
          placeholder="Make"
          value={formData.make}
          onChange={handleChange}
        />
      </label>
      <label>
        Model
        <input 
          type="text" 
          name="model" 
          placeholder="Model" 
          value={formData.model}
          onChange={handleChange}
        />
      </label>
      <label>
        Color
        <input 
          type="text" 
          name="color" 
          placeholder="Color" 
          value={formData.color}
          onChange={handleChange}
        />
      </label>
      <label>
        Year
        <input 
          type="number" 
          name="year" 
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
        />
      </label>
      <label>
        Mileage
        <input 
        type="number" 
          name="mileage" 
          placeholder="Mileage"
          value={formData.mileage}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Car 🚗</button>
    </form>
  )
}

export default NewCar