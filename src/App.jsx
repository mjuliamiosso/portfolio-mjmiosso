import { useState } from 'react'
import Navbar from './views/Navbar/Navbar'
import Header from './views/Header/Header'
import AboutMe from './views/AboutMe/AboutMe'
import Projects from './views/Projects/Projects'
import Form from './views/Form/Form'
import Footer from './views/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
