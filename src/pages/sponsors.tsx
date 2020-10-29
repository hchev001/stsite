import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import TemplateLayout from "../components/Layout/template-layout"
import Img from "gatsby-image"

const Sponsors = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: { in: ["logos", "sponsors1", "sponsors2", "sponsors3"] }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fixed(width: 553) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.allFile)
  return (
    <TemplateLayout title="Sponsors">
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col
            md={8}
            style={{
              textAlign: "center",
            }}
          >
            <br />
            <br />
            <div>
              SEP-CyLE is currently being funded by a collaborative NSF IUSE
              Engaged Student Learning - Design and Development Level II
              project. This project is a collaborative effort between the
              following institutions: Florida International University
              (DUE-1525112), Alabama AM University (DUE-1525120), Florida A&M
              University (DUE-1525555), Florida Gulf Coast University
              (DUE-1562773), Georgia Southern University (DUE-1525208), Miami
              University (DUE-1525131), North Dakota State University
              (DUE-1525414), and Virginia Commonwealth University (DUE-1525125).
              Dates: 09/01/15 – 08/31/19.
            </div>
            <Img
              fixed={data.allFile.edges[0].node.childImageSharp.fixed}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />
            <div>
              The WReSTT project is sponsored by two National Science Foundation
              grants: TUES 2 Collaborative Project: Integrating Testing into
              Advanced CS/IT Courses Supported by a Cyberlearning Environment.
              Grant award numbers: DUE-1225742 (FIU – Florida International
              University), DUE-1225654 (AAMU – Alabama A&M University),
              DUE-1224411 (MU-Ohio – Miami University, Ohio), and DUE-1225972
              (NDSU – North Dakota State University). PI team includes: Dr.
              Peter Clarke (FIU), Dr. Yujian Fu (AAMU), Dr. James Kiper
              (Mu-Ohio), and Dr. Tariq King and Dr. Gurisimran Walia (NDSU).
            </div>
            <Img
              fixed={data.allFile.edges[1].node.childImageSharp.fixed}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />

            <div>
              CCLI Phase I Collaborative Research: Web-Based Repository of
              Software Testing Tools. Grant award numbers: DUE-0736833 (FIU) and
              DUE-0736771 (FAMU – Florida A&M University). PI team includes: Dr.
              Peter J. Clarke and Senior Investigator Dr. Rochelle Michel (FIU);
              and Principal Investigator Dr. Edward Jones (FAMU).
            </div>
            <Img
              fixed={data.allFile.edges[2].node.childImageSharp.fixed}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />
            <div>
              Workshops and other aspects of the WRESTT project are supported by
              the following industry partners and academic institutions:
            </div>
            <br />
            <br />
            <Img
              fixed={data.allFile.edges[3].node.childImageSharp.fixed}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />
          </Col>
        </Row>
      </Container>
    </TemplateLayout>
  )
}

export default Sponsors
