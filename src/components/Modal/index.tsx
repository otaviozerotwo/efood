import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Dish from '../../models/Dish'
import * as S from './styles'
import closeIcon from '../../assets/images/close.png'
import Button from '../Button'
import { parseToBrl } from '../../utils'

type Props = {
  onClose: () => void
  dish: Dish
}

const Modal = ({ onClose, dish }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(dish))
    onClose()
    dispatch(open())
  }

  return (
    <S.ModalContainer>
      <S.ModalContent className="container">
        <img
          className="close-icon"
          src={closeIcon}
          alt="Ícone de fechar"
          onClick={onClose}
        />
        <S.Image src={dish.foto} alt={dish.nome} />
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
            {`Adicionar ao carrinho - ${parseToBrl(dish.preco)}`}
          </Button>
        </div>
      </S.ModalContent>
      <div className="overlay"></div>
    </S.ModalContainer>
  )
}

export default Modal
