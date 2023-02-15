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
      <MenuItem title="Studies" icon={<Student size={50} />} link="/studies" />
      <MenuItem
        title="Work Experience"
        icon={<Briefcase size={50} />}
        link="/work-experience"
      />
      <MenuItem title="Skills" icon={<Atom size={50} />} link="/skills" />
      <MenuItem title="Blog" icon={<ChatsCircle size={50} />} link="/blog" />
      <MenuItem title="Projects" icon={<Books size={50} />} link="/projects" />
      <MenuItem title="Hobbies" icon={<YinYang size={50} />} link="/hobbies" />
    </MenuContainer>
  )
}
