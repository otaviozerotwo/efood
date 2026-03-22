import { InputGroup, Row } from './styles'

const DeliveryForm = () => (
  <>
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
  </>
)

export default DeliveryForm
