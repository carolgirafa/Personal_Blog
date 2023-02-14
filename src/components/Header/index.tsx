import { HeaderContainer } from './styles'
import GirafaLogo from '../../assets/also_giraffe.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={GirafaLogo} alt="Giraffe face in gradient pink and purple" />
      <h1>carolina girafa</h1>
    </HeaderContainer>
  )
}
