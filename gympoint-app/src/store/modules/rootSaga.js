import { all } from 'redux-saga/effects'

import authSagas from './auth/sagas'
import checkinsSagas from './checkins/sagas'
import helpOrdersSagas from './helpOrders/sagas'

export default function * rootSaga () {
  return yield all([authSagas, checkinsSagas, helpOrdersSagas])
}
