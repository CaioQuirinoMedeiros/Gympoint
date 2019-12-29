import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import AuthActions, { Types as AuthTypes } from './actions'

export function* signIn({ payload }) {
  const { email, password } = payload

  try {
    const { data } = yield call(api.login, { email, password })

    const { token, user } = data

    yield put(AuthActions.signInSuccess(token, user))
  } catch (err) {
    yield put(AuthActions.signInFailure())
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload

    yield call(api.createUser, {
      name,
      email,
      password
    })

    yield put(AuthActions.signUpSuccess())
  } catch (err) {
    yield put(AuthActions.signUpFailure())
  }
}

export function signOut() {}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
  takeLatest(AuthTypes.SIGN_OUT, signOut)
])
