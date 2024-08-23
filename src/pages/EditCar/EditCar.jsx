import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditCar = ({ handleUpdateCar }) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  console.log(state)

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleUpdateCar(formData)
  }

  return (
    <>
      <h1>Edit Car</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Save 🚗</button>
      </form>
    </>
  )
}

export default EditCar