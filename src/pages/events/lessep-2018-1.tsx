import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"

const StyledMarkdown = styled.div``

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

export default LESSEP18
