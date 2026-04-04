import { useGetRestaurantsQuery } from '../../services/api'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default Home
