import { Router } from 'express';

import userRoutes from './user';

const routes = new Router();

routes.use(userRoutes);

export default routes;
