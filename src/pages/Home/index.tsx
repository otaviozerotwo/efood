import { useGetRestaurantsQuery } from '../../services/api'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import Footer from '../../components/Footer'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
