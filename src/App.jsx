import { useEffect, useState } from 'react'
import Header from './views/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './views/AboutMe/AboutMe'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  )
}

export default App
