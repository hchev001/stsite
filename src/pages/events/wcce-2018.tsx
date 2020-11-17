import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { CenteredCol } from "../../components/Layout/EventPage"

const StyledMarkdown = styled.div``

const WCCE2018 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "4991b4f4-ccf0-557c-a375-4c6002e18077" } }
      ) {
        nodes {
          id
          frontmatter {
            title
            subtitle
          }
          html
        }
      }
      smallImages: allFile(
        filter: { relativeDirectory: { eq: "events/wcce-2018/images/small" } }
        sort: { order: ASC, fields: base }
      ) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
            childImageSharp {
              fixed(width: 145) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      largeImages: allFile(
        filter: { relativeDirectory: { eq: "events/wcce-2018/images/large" } }
        sort: { order: ASC, fields: base }
      ) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
            publicURL
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.nodes[0]
  const { title, subtitle } = frontmatter
  const smallImages = data.smallImages.edges
  const largeImages = data.largeImages.edges

  return (
    <TemplateLayout title={title} subtitle={subtitle}>
      <Container>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
        <p>
          <strong>Selected Event Images</strong>
        </p>
        <hr />
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[0].node.publicURL} target="_blank">
              <Img fixed={smallImages[0].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Benjamin Scribner (DHS)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[1].node.publicURL} target="_blank">
              <Img fixed={smallImages[1].node.childImageSharp.fixed} />
            </a>
            <small>
              Presenters: Dr. Fransisco Ortega, Nicholas Torres, Neha Kasturia
              (FIU)
            </small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[2].node.publicURL} target="_blank">
              <Img fixed={smallImages[2].node.childImageSharp.fixed} />
            </a>
            <small>Group Photo</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[3].node.publicURL} target="_blank">
              <Img fixed={smallImages[3].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Peter Clarke (FIU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[4].node.publicURL} target="_blank">
              <Img fixed={smallImages[4].node.childImageSharp.fixed} />
            </a>
            <small>Group Work Session</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[5].node.publicURL} target="_blank">
              <Img fixed={smallImages[5].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Ingrid Buckley (FGCU)</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[6].node.publicURL} target="_blank">
              <Img fixed={smallImages[6].node.childImageSharp.fixed} />
            </a>
            <small>
              Presenter: Dr. Sriram Chellappan - Described proposed BSc in
              Cybersecurity (USF)
            </small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[7].node.publicURL} target="_blank">
              <Img fixed={smallImages[7].node.childImageSharp.fixed} />
            </a>
            <small>
              Presenter: Dr. Janusz Zalewski - Briefly describes his software
              security class (FGCU)
            </small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[8].node.publicURL} target="_blank">
              <Img fixed={smallImages[8].node.childImageSharp.fixed} />
            </a>
            <small>
              Presenter: Dr. James Skon - Presents his AI system that uses
              adaptive learning. (Kenyon College)
            </small>
          </CenteredCol>
          <hr />
          <Row>
            <Col>
              <p>
                Please contact <strong>Dr. Peter Clarke</strong> for additional
                information:
              </p>
              <p>
                <a href="mailto:clarkep@cis.fiu.edu">clarkep@cis.fiu.edu</a>
              </p>
              <p>Phone: (305) 348 2440</p>
              <p>Organizers:</p>
              <ul>
                <li>Ingrid Buckley (FGCU)</li>
                <li>Bogdan Carbunar (FIU)</li>
                <li>Peter Clarke (FIU)</li>
                <li>Francisco Ortega (FIU)</li>
                <li>Nicholas Torres (FIU)</li>
                <li>Neha Kasturia (FIU)</li>
                <li>Chaithra Allala</li>
                <li>Raymond Chang-lau</li>
                <li>Hamilton Chevez</li>
                <li>Juan Sotomayor</li>
              </ul>
            </Col>
          </Row>
        </Row>
      </Container>
    </TemplateLayout>
  )
}

export default WCCE2018
