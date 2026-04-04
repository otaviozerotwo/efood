import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import * as S from './styles'
import { Sidebar } from '../../styles'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const location = useLocation()
  const navigate = useNavigate()

  const handleContinue = () => {
    if (items.length === 0) {
      return alert('Selecione algum item para seguir com o pedido')
    } else {
      navigate('/checkout', { state: { background: location } })
    }
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{parseToBrl(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>
          <p>Valor total</p>
          <p>{parseToBrl(getTotalPrice(items))}</p>
        </S.Prices>
        <Button
          title="Clique aqui para continuar com a entrega"
          type="button"
          onClick={handleContinue}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </S.CartContainer>
  )
}

export default Cart
