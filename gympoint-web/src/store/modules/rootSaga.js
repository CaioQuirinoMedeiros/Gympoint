import { all } from 'redux-saga/effects'

import authSagas from './auth/sagas'
import studentsSagas from './students/sagas'
import plansSagas from './plans/sagas'

export default function* rootSaga() {
  return yield all([authSagas, studentsSagas, plansSagas])
}
