import { useState } from "react"


const NewCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: 0,
    color: '',
    mileage: 0
  })
  return (
    <form>
      <input type="text" name="make" placeholder="Make" />
      <input type="text" name="model" placeholder="Model" />
      <input type="text" name="color" placeholder="Color" />
      <input type="number" name="year" placeholder="Year"/>
      <input type="number" name="mileage" placeholder="Mileage"/>
      <button type="submit">Add Car 🚗</button>
    </form>
  )
}

export default NewCar