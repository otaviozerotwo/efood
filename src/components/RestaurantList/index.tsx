import RestaurantCard from '../RestaurantCard'
import Grid from '../Grid'
import Loader from '../Loader'

type Props = {
  restaurants: Restaurant[]
  isLoading: boolean
}

const RestaurantList = ({ restaurants, isLoading }: Props) => {
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

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <div className="container">
        <Grid
          items={restaurants}
          columns={2}
          gap="80px"
          renderItem={(restaurant) => (
            <RestaurantCard
              restaurant={restaurant}
              infos={getRestaurantTags(restaurant)}
            />
          )}
        />
      </div>
    </>
  )
}

export default RestaurantList
