import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import TemplateLayout from "../../components/Layout/template-layout"
import styled from "styled-components"
import { EventContainer } from "../../components/Layout/EventPage"
import SEO from "../../components/seo"

const StyledMarkdown = styled.div``

const LESSEP_2017_3 = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "63aab274-81fa-5efd-832b-c30ba75eb139" } }
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

export default LESSEP_2017_3
