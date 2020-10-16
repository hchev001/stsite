/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import { Theme } from "./Layout/Theme.styled"
import Header from "./header"
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap"
import Footer from "./footer"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

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
