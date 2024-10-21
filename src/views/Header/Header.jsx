import React from 'react'
import styles from './Header.module.scss'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import ButtonSecondary from '../../components/ButtonSecondary/ButtonSecondary'
import CV from '../../assets/MARIA-JULIA-MIOSSO.pdf'

const Header = () => {
  return (
    <div
      id='header'
      className='coloredBackground'>
      <header className='container'>
        <h1>Olá, sou <span>Maria Júlia Miosso</span></h1>
        <h3>Desenvolvedora Front-End</h3>
        <div className={styles.buttons}>
          <a
            href={CV}
            download="MARIA-JULIA-MIOSSO">
            <ButtonSecondary
              text='Download CV'>
            </ButtonSecondary>
          </a>
          <a
            href="#form">
            <ButtonPrimary
              text='Entre em contato'>
            </ButtonPrimary>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header