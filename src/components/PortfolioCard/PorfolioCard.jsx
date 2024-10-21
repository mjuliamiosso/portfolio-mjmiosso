import React from 'react'
import styles from './PortfolioCard.module.scss'
import { FiGithub, FiExternalLink } from "react-icons/fi";

const PorfolioCard = ({ title, description, image, gitHub, deploy }) => {
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
              href={gitHub}>
              <FiGithub />
            </a>
            <a
              className={styles.icon}
              href={deploy}>
              <FiExternalLink />
            </a>
          </div>
        </div>
        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.languageContainer}>
          <p
            className={styles.language}>
            aaa
          </p>
        </div>
      </div>
    </div>
  )
}

export default PorfolioCard