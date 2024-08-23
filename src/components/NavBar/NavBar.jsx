import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to="/cars">Cars</Link>
      <Link to="/cars/new">New Car</Link>
    </nav>
  )
}

export default NavBar