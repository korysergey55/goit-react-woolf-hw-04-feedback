import React from 'react'
import styles from './styles.module.css'

const Statistic = ({ state, totalFeedback, positivePercentage }) => {
  return (
    < ul className={styles.list} >
      <li className={styles.item}>
        <p className={styles.text}>Good: {state.good}</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Neutral: {state.neutral}</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Bad: {state.bad}</p>
      </li>
      <li className={styles.item}>
        <p className={styles.title}>Total: {totalFeedback}</p>
      </li>
      <li className={styles.item}>
        <p className={styles.title}>Positive feedback: {positivePercentage()} % </p>
      </li>
    </ul>
  )
}

export default Statistic;