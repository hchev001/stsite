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

const LESSEP18 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "56e2b3b6-eb8d-5863-a61f-14d1ae71ddb9" } }
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
          relativeDirectory: { eq: "events/lessep-2018-1/images/small" }
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
          relativeDirectory: { eq: "events/lessep-2018-1/images/large" }
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
            <small>Presenters: Dr. Steve Condly (USMA)</small>
          </CenteredCol>
          <CenteredCol sm={4}>
            <a href={largeImages[2].node.publicURL} target="_blank">
              <Img fixed={smallImages[2].node.childImageSharp.fixed} />
            </a>
            <small>Presenters: Dr. Andrew Allen (GSU)</small>
          </CenteredCol>
        </Row>
        <Row>
          <CenteredCol sm={4}>
            <a href={largeImages[3].node.publicURL} target="_blank">
              <Img fixed={smallImages[3].node.childImageSharp.fixed} />
            </a>
            <small>Group Photo</small>
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
            <small>Presenter: Dr. M.O. Thirunarayanan (FIU)</small>
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
      </Container>
    </TemplateLayout>
  )
}

export default LESSEP18
