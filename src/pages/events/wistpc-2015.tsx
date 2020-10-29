import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"

const StyledMarkdown = styled.div``

const WISTPC_2015 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "94915f98-79c6-5ef4-adba-0707179d8baf" } }
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
    }
  `)

  const { frontmatter, html } = data.allMarkdownRemark.nodes[0]
  const { title, subtitle } = frontmatter

  return (
    <TemplateLayout title={title} subtitle={subtitle}>
      <Container>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default WISTPC_2015
