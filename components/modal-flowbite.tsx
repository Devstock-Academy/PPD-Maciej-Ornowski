'use client'

import React from 'react'
import {
  Modal as FlowbiteModal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'flowbite-react'

type ModalProps = {
  show: boolean
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
}

const ModalFlow: React.FC<ModalProps> = ({ show, header, body, footer }) => {
  return (
    <FlowbiteModal data-testid='modal' dismissible show={show}>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </FlowbiteModal>
  )
}

export default ModalFlow
