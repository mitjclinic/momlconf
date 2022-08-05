import React from "react"
import { FiArrowRight } from "react-icons/fi"

import * as styles from "./Button.module.scss"

const Button = ({ text, onClick }) => {
  return (
    <div className={styles.button} onClick={e => onClick && onClick(e)}>
      <div className={styles.content}>
        {text}
        <FiArrowRight />
      </div>
    </div>
  )
}

export default Button
