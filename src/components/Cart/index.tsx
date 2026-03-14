import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

import pizza from '../../assets/images/pizza_marguerita.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        <p>Valor total</p>
        <p>R$ 182,70</p>
      </Prices>
      <Button title="Clique aqui para continuar com a entrega" type="button">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
