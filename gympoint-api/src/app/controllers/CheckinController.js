import Checkin from '../models/Checkin';

class CheckinController {
  async store(req, res) {
    const { student_id } = req.params;

    try {
      const checkin = await Checkin.create({ student_id });

      return res.status(201).send(checkin);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao fazer checkin' });
    }
  }

  async index(req, res) {
    const { student_id } = req.params;

    try {
      const chekins = await Checkin.findAll({
        where: { student_id },
        order: ['created_at']
      });

      return res.status(200).send(chekins);
    } catch (err) {
      console.error(err);
      return res
        .status(400)
        .send({ error: 'Erro ao buscar checkins do aluno' });
    }
  }
}

export default new CheckinController();
