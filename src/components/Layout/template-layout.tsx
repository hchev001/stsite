import React from "react"
import Header from "../header"
import { Theme } from "./Theme.styled"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import Footer from "../footer"

const StyledContainer = styled.div`
  margin-top: 62px;
  height: 25vh;
  background: #18bc9c;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 40px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
  }
`
interface Props {
  children?: any
  title: string
}
const TemplateLayout = ({ children, title }: Props) => {
  return (
    <Theme>
      <Header />
      <StyledContainer>
        <div className="title">{title}</div>
      </StyledContainer>
      {children}
      <Footer />
    </Theme>
  )
}

export default TemplateLayout
