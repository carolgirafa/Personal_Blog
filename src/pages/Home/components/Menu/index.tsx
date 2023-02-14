import { MenuItem } from '../MenuItem'

import {
  Briefcase,
  Student,
  Atom,
  Books,
  ChatsCircle,
  YinYang,
} from 'phosphor-react'

import { MenuContainer } from './styles'

export function Menu() {
  return (
    <MenuContainer>
      <MenuItem title="Studies" icon={<Student size={50} />} />
      <MenuItem title="Work Experience" icon={<Briefcase size={50} />} />
      <MenuItem title="Skills" icon={<Atom size={50} />} />
      <MenuItem title="Blog" icon={<ChatsCircle size={50} />} />
      <MenuItem title="Projects" icon={<Books size={50} />} />
      <MenuItem title="Hobbies" icon={<YinYang size={50} />} />
    </MenuContainer>
  )
}
