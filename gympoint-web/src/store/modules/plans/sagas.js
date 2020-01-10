import { all, takeLatest, put, call } from 'redux-saga/effects'

import api from '~/services/api'

import PlansActions, { Types as PlansTypes } from './actions'

export function* getPlans() {
  try {
    const { data } = yield call(api.getPlans)

    yield put(PlansActions.getSuccess(data))
  } catch (err) {
    yield put(PlansActions.getFailure())
  }
}

export function* createPlan({ payload }) {
  try {
    const { data } = yield call(api.createPlan, payload.data)

    yield put(PlansActions.createSuccess(data))
  } catch (err) {
    yield put(PlansActions.createFailure())
  }
}

export function* deletePlan({ payload }) {
  try {
    yield call(api.deletePlan, payload.id)

    yield put(PlansActions.deleteSuccess())
  } catch (err) {
    yield put(PlansActions.deleteFailure())
  }
}

export function* editPlan({ payload }) {
  try {
    const { data } = yield call(api.editPlan, payload.id, payload.data)

    yield put(PlansActions.editSuccess(data))
  } catch (err) {
    yield put(PlansActions.editFailure())
  }
}

export function* showPlan({ payload }) {
  try {
    const { data } = yield call(api.showPlan, payload.id)

    yield put(PlansActions.showSuccess(data))
  } catch (err) {
    yield put(PlansActions.showFailure())
  }
}

export default all([
  takeLatest(PlansTypes.GET_REQUEST, getPlans),
  takeLatest(PlansTypes.CREATE_REQUEST, createPlan),
  takeLatest(PlansTypes.DELETE_REQUEST, deletePlan),
  takeLatest(PlansTypes.EDIT_REQUEST, editPlan),
  takeLatest(PlansTypes.SHOW_REQUEST, showPlan)
])
