import * as Yup from 'yup'

const emptyStringToNullable = (value, originalValue) => {
  return originalValue.trim() === '' ? null : value
}

export default Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  age: Yup.number()
    .typeError('A idade deve ser um número inteiro')
    .required('A idade é obrigatória')
    .integer('A altura deve ser um inteiro'),
  height: Yup.number()
    .typeError('A altura deve ser um número inteiro')
    .min(0.4, 'Altura mínima de 50cm')
    .max(2.5, 'Altura máxima de 2,5m')
    .nullable()
    .transform(emptyStringToNullable),
    weight: Yup.number('O peso deve ser um número')
    .typeError('O peso deve ser um número inteiro')
    .min(30, 'Peso mínino de 30kg')
    .max(400, 'Peso máximo de 400kg')
    .nullable()
    .transform(emptyStringToNullable)
})
