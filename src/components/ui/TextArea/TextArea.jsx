import React from 'react'

import styles from './TextArea.module.scss'

const TextArea = ({placeholder, value, name, onChange}) => {
  return (
    <div className={styles.textAreaContainer}>
        <textarea
            name={name}
            id=""
            placeholder=' '
            onChange={onChange}
            value={value}
        > 
        </textarea>
        <label htmlFor={name}>{placeholder}</label>
    </div>
  )
}

export default TextArea