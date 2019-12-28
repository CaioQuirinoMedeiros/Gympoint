import { Router } from 'express';

import PlanController from '../app/controllers/PlanController';

import validatePlanStore from '../app/validators/PlanStore';

const routes = new Router();

routes.post('/plans', validatePlanStore, PlanController.store);
routes.get('/plans', PlanController.index);
routes.get('/plans/:planId', PlanController.show);
routes.put('/plans/:planId', PlanController.update);
routes.delete('/plans/:planId', PlanController.destroy);

export default routes;
