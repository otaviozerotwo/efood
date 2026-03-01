import Tag from '../Tag'
import Card from '../Card'
import { Description, Rating, Title } from './styles'

import star from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'
import variables from '../../styles/variables'

type Props = {
  image: string
  infos: string[]
  title: string
  rating: number
  description: string
}

const RestaurantCard = ({
  image,
  title,
  rating,
  infos,
  description
}: Props) => (
  <Card
    image={image}
    imageAlt={title}
    bgColor={variables.white}
    padding="0px"
    badges={infos.map((info) => (
      <Tag key={info}>{info}</Tag>
    ))}
  >
    <div className="header">
      <Title>{title}</Title>
      <Rating>
        <span>{rating}</span>
        <img src={star} alt="estrela" />
      </Rating>
    </div>
    <Description>{description}</Description>
    <Link to="/profile">
      <Tag>Saiba mais</Tag>
    </Link>
  </Card>
)

export default RestaurantCard
