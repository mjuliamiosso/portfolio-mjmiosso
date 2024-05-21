import { useState } from 'react'
import Navbar from './views/Navbar/Navbar'
import Header from './views/Header/Header'
import AboutMe from './views/AboutMe/AboutMe'
import Projects from './views/Projects/Projects'
import Form from './views/Form/Form'
import Footer from './views/Footer/Footer'
import { createContext } from 'react'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <Navbar/>
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
