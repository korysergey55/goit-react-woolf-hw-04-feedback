import React from 'react'
import styles from './styles.module.css'
import { nanoid } from 'nanoid'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (

    < div className={styles.btnWripper} >
      {
        options.map((option) => (
          <button
            key={nanoid()}
            className={styles.button}
            type='button'
            name={option}
            onClick={() => onLeaveFeedback(option)}>
            {option.toUpperCase()}
          </button>
        ))
      }
    </ div >
  );
}

export default FeedbackOptions;