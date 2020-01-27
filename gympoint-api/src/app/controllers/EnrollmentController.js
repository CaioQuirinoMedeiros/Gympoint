import { Op } from 'sequelize'

import Enrollment from '../models/Enrollment'
import Student from '../models/Student'
import Plan from '../models/Plan'

import MailService from '../../services/Mail'

class EnrollmentController {
  async store (req, res) {
    const { start_date, student_id, plan_id } = req.body

    try {
      const enrollmentExists = await Enrollment.findOne({
        where: {
          plan_id,
          student_id,
          end_date: { [Op.gte]: new Date() }
        }
      })

      if (enrollmentExists) {
        return res
          .status(400)
          .send({ error: 'Aluno já matrículado nesse plano' })
      }

      const enrollment = await Enrollment.create({
        start_date,
        student_id,
        plan_id
      })

      await MailService.newEnrollment(req.student, req.plan)

      return res.status(201).send(enrollment)
    } catch (err) {
      console.error(err)
      return res.status(400).send({ error: 'Erro ao criar matrícula' })
    }
  }

  async index (req, res) {
    try {
      const enrollments = await Enrollment.findAll({
        include: ['student', 'plan'],
        attributes: ['id', 'start_date', 'end_date', 'price', 'active']
      })

      return res.status(200).send(enrollments)
    } catch (err) {
      console.error(err)
      return res.status(400).send({ error: 'Erro ao buscar matrículas' })
    }
  }

  async show (req, res) {
    const { enrollment_id } = req.params

    try {
      const enrollment = await Enrollment.findByPk(enrollment_id, {
        include: [{ all: true }]
      })

      if (!enrollment) {
        return res
          .status(404)
          .send({ error: `Matrícula ${enrollment_id} não encontrada` })
      }

      return res.status(200).send(enrollment)
    } catch (err) {
      console.error(err)
      return res.status(400).send({ error: 'Erro ao buscar matrícula' })
    }
  }

  async update (req, res) {
    const { enrollment_id } = req.params

    try {
      const enrollment = await Enrollment.findByPk(enrollment_id, {
        include: ['student', 'plan']
      })

      if (!enrollment) {
        return res
          .status(404)
          .send({ error: `Matrícula ${enrollment_id} não encontrada` })
      }

      await enrollment.update(req.body)

      return res.status(200).send(enrollment)
    } catch (err) {
      console.error(err)
      return res.status(400).send({ error: 'Erro ao editar matrícula' })
    }
  }

  async destroy (req, res) {
    const { enrollment_id } = req.params

    try {
      const enrollment = await Enrollment.findByPk(enrollment_id)

      if (!enrollment) {
        return res
          .status(404)
          .send({ error: `Matrícula ${enrollment_id} não encontrada` })
      }

      await enrollment.destroy()

      return res.status(200).send()
    } catch (err) {
      console.error(err)
      return res.status(400).send({ error: 'Erro ao excluir matrícula' })
    }
  }
}

export default new EnrollmentController()
