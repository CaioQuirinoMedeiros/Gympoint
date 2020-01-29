import produce from 'immer'

import { Types as AuthTypes } from './actions'

const INITIAL_STATE = {
  student: null,
  loading: false
}

export default function auth(state = INITIAL_STATE, action) {
  const {type, payload} = action

  return produce(state, draft => {
    switch (type) {
      case AuthTypes.SIGN_IN_REQUEST: {
        draft.loading = true
        break
      }
      case AuthTypes.SIGN_IN_SUCCESS: {
        draft.student = payload.student
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_IN_FAILURE: {
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_OUT: {
        draft.student = null
        break
      }
      default:
        return state
    }
  })
}
