import React from "react"
import TemplateLayout from "../components/Layout/template-layout"
import { useStaticQuery, graphql } from "gatsby"
import { Col, Container, Row } from "reactstrap"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledMarkdown = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  
  p {
    font-size: 16px;
  }

  h3 {
    text-decoration: underline;
  }

  a {
    color: #18bc9c;
    outline: 0px;

    :hover {
      color: #18bc9c;
      outline: 0px;
    }
    :focus {
      color: #18bc9c;
      outline: 0px;
    }

    .active {
      color: #18bc9c;
      outline: 0px;
    }
`

const Publications = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "1e713950-1ffe-5b49-83c2-86e24da3810e" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.nodes[0]
  return (
    <TemplateLayout title="Publications">
      <SEO title="Publications" />
      <Container>
        <StyledMarkdown>
          <Row style={{ justifyContent: "center" }}>
            <Col md={8}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Col>
          </Row>
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default Publications
