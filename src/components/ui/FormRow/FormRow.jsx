import React from 'react'

import styles from './FormRow.module.scss'

const FormRow = ({children}) => {
  return (
    <div className={styles.flexBox}>
        {children}
    </div>
  )
}

export default FormRow