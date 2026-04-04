import Dish from '../models/Dish'

export const getDescription = (description: string) => {
  if (description.length > 252) {
    return description.slice(0, 249) + '...'
  }

  return description
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Dish[]) => {
  return items.reduce((accumulator, currentItem) => {
    return (accumulator += currentItem.preco)
  }, 0)
}
