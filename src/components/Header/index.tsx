import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, CartButton } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div className="container">
        <h1>Restaurantes</h1>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default Header
