import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    try {
      const plan = await Plan.create(req.body);

      return res.status(201).send(plan);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao criar plano' });
    }
  }

  async index(req, res) {
    try {
      const plans = await Plan.findAll();

      return res.status(200).send(plans);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao buscar planos' });
    }
  }

  async show(req, res) {
    try {
      const plan = await Plan.findByPk(req.params.planId);

      if (!plan) {
        return res
          .status(404)
          .send({ error: `Plano ${req.params.planId} não encontrado` });
      }

      return res.status(200).send(plan);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao buscar plano' });
    }
  }

  async update(req, res) {
    try {
      const plan = await Plan.findByPk(req.params.planId);

      if (!plan) {
        return res
          .status(404)
          .send({ error: `Plano ${req.params.planId} não encontrado` });
      }

      await plan.update(req.body);

      return res.status(200).send(plan);
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao editar plano' });
    }
  }

  async destroy(req, res) {
    try {
      const plan = await Plan.findByPk(req.params.planId);

      if (!plan) {
        return res
          .status(404)
          .send({ error: `Plano ${req.params.planId} não encontrado` });
      }

      await plan.destroy();

      return res.status(200).send();
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao excluir plano' });
    }
  }
}

export default new PlanController();
