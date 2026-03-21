import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../../styles'
import Button from '../Button'
import { Container, Form, InputGroup, Row } from './styles'

const DeliveryForm = () => {
  const navigate = useNavigate()

  const handleBackToCart = () => {
    navigate(-1)
  }

  return (
    <Container>
      <Sidebar>
        <Form>
          <h2>Entrega</h2>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="address">Endereço</label>
            <input id="address" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input id="city" type="text" />
          </InputGroup>
          <Row>
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input id="cep" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Número</label>
              <input id="number" type="text" />
            </InputGroup>
          </Row>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input id="complement" type="text" />
          </InputGroup>

          <div className="button-group">
            <Button
              title="Clique aqui para continuar com o pagamento"
              type="button"
            >
              Continuar com o pagamento
            </Button>
            <Button
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={handleBackToCart}
            >
              Voltar para o carrinho
            </Button>
          </div>
        </Form>
      </Sidebar>
    </Container>
  )
}

export default DeliveryForm
