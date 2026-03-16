import Restaurant from '../../models/Restaurant'
import getDescription from '../../utils/getDescription'
import Tag from '../Tag'
import Card from '../Card'
import { Description, Rating, Title } from './styles'
import star from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

type Props = {
  restaurant: Restaurant
  infos: string[]
}

const RestaurantCard = ({ restaurant, infos }: Props) => (
  <Card
    image={restaurant.capa}
    imageAlt={restaurant.titulo}
    bgColor={variables.white}
    padding="0px"
    badges={infos.map((info) => (
      <Tag key={info}>{info}</Tag>
    ))}
  >
    <div className="header">
      <Title>{restaurant.titulo}</Title>
      <Rating>
        <span>{restaurant.avaliacao}</span>
        <img src={star} alt="estrela" />
      </Rating>
    </div>
    <Description>{getDescription(restaurant.descricao)}</Description>
    <Link to={`/profile/${restaurant.id}`}>
      <Tag>Saiba mais</Tag>
    </Link>
  </Card>
)

export default RestaurantCard
