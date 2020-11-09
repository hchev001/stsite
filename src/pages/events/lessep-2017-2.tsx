import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
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
        <Row>
          <Col>
            <p>
              Please contact <strong>Dr. Peter Clarke</strong> for additional
              information:
            </p>
            <p>
              <a href="mailto:clarkep@cis.fiu.edu">clarkep@cis.fiu.edu</a>
            </p>
            <p>Phone: (305) 348 2440</p>
          </Col>
        </Row>
      </Container>
    </TemplateLayout>
  )
}

export default LESSEP_2017_2
