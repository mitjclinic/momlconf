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
    <section>
      <h1>Molecular ML Conference</h1>
      <h2>October 21, 2022</h2>
      <h2>Massachusetts Institute of Technology</h2>

      <p>
        MoML is a new annual research conference organized in the name of
        Octavian-Eugen Ganea who passed away this May.
      </p>
    </section>
  )
}

const CallForPosters = () => (
  <section>
    <h1>Call for posters</h1>
    <p>
      The MoML Conference covers research from areas broadly related to machine
      learning for molecular modeling and drug discovery. Registration for the
      in-person conference at MIT is free!
    </p>

    <p>
      We invite you to submit your posters summarizing your research by{" "}
      <i>[deadline TBD]</i>. We would be happy to discuss your posters with you!
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
    <Hero />
    <CallForPosters />
    <Speakers />
    <Schedule />
    <Sponsors />
    <OrganizingCommittee />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
