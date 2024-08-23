import { Link } from "react-router-dom"

const Cars = ({ cars, handleRemoveCar }) => {
  return (
    <>
      <h1>Car List</h1>
      <div className="car-container">
        {cars.map(car =>
          <div key={car.id} className="car-card">
            <h2>{car.year}</h2>
            <h2>{car.make}</h2>
            <h2>{car.model}</h2>
            <div>
              <button onClick={() => handleRemoveCar(car.id)}>🗑️</button>
              <Link 
                to={`/cars/${car.id}/edit`} 
                className="edit-button"
                state={car}
              >
                ✏️
              </Link>

            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Cars