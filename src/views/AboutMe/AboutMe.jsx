import './index.scss'
import Photo from '../../assets/photo.png'
import BtnLinks from '../../components/BtnLinks'
import AutoPlayCarousel from '../../components/AutoPlayCarousel'
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div id='aboutme' className='aboutme'>
        <div className='container'>
          <Fade>
            <h2 className='left-underline'>Sobre mim</h2>
          </Fade>
            <div className='aboutme-container'>
              <Fade direction='right'>
                <img src={Photo} alt="" />
              </Fade>
              <div className='aboutme-text'>
                <Fade direction='left'>
                  <h3>Jacareí, São Paulo <FaLocationDot /></h3>
                  <p>Olá! Sou uma desenvolvedora <b>Front End </b>
                  apaixonada por <b>UI/UX e design</b>. Concluí o
                  curso <b>FullStack</b> na
                  <b> Escola de Tecnologia DNC</b>. Tenho habilidades em criar
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
                </Fade>
              </div>
            </div>
        </div>
        <div className='carousel'>
          <AutoPlayCarousel></AutoPlayCarousel>
        </div>
        
    </div>
  )
}

export default AboutMe