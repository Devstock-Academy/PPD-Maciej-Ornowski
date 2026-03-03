import { Button as FlowbiteButton } from 'flowbite-react'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Button = ({ children, onClick, size = 'md', className }: ButtonProps) => {
  return (
    <FlowbiteButton size={size} onClick={onClick} className={className}>
      {children}
    </FlowbiteButton>
  )
}

export default Button