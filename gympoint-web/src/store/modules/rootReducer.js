import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import studentsReducer from './students/reducer'
import plansReducer from './plans/reducer'
import enrollmentsReducer from './enrollments/reducer'
import helpOrdersReducer from './helpOrders/reducer'

export default combineReducers({
  auth: authReducer,
  students: studentsReducer,
  plans: plansReducer,
  enrollments: enrollmentsReducer,
  helpOrders: helpOrdersReducer
})
