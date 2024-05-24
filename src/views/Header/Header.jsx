import React from 'react'
import './index.scss'
import BtnPurple from '../../components/BtnPurple'
import BtnWhite from '../../components/BtnWhite'
import { Fade } from "react-awesome-reveal";
import cv from '../../assets/MARIA-JULIA-MIOSSO.pdf'

const Header = () => {
  return (
    <div id='header' className='header'>
      <div className='container'>
        <Fade direction='left'>
          <p>Olá, sou</p>
          <h1>Maria Júlia Miosso</h1>
          <p>Desenvolvedora Front-End</p>
          <div className='header-btn'>
            <a href={cv} download="MARIA-JULIA-MIOSSO"><BtnPurple text='Download CV'></BtnPurple></a>
            <a href="#form"><BtnWhite text='Entre em contato'></BtnWhite></a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Header