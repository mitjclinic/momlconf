import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../components/Button"
import Seo from "../components/seo"
import Layout from "../components/Layout"

import "../styles/globals.scss"
import * as styles from "../styles/index.module.scss"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.description}>
        <h1>Molecular ML Conference</h1>

        <div>
          <h2>October 21, 2022</h2>
          <h2>Massachusetts Institute of Technology</h2>
        </div>

        <p>
          MoML is a new annual research conference organized in the name of{" "}
          <a href="https://people.csail.mit.edu/oct/">Octavian-Eugen Ganea</a>{" "}
          who passed away this May.
        </p>
      </div>

      <div className={styles.image}>
        <StaticImage src="../images/GST.png" alt="A protein" />
      </div>
    </section>
  )
}

const CallForPosters = () => (
  <section className={styles.callForPosters}>
    <h1>Call for posters</h1>
    <p>
      The MoML Conference covers research from areas broadly related to machine
      learning for molecular modeling and drug discovery. Registration for the
      in-person conference at MIT is free!
    </p>

    <p>
      We invite you to submit your posters summarizing your research by{" "}
      <span>[deadline TBD]</span>. We would be happy to discuss your posters
      with you!
    </p>

    <Button text={"Submit a poster abstract"} />
  </section>
)

const Speakers = () => (
  <section>
    <h1>Speakers</h1>
    <p>Coming soon!</p>
  </section>
)

const Schedule = () => (
  <section>
    <h1>Schedule</h1>
    <p>Coming soon!</p>
  </section>
)

const Sponsors = () => (
  <section>
    <h1>Sponsors</h1>
    <p>
      If you are interested in sponsoring MoML, please contact us at{" "}
      <a href="mailto:momlconf@mit.edu">momlconf [at] mit.edu</a>.
    </p>
  </section>
)

const OrganizingCommittee = () => (
  <section>
    <h1>Organizing committee</h1>
  </section>
)

const IndexPage = () => (
  <Layout>
    <div className={styles.constrain}>
      <div className={styles.global}>
        <Hero />
        <CallForPosters />
        <Speakers />
        <Schedule />
        <Sponsors />
        <OrganizingCommittee />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
