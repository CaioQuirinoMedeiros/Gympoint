import { all, takeLatest } from 'redux-saga/effects'
import Toast from 'react-native-root-toast'

import toastConfig from '../../../config/toast-config'
import theme from '../../../utils/theme'

import { Types as CheckinsTypes } from '../checkins/actions'
import { Types as HelpOrdersTypes } from '../helpOrders/actions'

export function * errorToast ({ payload }) {
  Toast.show(payload.error, toastConfig(false))
}

export function * createHelpOrderSuccessToast () {
  Toast.show('Pedido de auxílio enviado com sucesso!', toastConfig())
}

export default all([
  takeLatest(CheckinsTypes.CREATE_FAILURE, errorToast),
  takeLatest(HelpOrdersTypes.GET_FAILURE, errorToast),
  takeLatest(HelpOrdersTypes.CREATE_FAILURE, errorToast),
  takeLatest(HelpOrdersTypes.CREATE_SUCCESS, createHelpOrderSuccessToast)
])
