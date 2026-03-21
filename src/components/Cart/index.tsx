import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import formatPrice from '../../utils/formatPrice'
import { CartContainer, CartItem, Overlay, Prices } from './styles'
import { Sidebar } from '../../styles'

const Cart = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/checkout', { state: { background: location } })
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Prices>
        <Button
          title="Clique aqui para continuar com a entrega"
          type="button"
          onClick={handleContinue}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
