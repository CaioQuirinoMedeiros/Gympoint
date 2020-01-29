import { combineReducers } from 'redux'

import authReducer from './auth/reducer'
import checkinsReducer from './checkins/reducer'
import helpOrdersReducer from './helpOrders/reducer'

export default combineReducers({
  auth: authReducer,
  checkins: checkinsReducer,
  helpOrders: helpOrdersReducer
})
