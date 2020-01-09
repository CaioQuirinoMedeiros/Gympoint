import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import StudentActions, { Types as StudentsTypes } from './actions'

export function* getStudents() {
  try {
    const { data } = yield call(api.getStudents)

    yield put(StudentActions.getSuccess(data))
  } catch (err) {
    yield put(StudentActions.getFailure())
  }
}

export function* deleteStudent({ payload }) {
  try {
    yield call(api.deleteStudent, payload.id)

    yield put(StudentActions.deleteSuccess())
  } catch (err) {
    yield put(StudentActions.deleteFailure())
  }
}

export function* showStudent({ payload }) {
  try {
    const { data } = yield call(api.showStudent, payload.id)

    yield put(StudentActions.showSuccess(data))
  } catch (err) {
    yield put(StudentActions.showFailure())
  }
}

export default all([
  takeLatest(StudentsTypes.GET_REQUEST, getStudents),
  takeLatest(StudentsTypes.DELETE_REQUEST, deleteStudent),
  takeLatest(StudentsTypes.SHOW_REQUEST, showStudent)
])