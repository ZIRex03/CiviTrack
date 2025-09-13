
import React from 'react'

import styles from './Input.module.scss'

const Input = ({placeholder, name, type, value, onChange}) => {
  return (
    <div className={styles.inputContainer}>
        <input
            type={type}
            id={name}
            placeholder=' '
            value={value}
            onChange={onChange}
        />
        <label htmlFor={name}>{placeholder}</label>
    </div>
  )
}

export default Input