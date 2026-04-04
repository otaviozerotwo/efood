import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import { HeaderBar, CartButton } from './styles'
import Logo from '../Logo'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div className="container">
        <h2>Restaurantes</h2>
        <Logo />
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default Header
