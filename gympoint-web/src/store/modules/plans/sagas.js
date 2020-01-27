import { all, takeLatest, put, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'
import messages from '~/utils/constants/messages'

import PlansActions, { Types as PlansTypes } from './actions'

export function * getPlans () {
  try {
    const { data } = yield call(api.getPlans)

    yield put(PlansActions.getSuccess(data))
  } catch (err) {
    yield put(PlansActions.getFailure())
  }
}

export function * createPlan ({ payload }) {
  try {
    const { data } = yield call(api.createPlan, payload.data)

    yield put(PlansActions.createSuccess(data))
  } catch ({ response }) {
    const error = response.data?.error || messages.plans.createFailure
    yield put(PlansActions.createFailure(error))
  }
}

export function * deletePlan ({ payload }) {
  try {
    yield call(api.deletePlan, payload.id)

    yield put(PlansActions.deleteSuccess())
  } catch (err) {
    yield put(PlansActions.deleteFailure())
  }
}

export function * editPlan ({ payload }) {
  try {
    const { data } = yield call(api.editPlan, payload.id, payload.data)

    yield put(PlansActions.editSuccess(data))
  } catch (err) {
    yield put(PlansActions.editFailure())
  }
}

export function createSuccessMessage () {
  toast.success('Plano criado com sucesso!')
}
export function createFailureMessage ({ payload }) {
  toast.error(payload.error)
}

export default all([
  takeLatest(PlansTypes.GET_REQUEST, getPlans),
  takeLatest(PlansTypes.CREATE_REQUEST, createPlan),
  takeLatest(PlansTypes.DELETE_REQUEST, deletePlan),
  takeLatest(PlansTypes.EDIT_REQUEST, editPlan),
  takeLatest(PlansTypes.CREATE_SUCCESS, createSuccessMessage),
  takeLatest(PlansTypes.CREATE_FAILURE, createFailureMessage)
])
