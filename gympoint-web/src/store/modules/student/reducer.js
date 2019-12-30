import produce from 'immer'

import { Types as StudentTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  fetching: false
}

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case StudentTypes.GET_REQUEST: {
        draft.fetching = true
        break
      }
      case StudentTypes.GET_SUCCESS: {
        draft.data = action.payload.students
        draft.fetching = false
        break
      }
      case StudentTypes.GET_FAILURE: {
        draft.fetching = false
        break
      }
      default:
        return state
    }
  })
}
