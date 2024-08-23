// npm modules
import { useState } from 'react'

// pages

// components
import NavBar from './components/NavBar/NavBar'

// css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
