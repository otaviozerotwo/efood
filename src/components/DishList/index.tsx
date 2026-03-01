import DishModel from '../../models/Dish'
import { Container } from '../../styles'
import DishCard from '../DishCard'
import Grid from '../Grid'

type Props = {
  dishes: DishModel[]
}

const DishList = ({ dishes }: Props) => (
  <Container>
    <Grid
      items={dishes}
      columns={3}
      gap="32px"
      keyExtractor={(d) => d.id}
      renderItem={(dish) => (
        <DishCard
          image={dish.image}
          title={dish.title}
          description={dish.description}
        />
      )}
    />
  </Container>
)

export default DishList
