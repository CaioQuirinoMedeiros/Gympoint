import * as Yup from 'yup';

import Student from '../models/Student';
import Plan from '../models/Plan';

const bodySchema = Yup.object().shape({
  student_id: Yup.number()
    .typeError('O id deve ser um número')
    .integer('O id do aluno deve ser um inteiro')
    .required('O id do aluno é obrigatório')
    .positive('O id deve ser um inteiro positivo'),
  plan_id: Yup.number()
    .typeError('O id deve ser um número')
    .integer('O id do plano deve ser um inteiro')
    .required('O id do plano é obrigatório')
    .positive('O id deve ser um inteiro positivo'),
  start_date: Yup.date()
    .typeError('A data de início deve ser uma data válida')
    .required('A data de início é obrigatório')
});

export default async (req, res, next) => {
  const { student_id, plan_id } = req.body;

  try {
    await bodySchema.validate(req.body);

    const student = await Student.findByPk(student_id);
    const plan = await Plan.findByPk(plan_id);

    if (!student) {
      return res
        .status(404)
        .send({ error: `O aluno ${student_id} não foi encontrado` });
    }

    if (!plan) {
      return res
        .status(404)
        .send({ error: `O plano ${plan_id} não foi encontrado` });
    }

    req.student = student;
    req.plan = plan;

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
