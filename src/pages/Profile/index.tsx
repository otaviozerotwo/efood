import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import Header from '../../components/Header'
import Modal from '../../components/Modal'

import Footer from '../../components/Footer'
import Dish from '../../models/Dish'
// import { useParams } from 'react-router-dom'

const Profile = () => {
  // const { id } = useParams()
  const [dishes, setDishes] = useState<Dish[]>([])
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDishes(res))
  }, [])

  function handleOpenDish(dish: Dish) {
    setSelectedDish(dish)
  }

  function handleCloseModal() {
    setSelectedDish(null)
  }

  return (
    <>
      <Header />
      <Banner category="Italiana" title="La Dolce Vita Trattoria" />
      <DishList dishes={dishes} onDishClick={handleOpenDish} />
      <Footer />
      {selectedDish ? (
        <Modal dish={selectedDish} onClose={handleCloseModal} />
      ) : null}
    </>
  )
}

export default Profile
