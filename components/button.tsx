import { Button as FlowbiteButton } from 'flowbite-react'
import React from 'react'

type ButtonProps = {
  children?: React.ReactNode
  className?: string
  testId?: string
} & React.ComponentProps<typeof FlowbiteButton>

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  testId,
  ...props
}) => {
  return (
    <FlowbiteButton className={className} data-testid={testId} {...props}>
      {children}
    </FlowbiteButton>
  )
}

export default Button
