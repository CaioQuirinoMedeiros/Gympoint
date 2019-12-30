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

  async index(req, res) {
    try {
      const students = await Student.findAll();

      return res.status(200).send(students);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao buscar alunos' });
    }
  }

  async update(req, res) {
    const { student_id } = req.params;
    try {
      const student = await Student.findByPk(student_id);

      if (!student) {
        return res
          .status(404)
          .send({ error: `O aluno ${student_id} não foi encontrado` });
      }

      await student.update(req.body)

      return res.status(200).send(student);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao buscar aluno' });
    }
  }

  async destroy(req, res) {
    const { student_id } = req.params;
    console.log('PARAAAAAAAAMS')
    console.log(student_id)

    try {
      const student = await Student.findByPk(student_id);
      console.log('studeeeeeeeeeeeeeeeent')
      console.log(student)

      if (!student) {
        return res
          .status(404)
          .send({ error: `O aluno ${student_id} não foi encontrado` });
      }

      await student.destroy()

      return res.status(200).send();
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao deletar aluno' });
    }
  }
}

export default new StudentController();
