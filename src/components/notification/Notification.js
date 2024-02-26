import React from 'react'
import styles from './styles.module.css'

const Notification = ({ message }) => {
  return (
    <h2 className={styles.title}>{message}</h2>
  );
}

export default Notification;