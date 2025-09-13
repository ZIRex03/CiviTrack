
import React from 'react'

import styles from './Input.module.scss'

const Input = ({placeholder, type, ...rest}) => {
  return (
    <div className={styles.inputContainer}>
        <input
            type={type}
            placeholder=' '
            {...rest}
        />
        <label>{placeholder}</label>
    </div>
  )
}

export default Input