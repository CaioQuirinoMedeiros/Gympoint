import * as Yup from 'yup';
import { Op } from 'sequelize';
import { subDays, formatDistance, formatISO, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';

import Checkin from '../models/Checkin';

const paramsSchema = Yup.object().shape({
  student_id: Yup.number('O id deve ser um número')
    .integer('O id do aluno deve ser um inteiro')
    .required('O id do aluno é obrigatório')
});

export default async (req, res, next) => {
  const { student_id } = req.params;
  try {
    await paramsSchema.validate(req.params);

    const minDate = subDays(new Date(), 7);

    const lastCheckins = await Checkin.findAll({
      where: { student_id, created_at: { [Op.gt]: minDate } },
      order: [['created_at', 'DESC']]
    });

    if (lastCheckins.length >= 5) {
      const lastDate = lastCheckins[4].createdAt;
      const lastDateFormated = formatDistance(lastDate, minDate, {
        locale: pt,
        addSuffix: true
      });

      return res.status(400).send({
        error: `Mais de 5 checkins em 7 dias, tente novamente ${lastDateFormated}`
      });
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
