import React from 'react'
import Project from '../../components/Project'
import './index.scss'
import WeatherApp from '../../assets/weather-app.png'
import SoonImg from '../../assets/em-breve.png'
import SoonImgWide from '../../assets/em-breve-wide.png'
import ProjectDescription from '../../components/ProjectDescription'
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div id='projects' className='projects-bg'>
      <div className='container projects'>
        <Fade >
        <h2>Projetos</h2>
        <span className='right-underline'></span>
          <div className='projects-container-right'>
            <div className='project-container'>
              <Project image={WeatherApp}></Project>
              <ProjectDescription title='Weather-App' text='Fiz este site para praticar a implementação de APIs, onde você pode ver o clima das cidades. O objetivo é desenvolver minhas habilidades em desenvolvimento web e integração de serviços, permitindo que os usuários obtenham informações meteorológicas em tempo real de diversas localidades.' github='https://github.com/mjuliamiosso/weather-app' deploy='https://mjuliamiosso.github.io/weather-app/'></ProjectDescription>
            </div>
            <div className='project-container'>
              <Project image={SoonImgWide}></Project>
              <ProjectDescription title='---' text='---' ></ProjectDescription>
            </div>
          </div>
          <div className='projects-container-left'>
            <div className='project-container'>
              <Project image={SoonImgWide}></Project>
              <ProjectDescription title='---' text='---' ></ProjectDescription>
            </div>
            <div className='project-container'>
              <Project image={SoonImg}></Project>
              <ProjectDescription title='---' text='---' ></ProjectDescription>
            </div>
          </div>
        </Fade>
      </div>
    </div>
    
  )
}

export default Projects