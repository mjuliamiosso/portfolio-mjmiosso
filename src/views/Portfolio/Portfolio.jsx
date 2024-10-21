import React from 'react'
import styles from './Portfolio.module.scss'
import PorfolioCard from '../../components/PortfolioCard/PorfolioCard'
import artGallery from '../../assets/em-breve.png'

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='paddingSection coloredBackground'>
      <div className='container'>
        <h2 className='subtitle '>
          Porfólio
        </h2>
        <div className={styles.cardContainer}>
          <PorfolioCard
            image={artGallery}
            title={'Jogo da Memória'}
            description={"Durante o desenvolvimento, apliquei os meus conhecimentos em manipulação de DOM com JavaScript para criar a interação com os elementos do jogo. Além disso, implementei funcionalidades que permitem ao utilizador reiniciar o jogo e mudar os temas."}
          // deploy={}
          // gitHub={}
          />
          <PorfolioCard
            image={artGallery}
            title={'Jogo da Memória'}
            description={"Durante o desenvolvimento, apliquei os meus conhecimentos em manipulação de DOM com JavaScript para criar a interação com os elementos do jogo."}
          // deploy={}
          // gitHub={}
          />
          <PorfolioCard
            image={artGallery}
            title={'Jogo da Memória'}
            description={"Durante o desenvolvimento, apliquei os meus conhecimentos em manipulação de DOM com JavaScript para criar a interação com os elementos do jogo. Além disso, implementei funcionalidades que permitem ao utilizador reiniciar o jogo e mudar os temas."}
          // deploy={}
          // gitHub={}
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio