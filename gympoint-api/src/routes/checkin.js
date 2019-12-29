import { Router } from 'express';

import CheckinController from '../app/controllers/CheckinController';

import validateCheckinStore from '../app/validators/CheckinStore';

const routes = new Router();

routes.post(
  '/students/:student_id/checkins',
  validateCheckinStore,
  CheckinController.store
);

routes.get('/students/:student_id/checkins', CheckinController.index);

export default routes;
