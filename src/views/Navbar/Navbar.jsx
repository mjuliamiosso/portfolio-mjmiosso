import React from 'react'
import './index.scss'
import '../../sass/_mixins.scss'
import { RiMoonClearLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar container flex-spacebetween'>
          <a className='navbar-name' href="">MJMIOSSO</a>
          <div>
            <ul className='navbar-links'>
              <li><a href="">SOBRE MIM</a></li>
              <li><a href="">PROJETOS</a></li>
              <li><a href="">CONTATO</a></li>
            </ul>
            <button><RiMoonClearLine /></button>
          </div>
      </nav>
    </div>
  )
}

export default Navbar