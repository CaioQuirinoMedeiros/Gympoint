import { Router } from 'express';

import EnrollmentController from '../app/controllers/EnrollmentController';

import validateEnrollmentStore from '../app/validators/EnrollmentStore';

const routes = new Router();

routes.post(
  '/enrollments',
  validateEnrollmentStore,
  EnrollmentController.store
);
routes.get('/enrollments', EnrollmentController.index);
routes.get('/enrollments/:enrollment_id', EnrollmentController.show);
routes.put('/enrollments/:enrollment_id', EnrollmentController.update);
routes.delete('/enrollments/:enrollment_id', EnrollmentController.destroy);

export default routes;
