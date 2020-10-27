import React from "react"
import TemplateLayout from "../components/Layout/template-layout"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import styled from "styled-components"

const StyledMarkdown = styled.div``

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
      <Container>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default Publications
