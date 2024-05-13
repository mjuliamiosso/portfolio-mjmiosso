import React from 'react'
import './index.scss'
import BtnPurple from '../../components/BtnPurple'
import BtnWhite from '../../components/BtnWhite'

const Header = () => {
  return (
    <div className='header container'>
        <p>Olá, sou</p>
        <h1>Maria Júlia Miosso</h1>
        <p>Desenvolvedora Front-End</p>
        <div className='header-btn'>
          <BtnPurple text='Download CV'></BtnPurple>
          <BtnWhite text='Entre em contato'></BtnWhite>
        </div>
    </div>
  )
}

export default Header