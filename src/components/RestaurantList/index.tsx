import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import Grid from '../Grid'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado == true) {
      const highlighted = 'Destaque da semana'
      tags.push(highlighted)
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }
  return (
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
              infos={getRestaurantTags(restaurant)}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
            />
          )}
        />
      </div>
    </>
  )
}

export default RestaurantList
