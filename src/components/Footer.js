import React from "react"

import * as styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.constrain}>
        <div className={styles.half}>
          <div className={styles.contact}>
            <h1>Contact</h1>
            <div className={styles.contactLinks}>
              <a href="#">Follow MoML on Twitter</a>
              <a href="#">Follow MoML on LinkedIn</a>
              <a href="mailto:momlconf@mit.edu">Email the organizers</a>
            </div>
          </div>
        </div>

        <div className={styles.half}>
          <div className={styles.about}>
            <h1>About</h1>
            <p>
              MoML is a new annual research conference organized in the name of
              Octavian-Eugen Ganea who passed away this May.
            </p>
            <p>&copy; 2022 Molecular ML (MoML) Conference</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
