import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'
import { getTotalPrice, parseToBrl } from '../../utils'
import Button from '../Button'
import * as S from './styles'
import { Sidebar } from '../../styles'

type Step = 'delivery' | 'payment'

const Checkout = () => {
  const [step, setStep] = useState<Step>('delivery')
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()

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
        .min(3, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .max(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .min(6, 'O nome precisa ter pelo menos 6 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .min(15, 'O cartão precisa ter pelo menos 15 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .min(2, 'O mês de vencimento precisa ter pelo menos 2 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        step === 'payment'
          ? schema
              .min(4, 'O ano de vencimento precisa ter 4 caracteres')
              .max(4, 'O mês de vencimento precisa ter 4 caracteres')
              .required('O campo é obrigatório')
          : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
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

  const checkInput = (fieldName: string, mode: 'valid' | 'error' = 'valid') => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (mode === 'valid') {
      return isTouched && !isInvalid
    }

    if (mode === 'error') {
      return isTouched && isInvalid
    }
  }

  const handleBackToCart = () => {
    navigate(-1)
  }

  const handleDeliveryForm = () => {
    if (
      checkInput('fullName') &&
      checkInput('address') &&
      checkInput('city') &&
      checkInput('cep') &&
      checkInput('number')
    ) {
      setStep('payment')
    } else {
      alert('Preencha todos os campos obrigatórios')
    }
  }

  const handleFinishPayment = () => {
    if (
      checkInput('cardDisplayName') &&
      checkInput('cardNumber') &&
      checkInput('cardCode') &&
      checkInput('expiresMonth') &&
      checkInput('expiresYear')
    ) {
      form.handleSubmit()
    } else {
      alert('Preencha todos os campos obrigatórios')
    }
  }

  const handleFinishOrder = () => {
    alert('OK')
  }

  return (
    <S.Container>
      <Sidebar>
        <S.Form onSubmit={form.handleSubmit}>
          {isSuccess && data ? (
            <>
              <h2>Pedido realizado - {data.orderId}</h2>
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
                onClick={handleFinishOrder}
              >
                Concluir
              </Button>
            </>
          ) : (
            <>
              {step === 'delivery' && (
                <>
                  <h2>Entrega</h2>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('fullName', 'error') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('address', 'error') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInput('city', 'error') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <IMaskInput
                        id="cep"
                        type="string"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInput('cep', 'error') ? 'error' : ''}
                        mask="00000-000"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInput('number', 'error') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInput('complement', 'error') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>

                  <div className="button-group">
                    <Button
                      title="Clique aqui para continuar com o pagamento"
                      type="button"
                      onClick={handleDeliveryForm}
                    >
                      Continuar com o pagamento
                    </Button>
                    <Button
                      title="Clique aqui para voltar para o carrinho"
                      type="button"
                      onClick={handleBackToCart}
                    >
                      Voltar para o carrinho
                    </Button>
                  </div>
                </>
              )}
              {step === 'payment' && (
                <>
                  <h2>
                    Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
                  </h2>
                  <S.InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input
                      id="cardDisplayName"
                      type="text"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInput('cardDisplayName', 'error') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <IMaskInput
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInput('cardNumber', 'error') ? 'error' : ''
                        }
                        mask="0000 0000 0000 0000"
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <IMaskInput
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInput('cardCode', 'error') ? 'error' : ''
                        }
                        mask="000"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <IMaskInput
                        id="expiresMonth"
                        type="text"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInput('expiresMonth', 'error') ? 'error' : ''
                        }
                        mask="00"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <IMaskInput
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInput('expiresYear', 'error') ? 'error' : ''
                        }
                        mask="0000"
                      />
                    </S.InputGroup>
                  </S.Row>

                  <div className="button-group">
                    <Button
                      title="Clique aqui para finalizar o pagamento"
                      type="submit"
                      disabled={isLoading}
                      onClick={handleFinishPayment}
                    >
                      {isLoading
                        ? 'Finalizando pagamento...'
                        : 'Finalizar pagamento'}
                    </Button>
                    <Button
                      title="Clique aqui para voltar para a edição de endereço"
                      type="button"
                      onClick={() => setStep('delivery')}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </S.Form>
      </Sidebar>
    </S.Container>
  )
}

export default Checkout
