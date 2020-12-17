import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"
import { EventContainer } from "../../components/Layout/EventPage"
import SEO from "../../components/seo"

const StyledMarkdown = styled.div``

const WISTPC_2014_1 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "99c200e5-8220-500e-b667-ea90ca181a3a" } }
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
      <SEO title={title} />
      <EventContainer>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </EventContainer>
    </TemplateLayout>
  )
}

export default WISTPC_2014_1
