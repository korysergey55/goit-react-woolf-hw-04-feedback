import React from 'react'
import styles from './styles.module.css'

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title ? title : 'Please add props title'}</h2>
      {children}
    </div>
  );
}

export default Section;