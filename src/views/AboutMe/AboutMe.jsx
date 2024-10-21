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
              Olá! Sou uma desenvolvedora Front End apaixonada por UI/UX e design. Concluí o curso FullStack na Escola de Tecnologia DNC. Tenho habilidades em criar interfaces intuitivas e esteticamente agradáveis, utilizando meu conhecimento em HTML, CSS e JavaScript. Estou sempre em busca de aprimoramento e novos desafios para continuar crescendo profissionalmente.
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