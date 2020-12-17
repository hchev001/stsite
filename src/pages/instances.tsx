import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import TemplateLayout from "../components/Layout/template-layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { InstanceModal } from "../components/instances/InstanceModal"
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

  const [SepcyleModal, setSepcyleModal] = useState(false)
  const toggle = () => setSepcyleModal(!SepcyleModal)
  const [DemoModal, setDemoModal] = useState(false)
  const toggleDemo = () => setDemoModal(!DemoModal)

  return (
    <>
      <TemplateLayout title="Instances">
        <Container>
          <FatRow>
            <InstanceCard onClick={toggle}>
              <Img fluid={SepCyleImg.childImageSharp.fluid} />
            </InstanceCard>
            <InstanceCard onClick={toggleDemo}>
              <Img fluid={DemoImg.childImageSharp.fluid} />
            </InstanceCard>
          </FatRow>
        </Container>
      </TemplateLayout>
      <InstanceModal
        toggle={toggle}
        CloseLink={toggle}
        modal={SepcyleModal}
        Title="SEP-CYLE"
        url="https://stem-cyle.cis.fiu.edu/app/#/login"
      >
        <span>
          SEP-CyLE is the live instance of the STEM-CyLE learning management
          system currently under active use by a number of institutions.{" "}
        </span>
      </InstanceModal>
      <InstanceModal
        toggle={toggleDemo}
        CloseLink={toggleDemo}
        modal={DemoModal}
        Title="SEP-CYLE(DEMO)"
        url="https://stem-cyle.cis.fiu.edu/app-demo/#/login"
      >
        <span>
          SEP-CyLE (DEMO) is the demonstration instance of the STEM-CyLE
          learning management system used to demonstrate the platform during
          workshops, events, or institutions/instructors interested in learning
          more about STEM-CyLE.{" "}
        </span>
      </InstanceModal>
    </>
  )
}

export default Instances
