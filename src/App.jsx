import { useEffect, useState } from 'react'
import Header from './views/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './views/AboutMe/AboutMe'
import Portfolio from './views/Portfolio/Portfolio'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default App
