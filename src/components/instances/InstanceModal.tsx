import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledModal = styled(Modal)`
  .modal-dialog {
    margin-left: 0;
    margin-right: 0;
  }
`
const StyledTitle = styled.span``
export const InstanceModal = (props: any) => {
  const {
    buttonLable,
    classNam,
    toggle,
    modal,
    CloseLink,
    className,
    Title,
    children,
    url,
  } = props

  const OpenLink = () => {
    const win = window.open(url, "_blank")
    //@ts-ignore
    win.focus()
    toggle()
  }

  return (
    <div>
      <StyledModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{Title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            style={{ background: "#18bc9c" }}
            onClick={OpenLink}
          >
            Go To Instance
          </Button>
          <Button
            color="secondary"
            style={{ background: "red" }}
            onClick={CloseLink}
          >
            Cancel
          </Button>
        </ModalFooter>
      </StyledModal>
    </div>
  )
}
