import React from "react"
import TemplateLayout from "../components/Layout/template-layout"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import styled from "styled-components"

const StyledMarkdown = styled.div``

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "11c9f3df-8358-5cf6-a841-15e32d06a160" } }
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
    <TemplateLayout title="Events">
      <Container>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default Events
