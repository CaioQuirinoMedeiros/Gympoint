export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@auth/SIGN_IN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT'
}

export default {
  signInRequest: (email, password) => {
    return {
      type: Types.SIGN_IN_REQUEST,
      payload: { email, password }
    }
  },

  signInSuccess: (token, user) => {
    return {
      type: Types.SIGN_IN_SUCCESS,
      payload: { token, user }
    }
  },

  signInFailure: () => {
    return {
      type: Types.SIGN_IN_FAILURE
    }
  },

  signOut: () => {
    return {
      type: Types.SIGN_OUT
    }
  }
}
