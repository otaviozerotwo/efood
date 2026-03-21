import { Sidebar } from '../../styles'
import { Container, Form, InputGroup } from './styles'

const PaymentForm = () => {
  return (
    <Container>
      <Sidebar>
        <Form>
          <h2>Pagamento - Valor a pagar R$ 190,90</h2>
          <InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input id="fullName" type="text" />
          </InputGroup>
        </Form>
      </Sidebar>
    </Container>
  )
}

export default PaymentForm
