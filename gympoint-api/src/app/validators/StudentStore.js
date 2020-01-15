import * as Yup from 'yup';

const bodySchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('O email não é um email válido')
    .required('O email é obrigatório'),
  age: Yup.number('A idade deve ser um número')
    .typeError('A idade deve ser um número inteiro')
    .integer('A idade deve ser um número inteiro em anos')
    .min(18, 'Não permitido menores de 18 anos')
    .max(120, 'Idade acima do permitido'),
  weight: Yup.number('O peso deve ser um número')
    .typeError('O peso deve ser um número inteiro')
    .integer('O peso deve ser um número inteiro em g')
    .min(20000, 'Peso abaixo do permitido')
    .max(400000, 'Peso acima do permitido')
    .nullable(),
  height: Yup.number('A altura deve ser um número em centímetros')
    .typeError('A altura deve ser um número inteiro')
    .integer('A altura deve ser um número inteiro em cm')
    .min(40, 'Altura abaixo do permitido')
    .max(250, 'Altura acima do permitido')
    .nullable()
});

export default async (req, res, next) => {
  try {
    await bodySchema.validate(req.body);
    return next();
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ error: err.message });
    } else {
      return res.status(400).send({ error: 'Validation error' });
    }
  }
};
