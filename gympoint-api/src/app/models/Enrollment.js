import Sequelize, { Model } from 'sequelize';
import { addMonths, isAfter, isBefore } from 'date-fns';

import Plan from './Plan';

class Enrollment extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.INTEGER,
        active: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
            'start_date',
            'end_date'
          ]),
          get() {
            return (
              isBefore(this.get('start_date'), new Date()) &&
              isAfter(this.get('end_date'), new Date())
            );
          }
        }
      },
      {
        sequelize
      }
    );

    this.addHook('beforeSave', async enrollment => {
      const plan = await Plan.findByPk(enrollment.plan_id);

      enrollment.price = plan.price * plan.duration;
      enrollment.end_date = addMonths(enrollment.start_date, plan.duration);
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    this.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
  }
}

export default Enrollment;
