'use client'

import {
  Sidebar as SidebarFlowbite,
  SidebarCollapse,
  SidebarCTA,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from 'flowbite-react'
import React from 'react'

import { FacebookIcon } from '@/icons'

import SmallArrowIcon from '../../../icons/small-arrow-icon'

interface NavItem {
  label: string
  icon: React.FC<{ className?: string }>
  href?: string
  badge?: string
  children?: Omit<NavItem, 'children'>[]
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: FacebookIcon, href: '#' },
  {
    label: 'Analytics',
    icon: FacebookIcon,
    children: [
      { label: 'Overview', icon: FacebookIcon, href: '#' },
      { label: 'Revenue', icon: FacebookIcon, href: '#' },
    ],
  },
  { label: 'Inbox', icon: FacebookIcon, href: '#', badge: '3' },
  { label: 'Users', icon: FacebookIcon, href: '#' },
  { label: 'Products', icon: FacebookIcon, href: '#' },
  { label: 'Orders', icon: FacebookIcon, href: '#' },
]

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const [active, setActive] = React.useState('Dashboard')

  return (
    <div className='h-screem flex'>
      <SidebarFlowbite aria-label='Admin sidebar' collapsed={collapsed}>
        <SidebarItems>
          {/* Main nav */}
          <SidebarItemGroup>
            {/* Toggle — first item inside the sidebar */}
            <SidebarItem
              icon={collapsed ? SmallArrowIcon : FacebookIcon}
              onClick={() => setCollapsed((c) => !c)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              className='cursor-pointer'
            >
              {collapsed ? 'Expand' : 'Collapse'}
            </SidebarItem>

            {navItems.map((item) =>
              item.children ? (
                <SidebarCollapse
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                >
                  {item.children.map((child) => (
                    <SidebarItem
                      key={child.label}
                      href={child.href}
                      icon={child.icon}
                      active={active === child.label}
                      onClick={() => setActive(child.label)}
                    >
                      {child.label}
                    </SidebarItem>
                  ))}
                </SidebarCollapse>
              ) : (
                <SidebarItem
                  key={item.label}
                  href={item.href}
                  icon={item.icon}
                  label={item.badge}
                  labelColor='dark'
                  active={active === item.label}
                  onClick={() => setActive(item.label)}
                >
                  {item.label}
                </SidebarItem>
              )
            )}
          </SidebarItemGroup>

          {/* Bottom nav */}
          <SidebarItemGroup>
            {navItems.map((item) => (
              <SidebarItem
                key={item.label}
                href={item.href}
                icon={item.icon}
                active={active === item.label}
                onClick={() => setActive(item.label)}
              >
                {item.label}
              </SidebarItem>
            ))}
          </SidebarItemGroup>
        </SidebarItems>
      </SidebarFlowbite>
    </div>
  )
}

export default Sidebar
