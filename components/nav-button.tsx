import React from 'react'
import Link from 'next/link'

import { Button } from '@/components'

type ButtonProps = React.ComponentProps<typeof Button>

type NavButtonProps = {
  children: React.ReactNode
  href?: string
} & Omit<ButtonProps, 'onClick'>

const NavButton: React.FC<NavButtonProps> = ({
  href = '/',
  children,
  ...props
}) => {
  return (
    <Link href={href}>
      <Button {...props} onClick={() => {}}>
        {children}
      </Button>
    </Link>
  )
}

export default NavButton
