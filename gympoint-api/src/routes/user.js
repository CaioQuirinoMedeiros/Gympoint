import { Router } from 'express';

import UserController from '../app/controllers/UserController';

import validateUserStore from '../app/validators/UserStore';

const routes = new Router();

routes.post('/users', validateUserStore, UserController.store);

export default routes;
