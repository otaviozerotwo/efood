import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles'
import Home from './pages/Home'
import Profile from './pages/Profile'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'profile',
    element: <Profile />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
