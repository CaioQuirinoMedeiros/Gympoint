import * as Yup from 'yup';

const paramsSchema = Yup.object().shape({
  help_order_id: Yup.number('O id deve ser um número')
    .integer('O id do pedido de auxílio deve ser um inteiro')
    .required('O id do pedido de auxílio é obrigatório')
});

const bodySchema = Yup.object().shape({
  answer: Yup.string('A resposta deve ser um texto')
    .required('A resposta é obrigatória')
});

export default async (req, res, next) => {
  try {
    await paramsSchema.validate(req.params);
    await bodySchema.validate(req.body);

    return next();
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ error: err.message });
    } else {
      console.error(err);
      return res.status(400).send({ error: 'Validation error' });
    }
  }
};
