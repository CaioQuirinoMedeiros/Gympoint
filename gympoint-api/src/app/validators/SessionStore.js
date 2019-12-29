import * as Yup from 'yup';

const bodySchema = Yup.object().shape({
  email: Yup.string()
    .email('O email não é um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
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
