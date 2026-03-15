import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Dish from '../../models/Dish'
import { Image, ModalContainer, ModalContent } from './styles'
import closeIcon from '../../assets/images/close.png'
import Button from '../Button'
import formatPrice from '../../utils/formatPrice'

type Props = {
  onClose: () => void
  dish: Dish
}

const Modal = ({ onClose, dish }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
    dispatch(open())
  }

  return (
    <ModalContainer>
      <ModalContent className="container">
        <img
          className="close-icon"
          src={closeIcon}
          alt="Ícone de fechar"
          onClick={onClose}
        />
        <Image src={dish.foto} alt={dish.nome} />
        <div>
          <h4>{dish.nome}</h4>
          <p>{dish.descricao}</p>
          <p>Serve: de {dish.porcao}</p>
          <Button
            title="Adicionar ao carrinho"
            type="button"
            className="add-to-cart"
            onClick={addToCart}
          >
            {`Adicionar ao carrinho - ${formatPrice(dish.preco)}`}
          </Button>
        </div>
      </ModalContent>
      <div className="overlay"></div>
    </ModalContainer>
  )
}

export default Modal
