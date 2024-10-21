import React from 'react'
import styles from './PortfolioCard.module.scss'
import { FiGithub, FiExternalLink } from "react-icons/fi";

const PorfolioCard = ({ title, description, image, gitHub, deploy, languages }) => {
  return (
    <div className={styles.portfolioCard}>
      <img
        src={image}
        alt="Project Image"
      />
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p>{title}</p>
          <div className={styles.icons}>
            <a
              className={styles.icon}
              target="_blank"
              href={gitHub}>
              <FiGithub />
            </a>
            <a
              className={styles.icon}
              target="_blank"
              href={deploy}>
              <FiExternalLink />
            </a>
          </div>
        </div>
        <p className={styles.description}>
          {description}
        </p>
        <div>
          {languages && languages.length > 0 && (
            <ul className={styles.languageList}>
              {languages.map((language, index) => (
                <li key={index} className={styles.languageItem}>
                  {language}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default PorfolioCard