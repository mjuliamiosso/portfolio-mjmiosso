import React, { useState } from 'react'
import './index.scss'
import '../../sass/_mixins.scss'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div className='navbar-bg'>
      <nav className='navbar container'>
          <a className='navbar-name' href="#header">MJMIOSSO</a>
          <div className='navbar-links-container'>
            <div className={`navbar-links ${isOpen ? "is-open" : ""}`}>
              <a href="#aboutme">SOBRE MIM</a>
              <a href="#projects">PROJETOS</a>
              <a href="#form">CONTATO</a>
            </div>
            <IoMenu className='menu' onClick={toggleMenu} />
          </div>
      </nav>
    </div>
  )
}

export default Navbar