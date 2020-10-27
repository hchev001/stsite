import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap"
interface Props {
  siteTitle: string
}
const Header = ({ siteTitle }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Navbar light fixed="top" expand="md" className="hdr">
        <NavbarBrand href="/" className="brand">
          STEM-CYLE
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{ justifyContent: "flex-end" }}>
          <Nav className="d-flex justify-content-*-between" navbar>
            <li className="nav-item">
              <Link to="" className="nav-link" style={{ color: "white" }}>
                Instances
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link" style={{ color: "white" }}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events"
                className="nav-link"
                style={{ color: "white" }}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/publications"
                className="nav-link"
                style={{ color: "white" }}
              >
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resources"
                className="nav-link"
                style={{ color: "white" }}
              >
                Resources
              </Link>
            </li>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
