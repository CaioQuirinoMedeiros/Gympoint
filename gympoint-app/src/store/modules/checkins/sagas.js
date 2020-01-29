import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '../../../services/api'

import CheckinsActions, { Types as CheckinsTypes } from './actions'

export function * getCheckins () {
  try {
    const { data } = yield call(api.getCheckins)

    yield put(CheckinsActions.getSuccess(data))
  } catch (err) {
    yield put(CheckinsActions.getFailure('Falha ao buscar checkins'))
  }
}

export function * createCheckin ({ payload }) {
  try {
    const { data } = yield call(api.createCheckin, payload.data)

    yield put(CheckinsActions.createSuccess(data))
  } catch (err) {
    yield put(CheckinsActions.createFailure())
  }
}

export default all([
  takeLatest(CheckinsTypes.GET_REQUEST, getCheckins),
  takeLatest(CheckinsTypes.CREATE_REQUEST, createCheckin)
])
