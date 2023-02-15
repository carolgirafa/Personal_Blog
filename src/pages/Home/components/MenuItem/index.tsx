import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuItemContainer } from './styles'

export interface MenuItemProps {
  title: string
  icon: ReactNode
  link:
    | '/blog'
    | '/work-experience'
    | '/studies'
    | '/projects'
    | '/hobbies'
    | '/skills'
}

export function MenuItem({ title, icon, link }: MenuItemProps) {
  return (
    <MenuItemContainer>
      <NavLink to={link}>
        {icon}
        <span>{title}</span>
      </NavLink>
    </MenuItemContainer>
  )
}
