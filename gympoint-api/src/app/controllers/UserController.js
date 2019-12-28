import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const userExists = await User.findByEmail(req.body.email);

      if (userExists) {
        return res.status(400).send({ error: 'E-mail já registrado' });
      }

      const user = await User.create(req.body);

      const { id, name, email } = user;

      return res.status(200).send({ id, name, email });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao criar usuário' });
    }
  }
}

export default new UserController();
