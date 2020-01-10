import * as Yup from 'yup'

export default Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  duration: Yup.number()
    .typeError('A duração deve ser um número inteiro')
    .required('A duração é obrigatória')
    .integer('A duração deve ser um inteiro')
    .min(1, 'Duração mínima de 1 mês')
    .max(120, 'Duração acima do permitido'),
  price: Yup.number()
    .typeError('O preço deve ser um número inteiro')
    .required('O preço é obrigatório')
    .max(10000, 'Preço acima do permitido')
})
