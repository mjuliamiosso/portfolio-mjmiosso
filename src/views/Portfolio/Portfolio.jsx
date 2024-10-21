import React from 'react'
import styles from './Portfolio.module.scss'
import PorfolioCard from '../../components/PortfolioCard/PorfolioCard'
import memoryGame from '../../assets/memory-game.png'
import weatherApp from '../../assets/weather-app.png'
import logumRH from '../../assets/logum-rh.png'

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='paddingSection coloredBackground'>
      <div className='container'>
        <h2 className='subtitle dashSm'>
          Porfólio
        </h2>
        <div className={styles.cardContainer}>
          <PorfolioCard
            image={logumRH}
            title={'Logum RH'}
            description={"..."}
            languages={["Next.js"]}
            gitHub={'https://github.com/mjuliamiosso/logumrh'}
            // deploy={'#'}
          />
          <PorfolioCard
            image={memoryGame}
            title={'Jogo da Memória'}
            description={"Durante o desenvolvimento, apliquei os meus conhecimentos em manipulação de DOM com JavaScript para criar a interação com os elementos do jogo. Além disso, implementei funcionalidades que permitem ao utilizador reiniciar o jogo e mudar os temas."}
            languages={["JavaScript", "HTML", "CSS"]}
            gitHub={'https://github.com/mjuliamiosso/memory-game'}
            deploy={'https://mjuliamiosso.github.io/memory-game/'}
          />
          <PorfolioCard
            image={weatherApp}
            title={'Clima e Previsão do Tempo'}
            description={"Criei este site utilizando uma API para consultar o clima e a previsão do tempo. O principal objetivo foi aprimorar minhas habilidades na integração de serviços, permitindo que os usuários acessem informações meteorológicas em tempo real de diversas localidades. Além disso, este projeto me permitiu aprofundar o conhecimento sobre o funcionamento das APIs e a integração eficiente de dados de várias fontes."}
            languages={["JavaScript", "HTML", "CSS"]}
            gitHub={'https://github.com/mjuliamiosso/weather-app'}
            deploy={'https://weather-app-chi-blue.vercel.app/'}
          />

        </div>
      </div>
    </section>
  )
}

export default Portfolio