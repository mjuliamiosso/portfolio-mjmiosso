import React from 'react'
import Project from '../../components/Project'
import './index.scss'
import WeatherApp from '../../assets/weather-app.png'
import PokemonImg from '../../assets/pokemon-wide.png'
import ArtGallery from '../../assets/art-gallery.png'
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
              <Project image={PokemonImg}></Project>
              <ProjectDescription title='Pokédex' text='Criei esse site inspirado no Pokémon, utilizando uma API que permite aos usuários visualizar e pesquisar por Pokémons de maneira rápida e intuitiva. No site, você pode encontrar informações detalhadas sobre cada Pokémon, incluindo suas habilidades, tipos, evoluções e muito mais.' github='https://github.com/mjuliamiosso/pokedex' deploy='https://pokedex-tawny-nine.vercel.app/'></ProjectDescription>
            </div>
          </div>
          <div className='projects-container-left'>
            <div className='project-container'>
              <Project image={ArtGallery}></Project>
              <ProjectDescription title='Galeria de Arte' text='Criei este site como uma plataforma para compartilhar minhas criações artísticas e, ao mesmo tempo, aprimorar minhas habilidades de desenvolvimento web.' github='https://github.com/mjuliamiosso/art-gallery' deploy='https://art-gallery-mjmiosso.vercel.app/'></ProjectDescription>
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