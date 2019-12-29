import { Router } from 'express';

import authMiddleware from '../app/middlewares/auth';

import userRoutes from './user';
import sessionRoutes from './session';
import studentRoutes from './student';
import planRoutes from './plan';
import enrollmentRoutes from './enrollment';
import checkinRoutes from './checkin';

const routes = new Router();

routes.use(userRoutes);
routes.use(sessionRoutes);
routes.use(checkinRoutes);
routes.use(authMiddleware, studentRoutes);
routes.use(authMiddleware, planRoutes);
routes.use(authMiddleware, enrollmentRoutes);

export default routes;
