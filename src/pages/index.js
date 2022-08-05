import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../components/Button"
import Seo from "../components/seo"
import Layout from "../components/Layout"

import "../styles/globals.scss"
import * as styles from "../styles/index.module.scss"
import Organizer from "../components/Organizer"

import FelixFaltings from "../images/felix-faltings.jpeg"
import HannesStark from "../images/hannes-stark.jpeg"
import GabrieleCorso from "../images/gabriele-corso.jpeg"
import ReginaBarzilay from "../images/regina-barzilay.jpeg"
import TommiJaakkola from "../images/tommi-jaakkola.png"
import CharlotteBunne from "../images/charlotte-bunne.png"

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
          <a
            href="https://people.csail.mit.edu/oct/"
            target="_blank"
            rel="noreferrer"
          >
            Octavian-Eugen Ganea
          </a>{" "}
          who passed away this May.
        </p>
      </div>

      <div className={styles.image}>
        <StaticImage
          src="../images/GST.png"
          alt="A protein"
          loading="eager"
          placeholder="tracedSVG"
        />
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

    <Link to="/submitabstract">
      <Button text={"Submit a poster abstract"} />
    </Link>
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
  <section className={styles.sponsors}>
    <h1>Sponsors</h1>
    <p>
      If you are interested in sponsoring MoML, please contact us at{" "}
      <a href="mailto:momlconf@mit.edu">momlconf [at] mit.edu</a>.
    </p>
  </section>
)

const OrganizingCommittee = () => (
  <section className={styles.organizers}>
    <h1>Organizing committee</h1>

    <div className={styles.row}>
      <Organizer
        image={FelixFaltings}
        name={"Felix Faltings"}
        title={"PhD student"}
        affiliation={"Massachusetts Institute of Technology"}
        linkedin={"https://www.linkedin.com/in/felix-faltings-73b886127/"}
        url={"https://www.linkedin.com/in/felix-faltings-73b886127/"}
      />
      <Organizer
        image={HannesStark}
        name={"Hannes Stark"}
        title={"PhD student"}
        affiliation={"Massachusetts Institute of Technology"}
        twitter={"https://twitter.com/HannesStaerk"}
        linkedin={"https://www.linkedin.com/in/hannes-stark/"}
        url={"https://hannes-stark.com/"}
      />
    </div>

    <div className={styles.row}>
      <Organizer
        image={GabrieleCorso}
        name={"Gabriele Corso"}
        title={"PhD student"}
        affiliation={"Massachusetts Institute of Technology"}
        twitter={"https://twitter.com/GabriCorso"}
        linkedin={"https://www.linkedin.com/in/gcorso/"}
        url={"https://gcorso.github.io/"}
      />
      <Organizer
        image={ReginaBarzilay}
        name={"Regina Barzilay"}
        title={"Professor"}
        affiliation={"Massachusetts Institute of Technology"}
        url={"https://www.regina.csail.mit.edu/"}
      />
    </div>

    <div className={styles.row}>
      <Organizer
        image={TommiJaakkola}
        name={"Tommi Jaakkola"}
        title={"Professor"}
        affiliation={"Massachusetts Institute of Technology"}
        url={"https://people.csail.mit.edu/tommi/"}
      />
      <Organizer
        image={CharlotteBunne}
        name={"Charlotte Bunne"}
        title={"PhD student"}
        affiliation={"ETH Zurich"}
        twitter={"https://twitter.com/_bunnech"}
        url={"http://bunne.ch/"}
      />
    </div>
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

export const Head = () => (
  <>
    <link rel="stylesheet" href="https://use.typekit.net/bcw3lof.css"></link>
    <Seo title="Home" />
  </>
)

export default IndexPage
