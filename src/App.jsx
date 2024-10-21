import { useEffect, useState } from 'react'
import Header from './views/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './views/AboutMe/AboutMe'
import Portfolio from './views/Portfolio/Portfolio'
import Contact from './views/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
