import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import * as S from './styles'
import Logo from '../Logo'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div className="container">
        <h2>Restaurantes</h2>
        <Logo />
        <S.CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartButton>
      </div>
    </S.HeaderBar>
  )
}

export default Header
