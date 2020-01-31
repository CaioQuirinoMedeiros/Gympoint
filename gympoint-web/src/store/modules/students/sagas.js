import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'
import messages from '~/utils/constants/messages'

import StudentActions, { Types as StudentsTypes } from './actions'

export function * getStudents () {
  try {
    const { data } = yield call(api.getStudents)

    yield put(StudentActions.getSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.students.getFailure()
    yield put(StudentActions.getFailure(error))
  }
}

export function * createStudent ({ payload }) {
  try {
    const { data } = yield call(api.createStudent, payload.data)

    yield put(StudentActions.createSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.students.createFailure()
    yield put(StudentActions.createFailure(error))
  }
}

export function * deleteStudent ({ payload }) {
  const { id } = payload

  try {
    yield call(api.deleteStudent, id)

    yield put(StudentActions.deleteSuccess(id))
  } catch ({ response }) {
    const error = response?.data?.error || messages.students.deleteFailure(id)
    yield put(StudentActions.deleteFailure(error))
  }
}

export function * editStudent ({ payload }) {
  const { id, data: studentData } = payload

  try {
    const { data } = yield call(api.editStudent, id, studentData)

    yield put(StudentActions.editSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.students.editFailure(id)
    yield put(StudentActions.editFailure(error))
  }
}

export function * showStudent ({ payload }) {
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
