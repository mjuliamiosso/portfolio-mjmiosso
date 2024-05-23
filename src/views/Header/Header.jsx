import React from 'react'
import './index.scss'
import BtnPurple from '../../components/BtnPurple'
import BtnWhite from '../../components/BtnWhite'
import { Fade } from "react-awesome-reveal";

const Header = () => {
  return (
    <div id='header' className='header'>
      <div className='container'>
        <Fade direction='left'>
          <p>Olá, sou</p>
          <h1>Maria Júlia Miosso</h1>
          <p>Desenvolvedora Front-End</p>
          <div className='header-btn'>
            <BtnPurple text='Download CV'></BtnPurple>
            <BtnWhite text='Entre em contato'></BtnWhite>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Header