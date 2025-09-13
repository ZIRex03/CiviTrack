import React from 'react'

import styles from './WrapperTab.module.scss'

const WrapperTab = ({children}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}

export default WrapperTab