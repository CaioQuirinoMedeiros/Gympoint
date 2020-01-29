import produce from 'immer'

import { Types as CheckinsTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  creating: false,
  fetching: false,
  fetchingError: null,
}

export default function checkins(state = INITIAL_STATE, action) {
  const {type, payload} = action

  return produce(state, draft => {
    switch (type) {
      case CheckinsTypes.GET_REQUEST: {
        draft.fetching = true
        break
      }
      case CheckinsTypes.GET_SUCCESS: {
        draft.data = payload.checkins
        draft.fetching = false
        break
      }
      case CheckinsTypes.GET_FAILURE: {
        draft.fetching = false
        draft.fetchingError = payload.error
        break
      }
      case CheckinsTypes.CREATE_REQUEST: {
        draft.creating = true
        break
      }
      case CheckinsTypes.CREATE_SUCCESS: {
        draft.creating = false
        draft.data = [...state.data, payload.checkin]
        break
      }
      case CheckinsTypes.CREATE_FAILURE: {
        draft.creating = false
        break
      }
      default:
        return state
    }
  })
}
