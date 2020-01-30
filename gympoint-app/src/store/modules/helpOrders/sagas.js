import { all, takeLatest, put, call, select } from 'redux-saga/effects'

import api from '../../../services/api'

import HelpOrdersActions, { Types as HelpOrdersTypes } from './actions'

export function * getHelpOrders () {
  console.log('PARTIU BUSCAR ORDERS')
  const student = yield select(({ auth }) => auth.student)

  try {
    const { data } = yield call(api.getHelpOrders, student?.id)
    console.log('data: ', data)

    yield put(HelpOrdersActions.getSuccess(data))
  } catch ({ response }) {
    console.log('response: ', response)
    const error = response.data?.error || 'Erro ao buscar pedidos de auxílio'
    yield put(HelpOrdersActions.getFailure(error))
  }
}

export function * createHelpOrder ({ payload }) {
  const student = yield select(({ auth }) => auth.student)

  try {
    const { data } = yield call(api.createHelpOrder, student?.id, payload.data)

    yield put(HelpOrdersActions.createSuccess(data))
  } catch ({ response }) {
    const error = response.data?.error || 'Erro ao buscar pedidos de auxílio'
    yield put(HelpOrdersActions.createFailure(error))
  }
}

export default all([
  takeLatest(HelpOrdersTypes.GET_REQUEST, getHelpOrders),
  takeLatest(HelpOrdersTypes.CREATE_REQUEST, createHelpOrder)
])
