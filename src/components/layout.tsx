/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import { Theme } from "./Layout/Theme.styled"
import Header from "./header"
import Footer from "./footer"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  return (
    <Theme>
      <Header />
      {children}
      <Footer />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
