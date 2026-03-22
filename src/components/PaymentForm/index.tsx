import { InputGroup, Row } from './styles'

const PaymentForm = () => (
  <>
    <h2>Pagamento - Valor a pagar R$ 190,90</h2>
    <InputGroup>
      <label htmlFor="cardDisplayName">Nome no cartão</label>
      <input id="cardDisplayName" type="text" />
    </InputGroup>
    <Row>
      <InputGroup>
        <label htmlFor="cardNumber">Número do cartão</label>
        <input id="cardNumber" type="text" />
      </InputGroup>
      <InputGroup maxWidth="87px">
        <label htmlFor="cardCode">CVV</label>
        <input id="cardCode" type="text" />
      </InputGroup>
    </Row>
    <Row>
      <InputGroup>
        <label htmlFor="expiresMonth">Mês de vencimento</label>
        <input id="expiresMonth" type="text" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="expiresYear">Ano de vencimento</label>
        <input id="expiresYear" type="text" />
      </InputGroup>
    </Row>
  </>
)

export default PaymentForm
