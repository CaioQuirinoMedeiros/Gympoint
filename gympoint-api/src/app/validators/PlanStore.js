import * as Yup from 'yup';

const bodySchema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  duration: Yup.number('A duração deve ser um número')
    .required('A duração é obrigatório')
    .integer('A duração deve ser um número inteiro em meses')
    .min(1, 'Duração mínima de 1 mês')
    .max(120, 'Duração acima do permitido'),
  price: Yup.number('O preço deve ser um número')
    .required('O preço é obrigatório')
    .integer('O preço deve ser um número inteiro em centavos')
    .min(1000, 'Preço mínimo de 10 reais')
    .max(100000, 'Preço acima do permitido')
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
