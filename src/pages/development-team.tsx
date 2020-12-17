import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import TemplateLayout from "../components/Layout/template-layout"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledMarkdown = styled.div``

const DevelopmentTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "4d1d8e34-b1f2-59c7-8ab8-40feb4d89cee" } }
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
  const { title } = frontmatter

  return (
    <TemplateLayout title={title}>
      <SEO title={title} />
      <Container style={{ paddingTop: "65px", paddingBottom: "65px" }}>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default DevelopmentTeam
