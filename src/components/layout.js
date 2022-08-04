import React from "react"
import Menu from "./Menu"
import Footer from "./Footer"

import * as styles from "./Layout.module.scss"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1>Molecular ML Conference</h1>
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
