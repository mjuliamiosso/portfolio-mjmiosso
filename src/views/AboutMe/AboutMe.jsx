import React from 'react'
import './index.scss'
import Photo from '../../assets/photo.png'
import BtnLinks from '../../components/BtnLinks'
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className='aboutme'>
        <div className='container'>
            <h2>Sobre mim</h2>
            <div className='aboutme-container'>
                <img src={Photo} alt="" />
                <div className='header-text'>
                    <h3>Jacareí, São Paulo</h3>
                    <p>Olá! Sou uma desenvolvedora <b>Front End </b>
                    apaixonada por <b>UI/UX e design</b>. Me formei na
                    <b> Escola de Tecnologia DNC</b>, onde concluí o
                    curso <b>FullStack</b>. Tenho habilidades em criar
                    interfaces intuitivas e esteticamente
                    agradáveis, utilizando meu conhecimento em
                    <b> HTML, CSS</b> e <b>JavaScript</b>. Estou sempre em
                    busca de aprimoramento e novos desafios
                    para continuar crescendo profissionalmente.
                  </p>
                  <div className='aboutme-link'>
                    <BtnLinks link='https://github.com/mjuliamiosso' icon={<FiGithub />}></BtnLinks>
                    <BtnLinks link='https://www.linkedin.com/in/maria-julia-miosso/' icon={<TiSocialLinkedin />}></BtnLinks>
                    <BtnLinks link='https://www.instagram.com/mjmiosso/' icon={<FaInstagram />}></BtnLinks>
                  </div>
                  <p className='aboutme-email'>mjuliamiosso@gmail.com</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default AboutMe