import * as Yup from 'yup'

export default Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  age: Yup.number('A idade deve ser um número').required(
    'A idade é obrigatória'
  )
})
