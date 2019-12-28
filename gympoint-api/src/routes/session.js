import { Router } from 'express';

import SessionController from '../app/controllers/SessionController';

import validateSessionStore from '../app/validators/SessionStore';

const routes = new Router();

routes.post('/sessions', validateSessionStore, SessionController.store);

export default routes;
