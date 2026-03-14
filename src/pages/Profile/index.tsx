import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import Dish from '../../models/Dish'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import Footer from '../../components/Footer'

const Profile = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  const getDishes = () => {
    const dishes = restaurant.cardapio
    return dishes
  }

  const handleOpenDishDetails = (dish: Dish) => {
    return setSelectedDish(dish)
  }

  const handleCloseModal = () => {
    return setSelectedDish(null)
  }

  return (
    <>
      <Header />
      <Banner restaurant={restaurant} />
      <DishList dishes={getDishes()} onDishClick={handleOpenDishDetails} />
      <Footer />
      {selectedDish ? (
        <Modal dish={selectedDish} onClose={handleCloseModal} />
      ) : null}
    </>
  )
}

export default Profile
