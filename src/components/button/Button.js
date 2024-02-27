import React from 'react'
import styles from './styles.module.css'

const Button = ({ reset }) => {
  return (
    <button
      className={styles.button}
      type='button'
      onClick={reset}>
      Reset feedbacks
    </button>
  );
}

export default Button;