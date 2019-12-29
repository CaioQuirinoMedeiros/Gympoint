import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    try {
      const studentExists = await Student.findByEmail(req.body.email);

      if (studentExists) {
        return res.status(400).send({ error: 'E-mail já registrado' });
      }

      const student = await Student.create(req.body);

      return res.status(201).send(student);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao criar aluno' });
    }
  }
}

export default new StudentController();
