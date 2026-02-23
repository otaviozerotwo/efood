import Tag from '../Tag'
import { Card, CardBody, Description, Infos, Rating, Title } from './styles'

import star from '../../assets/images/estrela.svg'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  infos: string[]
  title: string
  rating: number
  description: string
}

const Restaurant = ({ image, title, rating, infos, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardBody>
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
    </CardBody>
  </Card>
)

export default Restaurant
