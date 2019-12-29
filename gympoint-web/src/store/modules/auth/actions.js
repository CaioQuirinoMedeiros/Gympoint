export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: '@auth/SIGN_IN_FAILURE',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: '@auth/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: '@auth/SIGN_UP_FAILURE',
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

  signUpRequest: (name, email, password) => {
    return {
      type: Types.SIGN_UP_REQUEST,
      payload: { name, email, password }
    }
  },

  signUpSuccess: () => {
    return {
      type: Types.SIGN_UP_SUCCESS
    }
  },

  signUpFailure: () => {
    return {
      type: Types.SIGN_UP_FAILURE
    }
  },

  signOut: () => {
    return {
      type: Types.SIGN_OUT
    }
  }
}
