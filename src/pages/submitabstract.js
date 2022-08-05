import React from "react"
import Layout from "../components/Layout"

import { useForm, ValidationError } from "@formspree/react"

import * as styles from "../styles/submitabstract.module.scss"
import { Script } from "gatsby"

const AbstractForm = () => {
  const [state, handleSubmit] = useForm("xknewkpr")

  if (state.succeeded) {
    return (
      <p>Thank you for submitting your abstract. We'll be in touch shortly!</p>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="abstract">Abstract</label>
      <textarea id="abstract" name="abstract" rows={20} />
      <ValidationError
        prefix="Abstract"
        field="abstract"
        errors={state.errors}
      />

      <div className={styles.recaptcha}>
        <div
          className="g-recaptcha"
          data-sitekey="6LekNEshAAAAABzNMMlMPFNcVMKj0IHMaaWu6uhB"
        ></div>
      </div>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

const SubmitAbstractPage = () => {
  return (
    <Layout>
      <Script src="https://www.google.com/recaptcha/api.js" async defer />

      <div className={styles.constrain}>
        <h1>Submit a poster abstract</h1>

        <p>
          The MoML Conference covers research from areas broadly related to
          machine learning for molecular modeling and drug discovery. We invite
          you to submit your posters summarizing your research related to these
          fields!
        </p>

        <AbstractForm />
      </div>
    </Layout>
  )
}

export default SubmitAbstractPage
