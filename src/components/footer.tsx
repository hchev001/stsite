import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

const StyledFooter = styled.footer`
  padding-top: 50px;
  background-color: #2c3e50;

  h3 {
    color: white;
    text-align: center;
    margin-bottom: 30px;
  }

  a {
    margin-bottom: 20px;
    color: #18bc9c;
    outline: 0;
    font-size: 14px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col md={4}>
            <h3>About Us</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to="">Research Team</Link>
              <Link to="">Development Team</Link>
              <Link to="">Sponsors</Link>
            </div>
          </Col>
          <Col md={4}>
            <h3>Research</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to="/publications">Publications</Link>
              <Link to="/events">Events</Link>
              <Link to="/institutions">Institutions</Link>
            </div>
          </Col>
          <Col md={4}>
            <h3>Location</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to="">Florida International University</Link>
              <Link to="">School of Computing and Information Sciences</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer
