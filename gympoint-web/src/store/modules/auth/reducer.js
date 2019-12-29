import produce from 'immer'

import { Types as AuthTypes } from './actions'

const INITIAL_STATE = {
  token: null,
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
        draft.signed = true
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_IN_FAILURE: {
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_UP_REQUEST: {
        draft.loading = true
        break
      }
      case AuthTypes.SIGN_UP_SUCCESS: {
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_UP_FAILURE: {
        draft.loading = false
        break
      }
      case AuthTypes.SIGN_OUT: {
        draft.signed = false
        draft.token = null
        break
      }
      default:
        return state
    }
  })
}
