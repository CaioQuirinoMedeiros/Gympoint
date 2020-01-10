import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: {
          type: Sequelize.INTEGER,
          allowNull: true,
          validate: {
            min: 20000,
            max: 400000
          }
        },
        height: {
          type: Sequelize.INTEGER,
          allowNull: true,
          validate: {
            min: 40,
            max: 250
          },
        }
      },
      {
        sequelize
      }
    );

    return this;
  }

  static async findByEmail(email) {
    return this.findOne({ where: { email } });
  }
}

export default Student;
