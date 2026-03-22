import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import DeliveryForm from '../DeliveyForm'
import PaymentForm from '../PaymentForm'
import { Container, Form } from './styles'
import { Sidebar } from '../../styles'

const Checkout = () => {
  const [displayDeliveryForm, setDisplayDeliveryForm] = useState(true)
  const [displayPaymentForm, setDisplayPaymentForm] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const navigate = useNavigate()

  const handleBackToCart = () => {
    navigate(-1)
  }

  const handleContinueWithPayment = () => {
    setDisplayDeliveryForm(false)
    setDisplayPaymentForm(true)
  }

  const handleGoToDeliveryForm = () => {
    setDisplayPaymentForm(false)
    setDisplayDeliveryForm(true)
  }

  const handleFinishOrderMessage = () => {
    setDisplayPaymentForm(false)
    setIsSuccess(true)
  }

  return (
    <Container>
      <Sidebar>
        <Form>
          {displayDeliveryForm && (
            <>
              <DeliveryForm />

              <div className="button-group">
                <Button
                  title="Clique aqui para continuar com o pagamento"
                  type="button"
                  onClick={handleContinueWithPayment}
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
            </>
          )}
          {displayPaymentForm && (
            <>
              <PaymentForm />

              <div className="button-group">
                <Button
                  title="Clique aqui para continuar com o pagamento"
                  type="button"
                  onClick={handleFinishOrderMessage}
                >
                  Finalizar pagamento
                </Button>
                <Button
                  title="Clique aqui para continuar com o pagamento"
                  type="button"
                  onClick={handleGoToDeliveryForm}
                >
                  Voltar para a edição de endereço
                </Button>
              </div>
            </>
          )}
          {isSuccess && (
            <>
              <h2>Pedido realizado - ORDER_ID</h2>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button
                title="Clique aqui para voltar a tela inicial"
                type="button"
                onClick={() => navigate('/')}
              >
                Concluir
              </Button>
            </>
          )}
        </Form>
      </Sidebar>
    </Container>
  )
}

export default Checkout
