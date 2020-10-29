import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Container } from "reactstrap"
import TemplateLayout from "../components/Layout/template-layout"
import styled from "styled-components"

const StyledMarkdown = styled.div``

const Instances = () => {
  return (
    <TemplateLayout title="Instances">
      <Container></Container>
    </TemplateLayout>
  )
}

export default Instances
