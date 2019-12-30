import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import StudentActions, { Types as StudentTypes } from './actions'

export function* getStudents() {
  try {
    const { data } = yield call(api.getStudents)

    yield put(StudentActions.getSuccess(data))
  } catch (err) {
    yield put(StudentActions.getFailure())
  }
}

export default all([takeLatest(StudentTypes.GET_REQUEST, getStudents)])
