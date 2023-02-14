import { Contact } from '../../components/Contact/index'
import { Menu } from './components/Menu/index'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Contact />
      <Menu />
    </HomeContainer>
  )
}
