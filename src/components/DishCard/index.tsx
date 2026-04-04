import variables from '../../styles/colors'
import { getDescription } from '../../utils'
import Button from '../Button'
import Card from '../Card'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick?: () => void
}

const DishCard = ({ image, title, description, onClick }: Props) => (
  <Card
    image={image}
    imageAlt={title}
    bgColor={variables.lobisterPink}
    padding="8px 8px 0px 8px"
  >
    <S.Title>{title}</S.Title>
    <S.Description>{getDescription(description)}</S.Description>
    <Button
      type="button"
      title="Clique aqui para ver mais detalhes"
      onClick={onClick}
    >
      Mais detalhes
    </Button>
  </Card>
)

export default DishCard
