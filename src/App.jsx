import { useEffect, useState } from 'react'
import Navbar from './views/Navbar/Navbar'
import Header from './views/Header/Header'
import AboutMe from './views/AboutMe/AboutMe'
import Projects from './views/Projects/Projects'
import Form from './views/Form/Form'
import Footer from './views/Footer/Footer'
import { createContext } from 'react'
import ReactSwitch from 'react-switch';
import { BiSolidMoon } from "react-icons/bi";
import { FaSun } from "react-icons/fa6";

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"))
  }
 
  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme} >
        <div className='switch-container'>
          <Navbar/>
          <div className='switch container'>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}
            offColor='#7D0633' onColor='#e06e9a' handleDiameter={22} uncheckedIcon={<BiSolidMoon className='moon' />} checkedIcon={<FaSun className='sun' />} offHandleColor='#F4F1F4' onHandleColor='#181718'
            ></ReactSwitch>
          </div>
        </div>
        <Header/>
        <AboutMe/>
        <Projects/>
        <Form/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
