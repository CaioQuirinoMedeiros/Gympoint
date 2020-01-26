import produce from 'immer'

import { Types as HelpOrdersTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  fetching: false,
  answering: false,
  fetchingError: null,
}

export default function helpOrders (state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case HelpOrdersTypes.GET_REQUEST: {
        draft.fetching = true
        break
      }
      case HelpOrdersTypes.GET_SUCCESS: {
        draft.data = action.payload.helpOrders
        draft.fetching = false
        break
      }
      case HelpOrdersTypes.GET_FAILURE: {
        draft.fetching = false
        draft.fetchingError = action.payload.error
        break
      }
      case HelpOrdersTypes.ANSWER_REQUEST: {
        draft.answerig = true
        break
      }
      case HelpOrdersTypes.ANSWER_SUCCESS: {
        draft.answerig = false
        break
      }
      case HelpOrdersTypes.ANSWER_FAILURE: {
        draft.answerig = false
        break
      }
      default:
        return state
    }
  })
}
