import React from 'react'
import styles from "./Button.module.scss"

function Button( {children, w, onClick} ) {
  return (
    <button 
      onClick={onClick}
      className={`${styles.btn} ${styles[w]}`}
      >{children}
    </button>
  )
}

export default Button