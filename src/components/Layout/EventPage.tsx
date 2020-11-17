import React from "react"
import { Col } from "reactstrap"
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
