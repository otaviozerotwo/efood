import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'
import Router from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
