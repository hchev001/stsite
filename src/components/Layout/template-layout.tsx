import React from "react"
import Header from "../header"
import { Theme } from "./Theme.styled"
import styled from "styled-components"
import Footer from "../footer"

const StyledContainer = styled.div`
  margin-top: 62px;
  height: 25vh;
  background: #18bc9c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 40px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
  }

  .subtitle {
    font-size: 20px;
    color: #fff;
  }
`
interface Props {
  children?: any
  subtitle?: string
  title: string
}
const TemplateLayout = ({ children, title, subtitle }: Props) => {
  return (
    <Theme>
      <Header />
      <StyledContainer>
        <div className="title">{title}</div>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      </StyledContainer>
      {children}
      <Footer />
    </Theme>
  )
}

export default TemplateLayout
