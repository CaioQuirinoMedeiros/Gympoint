import produce from 'immer'

import { Types as AuthTypes } from './actions'

const INITIAL_STATE = {
  token: null,
  user: null,
  signed: false,
  loading: false
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.SIGN_IN_REQUEST: {
        draft.loading = true
        break
      }
      case AuthTypes.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token
        draft.user = action.payload.user
        draft.signed = true
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_IN_FAILURE: {
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_OUT: {
        draft.signed = false
        draft.user = null
        draft.token = null
        break
      }
      default:
        return state
    }
  })
}
