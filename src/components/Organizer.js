import React from "react"
import { FaLinkedin, FaTwitter } from "react-icons/fa"

import * as styles from "./Organizer.module.scss"

const Organizer = ({
  image,
  url,
  name,
  title,
  affiliation,
  twitter,
  linkedin,
}) => {
  return (
    <div className={styles.organizer}>
      <div className={styles.image}>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={image} alt={name} />
        </a>
      </div>

      <div className={styles.info}>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            <h1>{name}</h1>
          </a>
          <p>{title}</p>
          <p>{affiliation}</p>
        </div>

        <div>
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
export default Organizer
