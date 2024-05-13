import React from 'react'
import './index.scss'
import '../../sass/_mixins.scss'
import ButtonSwitch from '../../components/ButtonSwitch'
import { LuMoonStar } from "react-icons/lu";
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar container flex-spacebetween'>
          <a className='navbar-name' href="">MJMIOSSO</a>
          <div>
            <ButtonSwitch icon={<LuMoonStar />}></ButtonSwitch>
            <menu className='navbar-links'>
              <a href="">SOBRE MIM</a>
              <a href="">PROJETOS</a>
              <a href="">CONTATO</a>
            </menu>
          </div>
      </nav>
    </div>
  )
}

export default Navbar