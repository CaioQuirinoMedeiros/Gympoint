import { all, takeLatest, put, call, select } from 'redux-saga/effects'

import api from '../../../services/api'

import HelpOrdersActions, { Types as HelpOrdersTypes } from './actions'

export function * getHelpOrders () {
  const student = yield select(({ auth }) => auth.student)

  try {
    const { data } = yield call(api.getHelpOrders, student?.id)

    yield put(HelpOrdersActions.getSuccess(data))
  } catch ({ response }) {
    const error = response.data?.error || 'Erro ao buscar pedidos de auxílio'
    yield put(HelpOrdersActions.getFailure(error))
  }
}

export default all([takeLatest(HelpOrdersTypes.GET_REQUEST, getHelpOrders)])
