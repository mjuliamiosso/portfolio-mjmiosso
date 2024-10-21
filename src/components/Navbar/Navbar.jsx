import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import styles from './Navbar.module.scss'
import '../../sass/_mixins.scss'
import { IoMenu, IoMoon, IoSunny } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.stickyNav}>
      <nav className='container'>
        <a
          className={styles.logo}
          href="#header">
          MJMIOSSO
        </a>
        <div className={styles.items}>
          <div className={classNames(
            styles.links,
            { [styles.open]: isOpen })
          }>
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
          <button
              className={styles.themeBtn}
              onClick={toggleTheme}
            >
              {theme === 'light' ? (
                <IoMoon className={styles.icon} />
              ) : (
                <IoSunny className={styles.icon} />
              )}
            </button>
            <button
              className={styles.menu}
              onClick={toggleMenu}>
              <IoMenu
                className={styles.icon}
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar