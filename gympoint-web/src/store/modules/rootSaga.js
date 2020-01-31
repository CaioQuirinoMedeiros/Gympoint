import { all } from 'redux-saga/effects'

import authSagas from './auth/sagas'
import studentsSagas from './students/sagas'
import plansSagas from './plans/sagas'
import enrollmentsSagas from './enrollments/sagas'
import helpOrdersSagas from './helpOrders/sagas'
import toastSagas from './toast/sagas'

export default function * rootSaga () {
  return yield all([
    authSagas,
    studentsSagas,
    plansSagas,
    enrollmentsSagas,
    helpOrdersSagas,
    toastSagas
  ])
}
