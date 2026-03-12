import variables from '../../styles/variables'
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
    onClick={onClick}
  >
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button type="button" title="adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default DishCard
