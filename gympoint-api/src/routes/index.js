import { Router } from 'express';

import authMiddleware from '../app/middlewares/auth';

import userRoutes from './user';
import sessionRoutes from './session';
import studentRoutes from './student';

const routes = new Router();

routes.use(userRoutes);
routes.use(sessionRoutes);
routes.use(authMiddleware, studentRoutes);

export default routes;
