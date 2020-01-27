import * as Yup from 'yup'

export default Yup.object().shape({
  student_id: Yup.number()
    .typeError('O id do aluno deve ser um número inteiro')
    .required('O aluno é obrigatório')
    .integer('O id do aluno deve ser um inteiro'),
  plan_id: Yup.number()
    .typeError('O id do plano deve ser um número inteiro')
    .required('O plano é obrigatório')
    .integer('O id do plano deve ser um inteiro'),
  start_date: Yup.date()
    .typeError('A data inicial deve ter um formato válido de data')
    .required('A data inicial é obrigatória')
})
