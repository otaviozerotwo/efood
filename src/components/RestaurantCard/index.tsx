import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Card from '../Card'
import star from '../../assets/images/estrela.svg'
import * as S from './styles'
import variables from '../../styles/colors'
import { getDescription } from '../../utils'

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
      <S.Title>{restaurant.titulo}</S.Title>
      <S.Rating>
        <span>{restaurant.avaliacao}</span>
        <img src={star} alt="estrela" />
      </S.Rating>
    </div>
    <S.Description>{getDescription(restaurant.descricao)}</S.Description>
    <Link to={`/profile/${restaurant.id}`}>
      <Tag>Saiba mais</Tag>
    </Link>
  </Card>
)

export default RestaurantCard
