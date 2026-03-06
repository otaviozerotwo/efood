import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, LinkCart } from './styles'
import { Container } from '../../styles'

const Header = () => (
  <HeaderBar>
    <Container>
      <h1>Restaurantes</h1>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </Container>
  </HeaderBar>
)

export default Header
