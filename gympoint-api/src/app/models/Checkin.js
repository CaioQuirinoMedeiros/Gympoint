import Sequelize, { Model } from 'sequelize';
import { addMonths } from 'date-fns';

import Plan from './Plan';

class Checkin extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
  }
}

export default Checkin;
