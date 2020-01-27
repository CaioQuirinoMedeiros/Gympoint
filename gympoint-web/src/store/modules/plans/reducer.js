import produce from 'immer'

import { Types as PlansTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  creating: false,
  fetching: false,
  editing: false,
  deleting: false,
  fetchingError: null,
}

export default function plans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case PlansTypes.GET_REQUEST: {
        draft.fetching = true
        break
      }
      case PlansTypes.GET_SUCCESS: {
        draft.data = action.payload.plans
        draft.fetching = false
        break
      }
      case PlansTypes.GET_FAILURE: {
        draft.fetching = false
        draft.fetchingError = action.payload.error
        break
      }
      case PlansTypes.CREATE_REQUEST: {
        draft.creating = true
        break
      }
      case PlansTypes.CREATE_SUCCESS: {
        draft.creating = false
        draft.data = [...state.data, action.payload.plan]
        break
      }
      case PlansTypes.CREATE_FAILURE: {
        draft.creating = false
        break
      }
      case PlansTypes.DELETE_REQUEST: {
        draft.deleting = true
        draft.data = state.data.filter(
          plan => plan.id !== action.payload.id
        )
        break
      }
      case PlansTypes.DELETE_SUCCESS: {
        draft.deleting = false
        break
      }
      case PlansTypes.DELETE_FAILURE: {
        draft.deleting = false
        break
      }
      case PlansTypes.EDIT_REQUEST: {
        draft.editing = true
        break
      }
      case PlansTypes.EDIT_SUCCESS: {
        draft.data = state.data.map(plan =>
          plan.id === action.payload.plan.id
            ? action.payload.plan
            : plan
        )
        draft.editing = false
        break
      }
      case PlansTypes.EDIT_FAILURE: {
        draft.editing = false
        break
      }
      default:
        return state
    }
  })
}
