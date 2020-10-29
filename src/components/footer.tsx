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
          <Col md={4} style={{ marginBottom: "50px" }}>
            <h3>About Us</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to="/research-team">Research Team</Link>
              <Link to="/development-team">Development Team</Link>
              <Link to="/sponsors">Sponsors</Link>
            </div>
          </Col>
          <Col md={4} style={{ marginBottom: "50px" }}>
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
          <Col md={4} style={{ marginBottom: "50px" }}>
            <h3>Location</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.fiu.edu/"
                target="_blank"
                rel="norefferer noopener"
              >
                Florida International University
              </a>
              <a
                href="https://www.cis.fiu.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                School of Computing and Information Sciences
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          padding: "25px 0px",
          background: "#233140",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Container>
          <Row>
            <Col lg={12}>Copyright © Florida International University 2020</Col>
          </Row>
        </Container>
      </div>
    </StyledFooter>
  )
}

export default Footer
