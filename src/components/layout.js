import React from "react"
import Menu from "./Menu"
import Footer from "./Footer"
import { Link } from "gatsby"

import * as styles from "./Layout.module.scss"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <h1>Molecular ML Conference</h1>
      </Link>
      <Menu />
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />

      <div className={styles.content}>{children}</div>

      <Footer />
    </>
  )
}

export default Layout
