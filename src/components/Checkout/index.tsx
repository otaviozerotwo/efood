import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import { Container, Form, InputGroup, Row } from './styles'
import { Sidebar } from '../../styles'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [displayDeliveryForm, setDisplayDeliveryForm] = useState(true)
  const [displayPaymentForm, setDisplayPaymentForm] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

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

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O CEP precisa ter 9 caracteres')
        .max(5, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string().when((values, schema) =>
        displayPaymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        displayPaymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        displayPaymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        displayPaymentForm ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        displayPaymentForm ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <Container>
      <Sidebar>
        <Form onSubmit={form.handleSubmit}>
          {displayDeliveryForm && (
            <>
              <h2>Entrega</h2>
              <InputGroup>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('address', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('city', form.errors.fullName)}</small>
              </InputGroup>
              <Row>
                <InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <input
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cep', form.errors.fullName)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('number', form.errors.fullName)}
                  </small>
                </InputGroup>
              </Row>
              <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('complement', form.errors.fullName)}
                </small>
              </InputGroup>

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
              <h2>Pagamento - Valor a pagar R$ 190,90</h2>
              <InputGroup>
                <label htmlFor="cardDisplayName">Nome no cartão</label>
                <input
                  id="cardDisplayName"
                  type="text"
                  name="cardDisplayName"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('cardDisplayName', form.errors.fullName)}
                </small>
              </InputGroup>
              <Row>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardNumber', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    id="cardCode"
                    type="text"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cardCode', form.errors.fullName)}
                  </small>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expiresMonth', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expiresYear', form.errors.fullName)}
                  </small>
                </InputGroup>
              </Row>

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
