import { Router } from 'express';

import HelpOrderController from '../app/controllers/HelpOrderController';

import validateHelpOrderStore from '../app/validators/HelpOrderStore';
import validateHelpOrderAnswer from '../app/validators/HelpOrderAnswer';

const routes = new Router();

routes.post(
  '/students/:student_id/help-orders',
  validateHelpOrderStore,
  HelpOrderController.store
);
routes.get('/students/:student_id/help-orders', HelpOrderController.show);

routes.get('/help-orders', HelpOrderController.index);
routes.post(
  '/help-orders/:help_order_id/answer',
  validateHelpOrderAnswer,
  HelpOrderController.answer
);

export default routes;
