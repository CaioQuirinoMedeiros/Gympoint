import produce from 'immer'

import { Types as StudentTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  fetching: false,
  deleting: false
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
      case StudentTypes.DELETE_REQUEST: {
        draft.deleting = true
        draft.data = state.data.filter(
          student => student.id !== action.payload.id
        )
        break
      }
      case StudentTypes.DELETE_SUCCESS: {
        draft.data = action.payload.students
        draft.deleting = false
        break
      }
      case StudentTypes.DELETE_FAILURE: {
        draft.deleting = false
        break
      }
      default:
        return state
    }
  })
}
