import React from 'react'
import './index.scss'
import '../../sass/_mixins.scss'

const Navbar = () => {
  return (
    <div className='navbar-bg'>
      <nav className='navbar container'>
          <a className='navbar-name' href="">MJMIOSSO</a>
          <div>
            <div className='navbar-links'>
              <a href="">SOBRE MIM</a>
              <a href="">PROJETOS</a>
              <a href="">CONTATO</a>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar