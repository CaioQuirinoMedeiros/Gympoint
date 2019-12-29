import Enrollment from '../models/Enrollment';
import Student from '../models/Student';
import Plan from '../models/Plan';

import MailService from '../../services/Mail';

class EnrollmentController {
  async store(req, res) {
    const { start_date, student_id, plan_id } = req.body;

    try {
      const enrollment = await Enrollment.create({
        start_date,
        student_id,
        plan_id
      });

      const student = await Student.findByPk(student_id);
      const plan = await Plan.findByPk(plan_id);

      await MailService.newEnrollment(student, plan);

      return res.status(201).send(enrollment);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao criar matrícula' });
    }
  }

  async index(req, res) {
    try {
      const enrollments = await Enrollment.findAll();

      return res.status(200).send(enrollments);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao buscar matrículas' });
    }
  }

  async show(req, res) {
    const { enrollmentId } = req.params;

    try {
      const enrollment = await Enrollment.findByPk(enrollmentId, {
        include: [{ all: true }]
      });

      if (!enrollment) {
        return res
          .status(404)
          .send({ error: `Matrícula ${enrollmentId} não encontrada` });
      }

      return res.status(200).send(enrollment);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao buscar matrícula' });
    }
  }

  async update(req, res) {
    const { enrollmentId } = req.params;

    try {
      const enrollment = await Enrollment.findByPk(enrollmentId);

      if (!enrollment) {
        return res
          .status(404)
          .send({ error: `Matrícula ${enrollmentId} não encontrada` });
      }

      await enrollment.update(req.body);

      return res.status(200).send(enrollment);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao editar matrícula' });
    }
  }

  async destroy(req, res) {
    const { enrollmentId } = req.params;

    try {
      const enrollment = await Enrollment.findByPk(enrollmentId);

      if (!enrollment) {
        return res
          .status(404)
          .send({ error: `Matrícula ${enrollmentId} não encontrada` });
      }

      await enrollment.destroy();

      return res.status(200).send();
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao excluir matrícula' });
    }
  }
}

export default new EnrollmentController();
