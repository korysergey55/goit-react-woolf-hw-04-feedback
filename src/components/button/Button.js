import React from 'react'
import styles from './styles.module.css'

const Button = ({ reset, INITIAL_STATE }) => {
  return (
    <button
      className={styles.button}
      type='button'
      onClick={() => reset(INITIAL_STATE)}>
      Reset feedbacks
    </button>
  );
}

export default Button;