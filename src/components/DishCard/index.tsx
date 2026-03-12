import variables from '../../styles/variables'
import getDescription from '../../utils/getDescription'
import Button from '../Button'
import Card from '../Card'
import { Description, Title } from './styles'

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
    <Title>{title}</Title>
    <Description>{getDescription(description)}</Description>
    <Button type="button" title="adicionar ao carrinho" onClick={onClick}>
      Mais detalhes
    </Button>
  </Card>
)

export default DishCard
