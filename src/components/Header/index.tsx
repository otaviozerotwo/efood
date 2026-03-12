import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, LinkCart } from './styles'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <h1>Restaurantes</h1>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
