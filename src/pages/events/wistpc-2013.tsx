import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { CenteredCol } from "../../components/Layout/EventPage"

const StyledMarkdown = styled.div``

const WISTPC_2013 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "3416015e-4d5b-5a7a-a7e2-4ecc94fe324d" } }
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
        filter: { relativeDirectory: { eq: "events/wistpc-2013/images/small" } }
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
        filter: { relativeDirectory: { eq: "events/wistpc-2013/images/large" } }
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
            <small>Presenter: PMr. Troy Thomas (Ultimate)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[1].node.publicURL} target="_blank">
              <Img fixed={smallImages[1].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Tariq King, Mr. Cody Mack (Ultimate)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[2].node.publicURL} target="_blank">
              <Img fixed={smallImages[2].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Debra Davis (FIU)</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[3].node.publicURL} target="_blank">
              <Img fixed={smallImages[3].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Steve Condly (USMA)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[4].node.publicURL} target="_blank">
              <Img fixed={smallImages[4].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Yujian Fu (AAMU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[5].node.publicURL} target="_blank">
              <Img fixed={smallImages[5].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Gursimran Walia (NDSU)</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[6].node.publicURL} target="_blank">
              <Img fixed={smallImages[6].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Peter Clarke (FIU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[7].node.publicURL} target="_blank">
              <Img fixed={smallImages[7].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Edward Jones (FAMU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[8].node.publicURL} target="_blank">
              <Img fixed={smallImages[8].node.childImageSharp.fixed} />
            </a>
            <small>Group Picture</small>
          </CenteredCol>
        </Row>
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
          </Col>
        </Row>
      </Container>
    </TemplateLayout>
  )
}

export default WISTPC_2013
