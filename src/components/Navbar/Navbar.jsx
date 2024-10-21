import React, { useState } from 'react'
import classNames from 'classnames';
import styles from './Navbar.module.scss'
import '../../sass/_mixins.scss'
import { IoMenu, IoMoon } from "react-icons/io5";

const Navbar = () => {

  return (
    <div className='coloredBackground'>
      <nav className='container'>
        <a
          className={styles.logo}
          href="#header">
          MJMIOSSO
        </a>
        <div className={styles.items}>
          <div className={styles.links}>
            <a
              href="#aboutme">
              Sobre mim
            </a>
            <a
              href="#portfolio">
              Porfólio
            </a>
            <a
              href="#contact">
              Contato
            </a>
          </div>
          <div className={styles.icons}>
            <IoMoon
              className={styles.icon}
            />
            <IoMenu
              className={classNames(styles.icon, 'menu')}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar