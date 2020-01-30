import { all, takeLatest, put, call, select, delay } from 'redux-saga/effects'

import api from '../../../services/api'

import CheckinsActions, { Types as CheckinsTypes } from './actions'

export function * getCheckins () {
  const student = yield select(({ auth }) => auth.student)

  try {
    const { data } = yield call(api.getCheckins, student?.id)

    yield put(CheckinsActions.getSuccess(data))
  } catch (err) {
    yield put(CheckinsActions.getFailure('Falha ao buscar checkins'))
  }
}

export function * createCheckin () {
  const student = yield select(({ auth }) => auth.student)

  yield delay(2000)

  try {
    const { data } = yield call(api.createCheckin, student?.id)

    yield put(CheckinsActions.createSuccess(data))
  } catch ({ response }) {
    const error = response.data?.error || 'Fala ao realizar check-in'
    yield put(CheckinsActions.createFailure(error))
  }
}

export default all([
  takeLatest(CheckinsTypes.GET_REQUEST, getCheckins),
  takeLatest(CheckinsTypes.CREATE_REQUEST, createCheckin)
])
