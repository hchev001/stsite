import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import TemplateLayout from "../components/Layout/template-layout"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledMarkdown = styled.div``
const InstanceCard = styled.div`
  width: 100%;
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const FatRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`
const Instances = () => {
  const data = useStaticQuery(graphql`
    query {
      SepCyleImg: file(name: { eq: "sep-cyle-portfolio-tile" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DemoImg: file(name: { eq: "sep-cyle-portfolio-tile-demo" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const { SepCyleImg, DemoImg } = data

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <TemplateLayout title="Instances">
      <Container>
        <FatRow>
          <InstanceCard>
            <Img fluid={SepCyleImg.childImageSharp.fluid} />
          </InstanceCard>
          <InstanceCard>
            <Img fluid={DemoImg.childImageSharp.fluid} />
          </InstanceCard>
        </FatRow>
      </Container>
    </TemplateLayout>
  )
}

export default Instances
