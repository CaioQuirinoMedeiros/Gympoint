import * as Yup from 'yup'

export default Yup.object().shape({
  email: Yup.string()
    .required('O email é obrigatório')
    .email('Digite um email válido'),
  password: Yup.string().required('A senha é obrigatória')
})
