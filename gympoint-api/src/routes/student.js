import { Router } from 'express';

import StudentController from '../app/controllers/StudentController';

import validateStudentStore from '../app/validators/StudentStore';

const routes = new Router();

routes.post('/students', validateStudentStore, StudentController.store);
routes.get('/students', StudentController.index);
routes.put('/students/:student_id', StudentController.update);
routes.delete('/students/:student_id', StudentController.destroy);

export default routes;
