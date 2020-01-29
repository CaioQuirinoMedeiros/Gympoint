import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '../../../services/api'

import AuthActions, { Types as AuthTypes } from './actions'

export function * signIn ({ payload }) {
  try {
    const { data } = yield call(api.login, payload.id)

    yield put(AuthActions.signInSuccess(data))
  } catch (err) {
    yield put(AuthActions.signInFailure())
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)])
