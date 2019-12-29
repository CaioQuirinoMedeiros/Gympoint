import * as Yup from 'yup';

import Student from '../models/Student';

const paramsSchema = Yup.object().shape({
  student_id: Yup.number('O id deve ser um número')
    .integer('O id do aluno deve ser um inteiro')
    .required('O id do aluno é obrigatório')
});

const bodySchema = Yup.object().shape({
  question: Yup.string('A pergunta deve ser um texto')
    .required('A pergunta é obrigatória')
});

export default async (req, res, next) => {
  const { student_id } = req.params;
  try {
    await paramsSchema.validate(req.params);
    await bodySchema.validate(req.body);

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res
        .status(404)
        .send({ error: `O aluno ${student_id} não foi encontrado` });
    }

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
