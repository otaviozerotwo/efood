import Restaurant from '../../models/Restaurant'
import { BackGroundImage } from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => (
  <BackGroundImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <h2>{restaurant.tipo}</h2>
      <h1>{restaurant.titulo}</h1>
    </div>
  </BackGroundImage>
)

export default Banner
