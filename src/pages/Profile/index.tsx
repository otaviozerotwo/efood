import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Restaurant from '../../models/Restaurant'
import Dish from '../../models/Dish'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import Footer from '../../components/Footer'

const Profile = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  const getDishes = () => {
    const dishes = restaurant.cardapio
    return dishes
  }

  function handleOpenDish(dish: Dish) {
    setSelectedDish(dish)
  }

  function handleCloseModal() {
    setSelectedDish(null)
  }

  return (
    <>
      <Header />
      <Banner restaurant={restaurant} />
      <DishList dishes={getDishes()} onDishClick={handleOpenDish} />
      <Footer />
      {selectedDish ? (
        <Modal dish={selectedDish} onClose={handleCloseModal} />
      ) : null}
    </>
  )
}

export default Profile
