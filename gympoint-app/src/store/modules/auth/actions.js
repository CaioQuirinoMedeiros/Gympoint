export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@auth/SIGN_IN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT'
}

export default {
  signInRequest: id => {
    return {
      type: Types.SIGN_IN_REQUEST,
      payload: { id }
    }
  },

  signInSuccess: student => {
    return {
      type: Types.SIGN_IN_SUCCESS,
      payload: { student }
    }
  },

  signInFailure: error => {
    return {
      type: Types.SIGN_IN_FAILURE,
      payload: { error }
    }
  },

  signOut: () => {
    return {
      type: Types.SIGN_OUT
    }
  }
}
