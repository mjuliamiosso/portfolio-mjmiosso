import React from 'react'
import styles from './Portfolio.module.scss'
import PorfolioCard from '../../components/PortfolioCard/PorfolioCard'

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
            image={'./overdle.png'}
            title={'Overdle'}
            description={"Em construção..."}
            languages={["Next.js", 'SASS', 'TypeScript', 'PostgreSQL', 'Prisma']}
            gitHub={'https://github.com/mjuliamiosso/overdle'}
            deploy={'https://overdle.vercel.app/'}
          />
          <PorfolioCard
            image={'./logum-rh.png'}
            title={'Logum RH'}
            description={"Em construção..."}
            languages={["Next.js", 'SASS', 'TypeScript', 'SpringBoot', 'Java', 'PostgreSQL']}
            gitHub={'https://github.com/mjuliamiosso/logumrh'}
          // deploy={'#'}
          />
          <PorfolioCard
            image={'./niloware.png'}
            title={'Niloware'}
            description={"Em construção..."}
            languages={["Next.js", 'SASS', 'TypeScript']}
            gitHub={'https://github.com/mjuliamiosso/logumrh'}
          // deploy={'#'}
          />
          <PorfolioCard
            image={'./memory-game.png'}
            title={'Jogo da Memória'}
            description={"Durante o desenvolvimento, apliquei os meus conhecimentos em manipulação de DOM com JavaScript para criar a interação com os elementos do jogo. Além disso, implementei funcionalidades que permitem ao utilizador reiniciar o jogo e mudar os temas."}
            languages={["JavaScript", "HTML", "CSS"]}
            gitHub={'https://github.com/mjuliamiosso/memory-game'}
            deploy={'https://mjuliamiosso.github.io/memory-game/'}
          />
          <PorfolioCard
            image={'./weather-app.png'}
            title={'Clima e Previsão do Tempo'}
            description={"Criei este site utilizando uma API para consultar o clima e a previsão do tempo. O principal objetivo foi aprimorar minhas habilidades na integração de serviços, permitindo que os usuários acessem informações meteorológicas em tempo real de diversas localidades."}
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