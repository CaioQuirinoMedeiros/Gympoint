import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import AuthActions, { Types as AuthTypes } from './actions'
import messages from '~/utils/constants/messages'

export function * setAuthToken(token) {
  yield call(api.setAuthToken, token)
}

export function* signIn({ payload }) {
  const { email, password } = payload
  
  try {
    const { data } = yield call(api.login, { email, password })
    
    const { token, user } = data
    
    yield call(setAuthToken, token)
    yield put(AuthActions.signInSuccess(token, user))
  } catch ({response}) {
    const error = response?.data?.error || messages.auth.signInFailure()
    yield put(AuthActions.signInFailure(error))
  }
}

export function* startup({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    yield call(setAuthToken, token)
  }
}

export default all([
  takeLatest('persist/REHYDRATE', startup),
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
])
