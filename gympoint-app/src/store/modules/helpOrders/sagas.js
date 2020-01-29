import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '../../../services/api'

import HelpOrdersActions, { Types as HelpOrdersTypes } from './actions'

export function * getHelpOrders () {
  try {
    const { data } = yield call(api.getPendingHelpOrders)

    yield put(HelpOrdersActions.getSuccess(data))
  } catch (err) {
    yield put(HelpOrdersActions.getFailure('Erro ao buscar pedidos de auxílio'))
  }
}

export function * createHelpOrder ({ payload }) {
  try {
    const { data } = yield call(api.createHelpOrder, payload.id, payload.data)

    yield put(HelpOrdersActions.createSuccess(data))
  } catch (err) {
    yield put(HelpOrdersActions.createFailure('Erro ao criar pedido de auxílio'))
  }
}

export default all([
  takeLatest(HelpOrdersTypes.GET_REQUEST, getHelpOrders),
  takeLatest(HelpOrdersTypes.CREATE_REQUEST, createHelpOrder)
])
