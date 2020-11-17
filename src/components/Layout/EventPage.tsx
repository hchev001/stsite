import React from "react"
import { Container, Col } from "reactstrap"
import styled from "styled-components"

export const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .gatsby-image-wrapper {
    margin-top: 10px;
  }
  small {
    margin-top: 10px;
  }
`
export const EventContainer = styled(Container)`
  p {
    font-size: 16px;
  }

  li {
    font-size: 14px;
  }

  a {
    color: #18bc9c;
    outline: 0px;

    :hover {
      color: #18bc9c;
      outline: 0px;
    }
    :focus {
      color: #18bc9c;
      outline: 0px;
    }

    .active {
      color: #18bc9c;
      outline: 0px;
    }
  }

  padding-top: 40px;
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;

  max-width: 66.6%;
`
