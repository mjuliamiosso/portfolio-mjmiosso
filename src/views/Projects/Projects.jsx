import React from 'react'
import Project from '../../components/Project'
import './index.scss'
import DncWeatherImg from '../../assets/dnc-weather.png'
import ProjectDescription from '../../components/ProjectDescription'

const Projects = () => {
  return (
    <div className='projects-bg'>
      <div className='container projects'>
        <h2>Projetos</h2>
        <div className='projects-container-right'>
          <div className='project-container'>
              <Project image={DncWeatherImg}></Project>
              <ProjectDescription title='DncWeather' text='Desafio feito pela Escola DNC onde temos que desenvolver uma tela funcional com consumo de API.' github='https://github.com/mjuliamiosso/desafio-02-api?tab=readme-ov-file' deploy='https://mjuliamiosso.github.io/desafio-02-api/'></ProjectDescription>
          </div>
          <div className='project-container'>
              <Project image={DncWeatherImg}></Project>
              <ProjectDescription title='DncWeather' text='Desafio feito pela Escola DNC onde temos que desenvolver uma tela funcional com consumo de API.' github='https://github.com/mjuliamiosso/desafio-02-api?tab=readme-ov-file' deploy='https://mjuliamiosso.github.io/desafio-02-api/'></ProjectDescription>
          </div>
        </div>
        <div className='projects-container-left'>
          <div className='project-container'>
              <Project image={DncWeatherImg}></Project>
              <ProjectDescription title='DncWeather' text='Desafio feito pela Escola DNC onde temos que desenvolver uma tela funcional com consumo de API.' github='https://github.com/mjuliamiosso/desafio-02-api?tab=readme-ov-file' deploy='https://mjuliamiosso.github.io/desafio-02-api/'></ProjectDescription>
          </div>
          <div className='project-container'>
              <Project image={DncWeatherImg}></Project>
              <ProjectDescription title='DncWeather' text='Desafio feito pela Escola DNC onde temos que desenvolver uma tela funcional com consumo de API.' github='https://github.com/mjuliamiosso/desafio-02-api?tab=readme-ov-file' deploy='https://mjuliamiosso.github.io/desafio-02-api/'></ProjectDescription>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default Projects