import RestaurantModel from '../../models/Restaurant'
import { Container } from '../../styles'
import RestaurantCard from '../RestaurantCard'
import Grid from '../Grid'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <Grid
      items={restaurants}
      columns={2}
      gap="80px"
      keyExtractor={(r) => r.id}
      renderItem={(restaurant) => (
        <RestaurantCard
          image={restaurant.image}
          infos={restaurant.infos}
          title={restaurant.title}
          rating={restaurant.rating}
          description={restaurant.description}
        />
      )}
    />
  </Container>
)

export default RestaurantList
