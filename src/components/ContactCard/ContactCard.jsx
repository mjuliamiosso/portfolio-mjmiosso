import React from 'react'
import styles from './ContactCard.module.scss'

const ContactCard = ({ icon, title, contact, link }) => {
  return (
    <div className={styles.contactCard}>
      <a
        target="_blank"
        href={link}
      >
        <div className={styles.iconContainer}>
          <p className={styles.icon}>{icon}</p>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.contact}>{contact}</p>
      </a>

    </div>
  )
}

export default ContactCard