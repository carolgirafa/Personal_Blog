import { ReactNode } from 'react'

import { MenuItemContainer } from './styles'

export interface MenuItemProps {
  title: string
  icon: ReactNode
}

export function MenuItem({ title, icon }: MenuItemProps) {
  return (
    <MenuItemContainer>
      {icon}
      <span>{title}</span>
    </MenuItemContainer>
  )
}
