import React from 'react'
import Link from 'next/link'

import { Button } from '@/components'

type NavButtonProps = {
  children: React.ReactNode
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?:
    | 'primary'
    | 'alternative'
    | 'alternative-dark'
    | 'dark'
    | 'gray'
    | 'green'
    | 'red'
    | 'white'
}

const NavButton = ({
  href = '/',
  children,
  size = 'sm',
  variant = 'primary',
}: NavButtonProps) => {
  // TODO variant
  return (
    <Link href={href}>
      <Button onClick={() => {}} size={size} className='px-8.125'>
        {children}
      </Button>
    </Link>
  )
}

export default NavButton
