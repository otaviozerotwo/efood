import Dish from '../../models/Dish'
import DishCard from '../DishCard'
import Grid from '../Grid'

type Props = {
  dishes: Dish[]
  onDishClick?: (dish: Dish) => void
}

const DishList = ({ dishes, onDishClick }: Props) => (
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

export default DishList
