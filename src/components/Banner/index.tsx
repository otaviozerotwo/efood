import Restaurant from '../../models/Restaurant'
import Loader from '../Loader'
import { BackGroundImage } from './styles'

type Props = {
  restaurant: Restaurant
  isLoading: boolean
}

const Banner = ({ restaurant, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <BackGroundImage style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <h2>{restaurant.tipo}</h2>
        <h1>{restaurant.titulo}</h1>
      </div>
    </BackGroundImage>
  )
}

export default Banner
