'use client'

import React from 'react'

import { FacebookIcon, SmallArrowIcon } from '@/icons'
import { NavButton, Button } from '@/components'

interface NavItem {
  label: string
  icon: React.FC<{ className?: string }>
  href?: string
  badge?: string
  children?: Omit<NavItem, 'children'>[]
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: FacebookIcon, href: '/dashboard' },
  { label: 'Inbox', icon: FacebookIcon, href: '#', badge: '3' },
  { label: 'Users', icon: FacebookIcon, href: '#' },
  { label: 'Products', icon: FacebookIcon, href: '#' },
  { label: 'Orders', icon: FacebookIcon, href: '#' },
]

type SidebarGroupProps = {
  children: React.ReactNode
}

const SidebarGroup: React.FC<SidebarGroupProps> = ({ children }) => (
  <nav className='flex flex-col items-start gap-y-2 space-y-2 border-t border-gray-700 p-4 first:border-t-0 '>
    {children}
  </nav>
)

type SidebarItemsProps = {
  children: React.ReactNode
  isCollapsed?: boolean
}

const SidebarItems: React.FC<SidebarItemsProps> = ({
  children,
  isCollapsed,
}) => (
  <div className='flex flex-row gap-x-4 gap-y-8'>
    <div className='flex w-auto flex-col content-center items-center'>
      {children}
    </div>
    {!isCollapsed && (
      <div className='flex w-auto flex-col content-center items-center'>
        {children}
      </div>
    )}
  </div>
)

type SidebarButtonProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Button>

const SidebarButton: React.FC<SidebarButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    {...props}
    className='cursor-pointer p-0 transition-transform duration-75 ease-in hover:scale-150'
    color='transparent'
  >
    {children}
  </Button>
)

type SidebarNavButtonProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof NavButton>

const SidebarNavButton: React.FC<SidebarNavButtonProps> = ({
  children,
  ...props
}) => (
  <NavButton
    {...props}
    className='cursor-pointer p-0 transition-transform duration-75 ease-in hover:scale-150'
    color='transparent'
  >
    {children}
  </NavButton>
)

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [active, setActive] = React.useState('Dashboard')

  return (
    <div
      aria-label='sidebar'
      className='flex h-screen flex-col bg-rich-black text-white'
    >
      <SidebarGroup>
        <SidebarButton onClick={() => setCollapsed((prev) => !prev)}>
          <SmallArrowIcon />
        </SidebarButton>
        <SidebarItems isCollapsed={collapsed}>
          <SidebarNavButton>
            <SmallArrowIcon />
          </SidebarNavButton>
        </SidebarItems>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarItems isCollapsed={collapsed}>
          <SidebarButton>
            <SmallArrowIcon />
          </SidebarButton>
          <SidebarNavButton>
            <SmallArrowIcon />
          </SidebarNavButton>
        </SidebarItems>
      </SidebarGroup>
      <SidebarGroup>
        <div></div>
      </SidebarGroup>
    </div>
  )
}

export default Sidebar
