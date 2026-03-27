'use client'

import React from 'react'
import { Modal as FlowbiteModal } from 'flowbite-react'

type ModalProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof FlowbiteModal>

const ModalFlow: React.FC<ModalProps> = ({ children, ...props }) => {
  return (
    <FlowbiteModal data-testid='modal' {...props}>
      {children}
    </FlowbiteModal>
  )
}

export default ModalFlow
