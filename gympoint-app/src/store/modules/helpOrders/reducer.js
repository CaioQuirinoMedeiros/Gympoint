import produce from 'immer'

import { Types as HelpOrdersTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  fetching: false,
  creating: false,
  fetchingError: null
}

export default function helpOrders (state = INITIAL_STATE, action) {
  const { type, payload } = action

  return produce(state, draft => {
    switch (type) {
      case HelpOrdersTypes.GET_REQUEST: {
        draft.fetching = true
        break
      }
      case HelpOrdersTypes.GET_SUCCESS: {
        draft.data = payload.helpOrders
        draft.fetching = false
        break
      }
      case HelpOrdersTypes.GET_FAILURE: {
        draft.fetching = false
        draft.fetchingError = payload.error
        break
      }
      case HelpOrdersTypes.CREATE_REQUEST: {
        draft.creating = true
        break
      }
      case HelpOrdersTypes.CREATE_SUCCESS: {
        draft.creating = false
        draft.data = [payload.helpOrder, ...state.data]
        break
      }
      case HelpOrdersTypes.CREATE_FAILURE: {
        draft.creating = false
        break
      }
      default:
        return state
    }
  })
}
