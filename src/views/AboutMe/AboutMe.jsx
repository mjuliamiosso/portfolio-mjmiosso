import styles from './AboutMe.module.scss'
import Photo from '../../assets/perfil-site.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id='aboutme'
      className='paddingSection midtoneBackground'>
      <div className='container'>
        <h2 className='subtitle dashMd'>
          Sobre mim
        </h2>
        <div className={styles.aboutmeContainer}>
          <img
            src={Photo}
            alt="perfil-photo"
          />
          <div className={styles.textContainer}>
            <p className={styles.name}>
              Maria Júlia Miosso
            </p>
            <p className={styles.text}>
              Jacareí, São Paulo
              <span>
                <FaLocationDot />
              </span>
            </p>
            <p className={styles.text}>
              Olá! Estou atualmente no primeiro semestre de Análise e Desenvolvimento de Sistemas na Uninter. Desde junho, tenho trabalhado como freelancer, o que me permite ganhar experiência prática e desafiar-me com projetos variados. Além disso, dedico tempo a desenvolver projetos pessoais, pois gosto de aprender e explorar novas ferramentas e tecnologias.

              <br></br>
              <br></br>

              Com essa base de conhecimento e a motivação para crescer profissionalmente, estou à procura de uma oportunidade de emprego onde possa contribuir e aprender ainda mais. Quero colocar em prática as minhas habilidades e contribuir para o sucesso de uma equipe, enquanto procuro aprender e evoluir com cada novo desafio na área tecnológica.
            </p>
            <div className={styles.social}>
              <div className={styles.icons}>
                <a
                  target='_blank'
                  href="https://github.com/mjuliamiosso"
                >
                  <FaGithub
                    className={styles.icon} />
                </a>
                <a
                  target='_blank'
                  href="https://www.linkedin.com/in/maria-julia-miosso/"
                >
                  <FaLinkedin
                    className={styles.icon} />
                </a>
              </div>
              <a
                className={styles.text}
                href="">mjuliamiosso@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe