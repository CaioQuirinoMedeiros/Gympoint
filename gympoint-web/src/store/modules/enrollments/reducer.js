import produce from 'immer'

import { Types as EnrollmentsTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  creating: false,
  fetching: false,
  editing: false,
  deleting: false,
  fetchingOne: false,
  fetchingError: null,
  fetchingOneError: null
}

export default function enrollments(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case EnrollmentsTypes.GET_REQUEST: {
        draft.fetching = true
        break
      }
      case EnrollmentsTypes.GET_SUCCESS: {
        draft.data = action.payload.enrollments
        draft.fetching = false
        break
      }
      case EnrollmentsTypes.GET_FAILURE: {
        draft.fetching = false
        draft.fetchingError = action.payload.error
        break
      }
      case EnrollmentsTypes.CREATE_REQUEST: {
        draft.creating = true
        break
      }
      case EnrollmentsTypes.CREATE_SUCCESS: {
        draft.creating = false
        draft.data = [...state.data, action.payload.enrollment]
        break
      }
      case EnrollmentsTypes.CREATE_FAILURE: {
        draft.creating = false
        break
      }
      case EnrollmentsTypes.DELETE_REQUEST: {
        draft.deleting = true
        draft.data = state.data.filter(
          enrollment => enrollment.id !== action.payload.id
        )
        break
      }
      case EnrollmentsTypes.DELETE_SUCCESS: {
        draft.deleting = false
        break
      }
      case EnrollmentsTypes.DELETE_FAILURE: {
        draft.deleting = false
        break
      }
      case EnrollmentsTypes.EDIT_REQUEST: {
        draft.editing = true
        break
      }
      case EnrollmentsTypes.EDIT_SUCCESS: {
        draft.data = state.data.map(enrollment =>
          enrollment.id === action.payload.enrollment.id
            ? action.payload.enrollment
            : enrollment
        )
        draft.editing = false
        break
      }
      case EnrollmentsTypes.EDIT_FAILURE: {
        draft.editing = false
        break
      }
      case EnrollmentsTypes.SHOW_REQUEST: {
        draft.fetchingOne = true
        break
      }
      case EnrollmentsTypes.SHOW_SUCCESS: {
        draft.enrollment = action.payload.enrollment
        draft.fetchingOne = false
        break
      }
      case EnrollmentsTypes.SHOW_FAILURE: {
        draft.fetchingOne = false
        draft.fetchingOneError = action.payload.error
        break
      }
      default:
        return state
    }
  })
}
