import { Router } from 'express';

import userRoutes from './user';
import studentRoutes from './student';

const routes = new Router();

routes.use(userRoutes);
routes.use(studentRoutes);

export default routes;
