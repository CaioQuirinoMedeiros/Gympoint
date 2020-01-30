import { Op } from 'sequelize'

import HelpOrder from '../models/HelpOrder'

import MailService from '../../services/Mail'

class HelpOrderController {
  async store (req, res) {
    const { student_id } = req.params
    const { question } = req.body

    try {
      const helpOrder = await HelpOrder.create({ student_id, question })

      return res.status(201).send(helpOrder)
    } catch (err) {
      console.error(err)
      return res.status(400).send({ error: 'Erro ao criar pedido de auxílio' })
    }
  }

  async index (req, res) {
    try {
      const helpOrders = await HelpOrder.findAll({
        where: { answer: { [Op.is]: null } },
        order: ['created_at'],
        include: ['student']
      })

      return res.status(200).send(helpOrders)
    } catch (err) {
      console.error(err)
      return res
        .status(400)
        .send({ error: 'Erro ao buscar pedidos de auxílio' })
    }
  }

  async show (req, res) {
    const { student_id } = req.params

    try {
      const helpOrders = await HelpOrder.findAll({
        where: { student_id },
        order: [['created_at', 'DESC']]
      })

      return res.status(200).send(helpOrders)
    } catch (err) {
      console.error(err)
      return res
        .status(400)
        .send({ error: 'Erro ao buscar pedidos de auxílio do aluno' })
    }
  }

  async answer (req, res) {
    const { help_order_id } = req.params
    const { answer } = req.body

    try {
      const helpOrder = await HelpOrder.findByPk(help_order_id, {
        include: [{ all: true }]
      })

      if (!helpOrder) {
        return res
          .status(404)
          .send({ error: `Auxílio de pedido ${help_order_id} não encontrado` })
      }

      await helpOrder.update({ answer })

      await MailService.helpOrderAnswared(helpOrder)

      return res.status(200).send(helpOrder)
    } catch (err) {
      console.error(err)
      return res
        .status(400)
        .send({ error: 'Erro ao responder pedido de auxílio' })
    }
  }
}

export default new HelpOrderController()
