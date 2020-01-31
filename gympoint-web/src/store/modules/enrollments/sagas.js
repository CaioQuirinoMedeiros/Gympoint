import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'
import messages from '~/utils/constants/messages'

import EnrollmentsActions, { Types as EnrollmentsTypes } from './actions'

export function * getEnrollments () {
  try {
    const { data } = yield call(api.getEnrollments)

    yield put(EnrollmentsActions.getSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.enrollments.getFailure()
    yield put(EnrollmentsActions.getFailure(error))
  }
}

export function * createEnrollment ({ payload }) {
  try {
    const { data } = yield call(api.createEnrollment, payload.data)

    yield put(EnrollmentsActions.createSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.enrollments.createFailure()
    yield put(EnrollmentsActions.createFailure(error))
  }
}

export function * deleteEnrollment ({ payload }) {
  const { id } = payload

  try {
    yield call(api.deleteEnrollment, id)

    yield put(EnrollmentsActions.deleteSuccess(id))
  } catch ({ response }) {
    const error =
      response?.data?.error || messages.enrollments.deleteFailure(id)
    yield put(EnrollmentsActions.deleteFailure(error))
  }
}

export function * editEnrollment ({ payload }) {
  const { id, data: enrollmentData } = payload
  try {
    const { data } = yield call(api.editEnrollment, id, enrollmentData)

    yield put(EnrollmentsActions.editSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.enrollments.editFailure(id)
    yield put(EnrollmentsActions.editFailure(error))
  }
}

export default all([
  takeLatest(EnrollmentsTypes.GET_REQUEST, getEnrollments),
  takeLatest(EnrollmentsTypes.CREATE_REQUEST, createEnrollment),
  takeLatest(EnrollmentsTypes.DELETE_REQUEST, deleteEnrollment),
  takeLatest(EnrollmentsTypes.EDIT_REQUEST, editEnrollment)
])
