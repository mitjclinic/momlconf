import React from "react"
import { FiArrowRight } from "react-icons/fi"

import * as styles from "./Button.module.scss"

const Button = ({ text }) => {
  return (
    <div className={styles.button}>
      <div className={styles.content}>
        {text}
        <FiArrowRight />
      </div>
    </div>
  )
}

export default Button
