import { Link } from 'react-router-dom'
import { Logo } from '../Hero/styles'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, LinkCart, Title } from './styles'

const Header = () => (
  <HeaderBar>
    <Title>Restaurantes</Title>
    <Link to="/">
      <Logo src={logo} alt="logo" />
    </Link>
    <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
  </HeaderBar>
)

export default Header
