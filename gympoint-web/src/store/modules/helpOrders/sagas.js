import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import HelpOrdersActions, { Types as HelpOrdersTypes } from './actions'

export function* getHelpOrders() {
  try {
    const { data } = yield call(api.getPendingHelpOrders)

    yield put(HelpOrdersActions.getSuccess(data))
  } catch (err) {
    yield put(HelpOrdersActions.getFailure())
  }
}

export function* answerHelpOrder({ payload }) {
  try {
    yield call(api.answerHelpOrder, payload.id, payload.data)

    yield put(HelpOrdersActions.answerSuccess())
  } catch (err) {
    yield put(HelpOrdersActions.answerFailure())
  }
}

export default all([
  takeLatest(HelpOrdersTypes.GET_REQUEST, getHelpOrders),
  takeLatest(HelpOrdersTypes.ANSWER_REQUEST, answerHelpOrder),
])
