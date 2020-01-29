import { Router } from 'express'

import authMiddleware from '../app/middlewares/auth'

import StudentController from '../app/controllers/StudentController'

import validateStudentStore from '../app/validators/StudentStore'

const routes = new Router()

routes.post(
  '/students',
  authMiddleware,
  validateStudentStore,
  StudentController.store
)
routes.get('/students', authMiddleware, StudentController.index)
routes.get('/students/:student_id', StudentController.show)
routes.put('/students/:student_id', authMiddleware, StudentController.update)
routes.delete(
  '/students/:student_id',
  authMiddleware,
  StudentController.destroy
)

export default routes
