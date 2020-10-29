import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import TemplateLayout from "../components/Layout/template-layout"
import styled from "styled-components"

const StyledMarkdown = styled.div``

const ResearchTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "ffdaac9f-7ce0-5cc4-9551-3fd1e3c2459f" } }
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
      <Container style={{ paddingTop: "65px", paddingBottom: "65px" }}>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default ResearchTeam
