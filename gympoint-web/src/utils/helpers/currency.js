const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const currencyFormatter = price => formatter.format(price / 100)
