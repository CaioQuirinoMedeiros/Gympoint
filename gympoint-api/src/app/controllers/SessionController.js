import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findByEmail(email);

      if (!user) {
        return res.status(404).send({ error: 'Usuário não encontrado' });
      }

      const passwordMatch = await user.checkPassword(password);

      if (!passwordMatch) {
        return res.status(401).send({ error: 'Senha inválida' });
      }

      const token = await user.generateJWT();

      return res.status(200).send({ user, token });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: 'Erro ao se autenticar' });
    }
  }
}

export default new SessionController();
