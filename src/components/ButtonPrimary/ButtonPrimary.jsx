import React from 'react'
import styles from './ButtonPrimary.module.scss'

const ButtonPrimary = ({ text }) => {
  return (
    <div>
      <button
        className={styles.buttonPrimary}>
        {text}
      </button>
    </div>
  )
}

export default ButtonPrimary