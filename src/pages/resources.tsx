import React from "react"
import TemplateLayout from "../components/Layout/template-layout"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledMarkdown = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    text-decoration-line: underline;
    text-decoration-style: double;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  p {
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  ul {
    margin-top: 0px;
  }
`

const Resources = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "4ada3374-8eb0-5ad6-a65f-88a6aa6fe1e8" } }
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
    <TemplateLayout title="Resources">
      <SEO title="Resources" />
      <Container>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default Resources
