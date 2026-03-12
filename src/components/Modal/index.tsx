import Dish from '../../models/Dish'
import { Image, ModalContainer, ModalContent } from './styles'
import closeIcon from '../../assets/images/close.png'
import Button from '../Button'

type Props = {
  onClose?: () => void
  dish?: Dish | null
}

const Modal = ({ onClose, dish }: Props) => (
  <ModalContainer>
    <ModalContent className="container">
      <img
        className="close-icon"
        src={closeIcon}
        alt="Ícone de fechar"
        onClick={onClose}
      />
      <Image src={dish?.foto ?? ''} alt={dish?.nome ?? 'Imagem do prato'} />
      <div>
        <h4>{dish?.nome ?? ''}</h4>
        <p>{dish?.descricao ?? ''}</p>
        <p>{dish?.porcao}</p>
        <Button title="Adicionar ao carrinho" type="link">
          {`Adicionar ao carrinho - R$ ${dish?.preco}`}
        </Button>
      </div>
    </ModalContent>
    <div className="overlay"></div>
  </ModalContainer>
)

export default Modal
