import React from 'react'
import styles from './ButtonSecondary.module.scss'

const ButtonSecondary = ({ text }) => {
  return (
    <div>
      <button
        className={styles.buttonSecondary}>
        {text}
      </button>
    </div>
  )
}

export default ButtonSecondary