import React from 'react'
import styles from './InfoBlock.module.scss'

const InfoBlock = ({children, title}) => {
  return (
    <div className={styles.box}>
        <p className={styles.title}>{title}</p>
        {children}
    </div>
  )
}

export default InfoBlock