import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant, isLoading } = useGetRestaurantQuery(id)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  if (!restaurant) {
    return <Loader />
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
      <Banner restaurant={restaurant} isLoading={isLoading} />
      <DishList
        dishes={getDishes()}
        onDishClick={handleOpenDishDetails}
        isLoading={isLoading}
      />
      <Footer />
      {selectedDish ? (
        <Modal dish={selectedDish} onClose={handleCloseModal} />
      ) : null}
      <Cart />
    </>
  )
}

export default Profile
