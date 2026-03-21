import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import DeliveryForm from './components/DeliveyForm'

const Router = () => {
  const location = useLocation()
  const state = location.state as { background?: Location }
  const background = state?.background

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/checkout" element={<DeliveryForm />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/checkout" element={<DeliveryForm />} />
        </Routes>
      )}
    </>
  )
}

export default Router
