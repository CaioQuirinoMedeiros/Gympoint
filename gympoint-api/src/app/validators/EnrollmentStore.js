import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      student_id: Yup.number('O id deve ser um número')
        .integer('O id do aluno deve ser um inteiro')
        .required('O id do aluno é obrigatório')
        .positive('O id deve ser um inteiro positivo'),
      plan_id: Yup.number('O id deve ser um número')
        .integer('O id do plano deve ser um inteiro')
        .required('O id do plano é obrigatório')
        .positive('O id deve ser um inteiro positivo'),
      start_date: Yup.date('A data de início deve ser uma data válida')
        .required('A duração é obrigatório')
        .min(new Date(), 'A data não pode ser uma data passada')
    });

    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ error: err });
    } else {
      console.error(err);
      return res.status(400).send({ error: 'Validation error' });
    }
  }
};
