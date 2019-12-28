import { Router } from 'express';

import StudentController from '../app/controllers/StudentController';

import validateStudentStore from '../app/validators/StudentStore';

const routes = new Router();

routes.post('/students', validateStudentStore, StudentController.store);

export default routes;
