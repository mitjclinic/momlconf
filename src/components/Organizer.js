import React from "react"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

import * as styles from "./Organizer.module.scss"

const Organizer = ({ image, name, title, affiliation, twitter, linkedin }) => {
  return (
    <div className={styles.organizer}>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.info}>
        <h1>{name}</h1>

        <div>
          <p>{title}</p>
          <p>{affiliation}</p>
        </div>

        <div>
          {twitter ?? <FaTwitter />}
          {linkedin ?? <FaLinkedin />}
        </div>
      </div>
    </div>
  )
}
export default Organizer
