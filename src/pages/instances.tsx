import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import TemplateLayout from "../components/Layout/template-layout"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledMarkdown = styled.div``
const InstanceCard = styled.div`
  min-width: 80%;
  background-color: ;
`
const Instances = () => {
  const data = useStaticQuery(graphql`
    query {
      AffiliatesImg: file(
        relativePath: { eq: "sep-cyle-portfolio-tile.png" }
      ) {
        childImageSharp {
          fluid() {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DemoImg: file(relativePath: { eq: "sep-cyle-portfolio-tile.demo.png" }) {
        childImageSharp {
          fluid() {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <TemplateLayout title="Instances">
      <Container>
        <Row>
          <Col>
            <img src={ProdTile} />
          </Col>
          <Col>
            <img src={DemoTile} />
          </Col>
        </Row>
      </Container>
    </TemplateLayout>
  )
}

export default Instances
