import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static async findByEmail(email) {
    return this.findOne({ where: { email } });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  generateJWT() {
    const { id } = this;
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn
    });
  }

  toJSON() {
    const values = { ...this.get() };

    delete values.password_hash;
    delete values.password;

    return values;
  }
}

export default User;
