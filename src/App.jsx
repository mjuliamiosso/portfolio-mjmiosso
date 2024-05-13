import { useState } from 'react'
import Navbar from './views/Navbar/Navbar'
import Header from './views/Header/Header'
import AboutMe from './views/AboutMe/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
    </>
  )
}

export default App
