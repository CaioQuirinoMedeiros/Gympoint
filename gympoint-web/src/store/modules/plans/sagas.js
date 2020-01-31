import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'
import messages from '~/utils/constants/messages'

import PlansActions, { Types as PlansTypes } from './actions'

export function * getPlans () {
  try {
    const { data } = yield call(api.getPlans)

    yield put(PlansActions.getSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.plans.getFailure()
    yield put(PlansActions.getFailure(error))
  }
}

export function * createPlan ({ payload }) {
  try {
    const { data } = yield call(api.createPlan, payload.data)

    yield put(PlansActions.createSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.plans.createFailure()
    yield put(PlansActions.createFailure(error))
  }
}

export function * deletePlan ({ payload }) {
  const { id } = payload

  try {
    yield call(api.deletePlan, id)

    yield put(PlansActions.deleteSuccess(id))
  } catch ({ response }) {
    const error = response?.data?.error || messages.plans.deleteFailure(id)
    yield put(PlansActions.deleteFailure(error))
  }
}

export function * editPlan ({ payload }) {
  const { id, data: planData } = payload

  try {
    const { data } = yield call(api.editPlan, id, planData)

    yield put(PlansActions.editSuccess(data))
  } catch ({ response }) {
    const error = response?.data?.error || messages.plans.editFailure(id)
    yield put(PlansActions.editFailure(error))
  }
}

export default all([
  takeLatest(PlansTypes.GET_REQUEST, getPlans),
  takeLatest(PlansTypes.CREATE_REQUEST, createPlan),
  takeLatest(PlansTypes.DELETE_REQUEST, deletePlan),
  takeLatest(PlansTypes.EDIT_REQUEST, editPlan)
])
