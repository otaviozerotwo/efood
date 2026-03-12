import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import Grid from '../Grid'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <>
    <div className="container">
      <Grid
        items={restaurants}
        columns={2}
        gap="80px"
        keyExtractor={(r) => r.id}
        renderItem={(restaurant) => (
          <RestaurantCard
            image={restaurant.capa}
            type={restaurant.tipo}
            title={restaurant.titulo}
            rating={restaurant.avaliacao}
            description={restaurant.descricao}
          />
        )}
      />
    </div>
  </>
)

export default RestaurantList
