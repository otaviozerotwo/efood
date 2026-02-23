import RestaurantModel from '../../models/Restaurant'
import { Container } from '../../styles'
import Restaurant from '../Restaurant'
import { List } from './styles'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          image={restaurant.image}
          infos={restaurant.infos}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
