import produce from 'immer'

import { Types as StudentsTypes } from './actions'

const INITIAL_STATE = {
  data: [],
  student: null,
  fetching: false,
  editing: false,
  deleting: false,
  fetchingOne: false,
  fetchingError: null,
  fetchingOneError: null
}

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case StudentsTypes.GET_REQUEST: {
        draft.fetching = true
        break
      }
      case StudentsTypes.GET_SUCCESS: {
        draft.data = action.payload.students
        draft.fetching = false
        break
      }
      case StudentsTypes.GET_FAILURE: {
        draft.fetching = false
        draft.fetchingError = action.payload.error
        break
      }
      case StudentsTypes.DELETE_REQUEST: {
        draft.deleting = true
        draft.data = state.data.filter(
          student => student.id !== action.payload.id
        )
        break
      }
      case StudentsTypes.DELETE_SUCCESS: {
        draft.deleting = false
        break
      }
      case StudentsTypes.DELETE_FAILURE: {
        draft.deleting = false
        break
      }
      case StudentsTypes.EDIT_REQUEST: {
        draft.editing = true
        break
      }
      case StudentsTypes.EDIT_SUCCESS: {
        draft.data = state.data.map(student =>
          student.id === action.payload.student.id
            ? action.payload.student
            : student
        )
        draft.editing = false
        break
      }
      case StudentsTypes.EDIT_FAILURE: {
        draft.editing = false
        break
      }
      case StudentsTypes.SHOW_REQUEST: {
        draft.fetchingOne = true
        break
      }
      case StudentsTypes.SHOW_SUCCESS: {
        draft.student = action.payload.student
        draft.fetchingOne = false
        break
      }
      case StudentsTypes.SHOW_FAILURE: {
        draft.fetchingOne = false
        draft.fetchingOneError = action.payload.error
        break
      }
      default:
        return state
    }
  })
}
