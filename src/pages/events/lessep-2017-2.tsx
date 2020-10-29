import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"

const StyledMarkdown = styled.div``

const LESSEP_2017_2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "bc38c462-f0d6-5e3b-be35-7c2e37412e3e" } }
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

export default LESSEP_2017_2
