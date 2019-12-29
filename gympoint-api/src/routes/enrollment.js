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
routes.get('/enrollments/:enrollmentId', EnrollmentController.show);
routes.put('/enrollments/:enrollmentId', EnrollmentController.update);
routes.delete('/enrollments/:enrollmentId', EnrollmentController.destroy);

export default routes;
