import React from "react"
import { FiArrowRight } from "react-icons/fi"

const Button = ({ text }) => {
  return (
    <div>
      <p>{text}</p> <FiArrowRight />
    </div>
  )
}

export default Button
