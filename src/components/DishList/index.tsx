import DishCard from '../DishCard'
import Grid from '../Grid'
import Loader from '../Loader'

type Props = {
  dishes: Dish[]
  onDishClick?: (dish: Dish) => void
  isLoading: boolean
}

const DishList = ({ dishes, onDishClick, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <Grid
        items={dishes}
        columns={3}
        gap="32px"
        renderItem={(dish) => (
          <DishCard
            image={dish.foto}
            title={dish.nome}
            description={dish.descricao}
            onClick={() => onDishClick && onDishClick(dish)}
          />
        )}
      />
    </div>
  )
}

export default DishList
