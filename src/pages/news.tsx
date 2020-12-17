import React from "react"
import TemplateLayout from "../components/Layout/template-layout"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import styled from "styled-components"
import SEO from "../components/seo"

const StyledMarkdown = styled.div`
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 65px 0px;
  h5 {
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
  }

  p {
    font-size: 20px;
  }
`
const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { id: { eq: "e3c2ecf3-4214-5d42-a4b0-969c7f3c5803" } }
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
    <TemplateLayout title="News">
      <SEO title="News" />
      <Container>
        <StyledMarkdown>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdown>
      </Container>
    </TemplateLayout>
  )
}

export default News
