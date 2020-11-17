import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledMarkdown = styled.div``
const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .gatsby-image-wrapper {
    margin-top: 10px;
  }
  small {
    margin-top: 10px;
  }
`

const WISTPC_2009 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "fb1ad353-393f-5eb8-b1d2-fdff520c30dd" } }
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
        filter: { relativeDirectory: { eq: "events/wistpc-2009/images/small" } }
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
        filter: { relativeDirectory: { eq: "events/wistpc-2009/images/large" } }
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
            <small>Presenter: Dr. Peter Clarke (FIU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[1].node.publicURL} target="_blank">
              <Img fixed={smallImages[1].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Cem Kaner (Florida Tech)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[2].node.publicURL} target="_blank">
              <Img fixed={smallImages[2].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Tariq King (FIU)</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[3].node.publicURL} target="_blank">
              <Img fixed={smallImages[3].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Yi Deng (SCIS Dean, FIU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[4].node.publicURL} target="_blank">
              <Img fixed={smallImages[4].node.childImageSharp.fixed} />
            </a>
            <small>
              Presenter: Michael Longin & Greg Miller (Ultimate Software)
            </small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[5].node.publicURL} target="_blank">
              <Img fixed={smallImages[5].node.childImageSharp.fixed} />
            </a>
            <small>Stephen Edwards (Virginia Tech)</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[6].node.publicURL} target="_blank">
              <Img fixed={smallImages[6].node.childImageSharp.fixed} />
            </a>
            <small>Susann Ulrich (IBM)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[7].node.publicURL} target="_blank">
              <Img fixed={smallImages[7].node.childImageSharp.fixed} />
            </a>
            <small>Edward Jones (FAMU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[8].node.publicURL} target="_blank">
              <Img fixed={smallImages[8].node.childImageSharp.fixed} />
            </a>
            <small>WISTPC-09 Participants</small>
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

export default WISTPC_2009
