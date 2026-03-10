import { Button as FlowbiteButton } from 'flowbite-react'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?:
    | 'primary'
    | 'green'
    | 'red'
    | 'white'
    | 'alternative-dark'
    | 'alternative'
    | 'dark'
    | 'grey'
    | 'blue'
  className?: string
} & React.ComponentProps<typeof FlowbiteButton>

const Button = ({
  children,
  onClick,
  color = 'red',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  return (
    <FlowbiteButton
      color={color}
      size={size}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </FlowbiteButton>
  )
}

export default Button
