import { all, takeLatest, put, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'
import messages from '~/utils/constants/messages'

import EnrollmentsActions, { Types as EnrollmentsTypes } from './actions'

export function * getEnrollments () {
  try {
    const { data } = yield call(api.getEnrollments)

    yield put(EnrollmentsActions.getSuccess(data))
  } catch (err) {
    yield put(EnrollmentsActions.getFailure())
  }
}

export function * createEnrollment ({ payload }) {
  try {
    const { data } = yield call(api.createEnrollment, payload.data)

    yield put(EnrollmentsActions.createSuccess(data))
  } catch ({ response }) {
    const error = response.data?.error || messages.enrollments.createFailure
    yield put(EnrollmentsActions.createFailure(error))
  }
}

export function * deleteEnrollment ({ payload }) {
  try {
    yield call(api.deleteEnrollment, payload.id)

    yield put(EnrollmentsActions.deleteSuccess())
  } catch ({ response }) {
    const error = response.data?.error || messages.enrollments.deleteFailure
    yield put(EnrollmentsActions.deleteFailure(error))
  }
}

export function * editEnrollment ({ payload }) {
  try {
    const { data } = yield call(api.editEnrollment, payload.id, payload.data)

    yield put(EnrollmentsActions.editSuccess(data))
  } catch ({ response }) {
    const error = response.data?.error || messages.enrollments.editFailure
    yield put(EnrollmentsActions.editFailure(error))
  }
}

export function createSuccessMessage () {
  toast.success(messages.enrollments.createSuccess)
}

export function createFailureMessage ({ payload }) {
  toast.error(payload.error)
}

export function editSuccessMessage () {
  toast.success(messages.enrollments.editSuccess)
}

export function editFailureMessage ({ payload }) {
  toast.error(payload.error)
}

export function deleteSuccessMessage () {
  toast.success(messages.enrollments.deleteSuccess)
}

export function deleteFailureMessage ({ payload }) {
  toast.error(payload.error)
}

export default all([
  takeLatest(EnrollmentsTypes.GET_REQUEST, getEnrollments),
  takeLatest(EnrollmentsTypes.CREATE_REQUEST, createEnrollment),
  takeLatest(EnrollmentsTypes.DELETE_REQUEST, deleteEnrollment),
  takeLatest(EnrollmentsTypes.EDIT_REQUEST, editEnrollment),
  takeLatest(EnrollmentsTypes.CREATE_SUCCESS, createSuccessMessage),
  takeLatest(EnrollmentsTypes.CREATE_FAILURE, createFailureMessage),
  takeLatest(EnrollmentsTypes.EDIT_SUCCESS, editSuccessMessage),
  takeLatest(EnrollmentsTypes.EDIT_FAILURE, editFailureMessage),
  takeLatest(EnrollmentsTypes.DELETE_SUCCESS, deleteSuccessMessage),
  takeLatest(EnrollmentsTypes.DELETE_FAILURE, deleteFailureMessage)
])
