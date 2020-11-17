import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Col, Row } from "reactstrap"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { CenteredCol, EventContainer } from "../../components/Layout/EventPage"

const StyledMarkdown = styled.div``

const LESSEP19Flyer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "71d25895-8d38-5c7d-8305-01c0c6ccec5b" } }
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
        filter: {
          relativeDirectory: { eq: "events/lessep-2019-1/images/small" }
        }
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
        filter: {
          relativeDirectory: { eq: "events/lessep-2019-1/images/large" }
        }
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
      <EventContainer>
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
            <small>Presenter: Dr. Steven Condly (USMA)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[1].node.publicURL} target="_blank">
              <Img fixed={smallImages[1].node.childImageSharp.fixed} />
            </a>
            <small>Presenters: Dr. Peter Clarke (FIU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[2].node.publicURL} target="_blank">
              <Img fixed={smallImages[2].node.childImageSharp.fixed} />
            </a>
            <small>
              Presenters: Dr. James Kiper (MU) & Dr. Mourya Reddy (NDSU)
            </small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[3].node.publicURL} target="_blank">
              <Img fixed={smallImages[3].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Andrew Allen (GSU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[4].node.publicURL} target="_blank">
              <Img fixed={smallImages[4].node.childImageSharp.fixed} />
            </a>
            <small>Dr. Gursimran Walia (NDSU)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[5].node.publicURL} target="_blank">
              <Img fixed={smallImages[5].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Dr. Debra Davis (FIU)</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[6].node.publicURL} target="_blank">
              <Img fixed={smallImages[6].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Poster Session</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[7].node.publicURL} target="_blank">
              <Img fixed={smallImages[7].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Poster Session</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[8].node.publicURL} target="_blank">
              <Img fixed={smallImages[8].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Poster Session</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[9].node.publicURL} target="_blank">
              <Img fixed={smallImages[9].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Group Session</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[10].node.publicURL} target="_blank">
              <Img fixed={smallImages[10].node.childImageSharp.fixed} />
            </a>
            <small>Presenter: Group Session</small>
          </CenteredCol>
          <CenteredCol
            sm={4}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Img fixed={smallImages[11].node.childImageSharp.fixed} />
            <small>Presenter: Group Session</small>
          </CenteredCol>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>
              Please contact{" "}
              <a href="mailto:lessep@cis.fiu.edu">lessep@cis.fiu.edu</a> for
              additional information.
            </p>
          </Col>
        </Row>
      </EventContainer>
    </TemplateLayout>
  )
}

export default LESSEP19Flyer
