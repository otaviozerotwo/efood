import Restaurant from '../../models/Restaurant'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
