import React from 'react'
import './index.scss'
import '../../sass/_mixins.scss'

const Navbar = () => {
  return (
    <div className='navbar-bg'>
      <nav className='navbar container'>
          <a className='navbar-name' href="#header">MJMIOSSO</a>
          <div>
            <div className='navbar-links'>
              <a href="#aboutme">SOBRE MIM</a>
              <a href="#projects">PROJETOS</a>
              <a href="#form">CONTATO</a>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar