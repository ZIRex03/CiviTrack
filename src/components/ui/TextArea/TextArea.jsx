import React from 'react'

import styles from './TextArea.module.scss'

const TextArea = ({placeholder, ...rest}) => {
  return (
    <div className={styles.textAreaContainer}>
        <textarea
            placeholder=' '
            {...rest}
        > 
        </textarea>
        <label>{placeholder}</label>
    </div>
  )
}

export default TextArea