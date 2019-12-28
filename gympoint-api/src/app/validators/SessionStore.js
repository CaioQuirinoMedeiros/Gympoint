import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('O email não é um email válido')
        .required('O email é obrigatório'),
      password: Yup.string().required('A senha é obrigatória')
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ error: err });
    } else {
      return res.status(400).send({ error: 'Validation error' });
    }
  }
};
