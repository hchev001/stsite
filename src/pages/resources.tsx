import React from "react"
import TemplateLayout from "../components/Layout/template-layout"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import styled from "styled-components"

const StyledMarkdown = styled.div``

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
      <Container>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default Resources
