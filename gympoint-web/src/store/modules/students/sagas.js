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

export function* createStudent({ payload }) {
  try {
    const { data } = yield call(api.createStudent, payload.data)

    yield put(StudentActions.createSuccess(data))
  } catch (err) {
    yield put(StudentActions.createFailure())
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

export function* editStudent({ payload }) {
  try {
    const { data } = yield call(api.editStudent, payload.id, payload.data)

    yield put(StudentActions.editSuccess(data))
  } catch (err) {
    yield put(StudentActions.editFailure())
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
  takeLatest(StudentsTypes.CREATE_REQUEST, createStudent),
  takeLatest(StudentsTypes.DELETE_REQUEST, deleteStudent),
  takeLatest(StudentsTypes.EDIT_REQUEST, editStudent),
  takeLatest(StudentsTypes.SHOW_REQUEST, showStudent)
])
