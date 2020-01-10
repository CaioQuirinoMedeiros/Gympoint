import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import EnrollmentsActions, { Types as EnrollmentsTypes } from './actions'

export function* getEnrollments() {
  try {
    const { data } = yield call(api.getEnrollments)

    yield put(EnrollmentsActions.getSuccess(data))
  } catch (err) {
    yield put(EnrollmentsActions.getFailure())
  }
}

export function* createEnrollment({ payload }) {
  try {
    const { data } = yield call(api.createEnrollment, payload.data)

    yield put(EnrollmentsActions.createSuccess(data))
  } catch (err) {
    yield put(EnrollmentsActions.createFailure())
  }
}

export function* deleteEnrollment({ payload }) {
  try {
    yield call(api.deleteEnrollment, payload.id)

    yield put(EnrollmentsActions.deleteSuccess())
  } catch (err) {
    yield put(EnrollmentsActions.deleteFailure())
  }
}

export function* editEnrollment({ payload }) {
  try {
    const { data } = yield call(api.editEnrollment, payload.id, payload.data)

    yield put(EnrollmentsActions.editSuccess(data))
  } catch (err) {
    yield put(EnrollmentsActions.editFailure())
  }
}

export function* showEnrollment({ payload }) {
  try {
    const { data } = yield call(api.showEnrollment, payload.id)

    yield put(EnrollmentsActions.showSuccess(data))
  } catch (err) {
    yield put(EnrollmentsActions.showFailure())
  }
}

export default all([
  takeLatest(EnrollmentsTypes.GET_REQUEST, getEnrollments),
  takeLatest(EnrollmentsTypes.CREATE_REQUEST, createEnrollment),
  takeLatest(EnrollmentsTypes.DELETE_REQUEST, deleteEnrollment),
  takeLatest(EnrollmentsTypes.EDIT_REQUEST, editEnrollment),
  takeLatest(EnrollmentsTypes.SHOW_REQUEST, showEnrollment)
])
