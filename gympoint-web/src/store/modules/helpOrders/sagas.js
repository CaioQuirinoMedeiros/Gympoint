import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'
import messages from '~/utils/constants/messages'

import HelpOrdersActions, { Types as HelpOrdersTypes } from './actions'

export function * getHelpOrders () {
  try {
    const { data } = yield call(api.getPendingHelpOrders)

    yield put(HelpOrdersActions.getSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.helpOrders.getFailure()
    yield put(HelpOrdersActions.getFailure(error))
  }
}

export function * answerHelpOrder ({ payload }) {
  const { id, data: answerData } = payload

  try {
    const { data } = yield call(api.answerHelpOrder, id, answerData)

    yield put(HelpOrdersActions.answerSuccess(data.id))
  } catch ({ response }) {
    const error = response?.data?.error || messages.helpOrders.answerFailure(id)
    yield put(HelpOrdersActions.answerFailure(error))
  }
}

export default all([
  takeLatest(HelpOrdersTypes.GET_REQUEST, getHelpOrders),
  takeLatest(HelpOrdersTypes.ANSWER_REQUEST, answerHelpOrder)
])
