export const Types = {
  GET_REQUEST: '@student/GET_REQUEST',
  GET_SUCCESS: '@student/GET_SUCCESS',
  GET_FAILURE: '@student/GET_FAILURE'
}

export default {
  getRequest: () => {
    return {
      type: Types.GET_REQUEST
    }
  },

  getSuccess: students => {
    return {
      type: Types.GET_SUCCESS,
      payload: { students }
    }
  },

  getFailure: error => {
    return {
      type: Types.GET_FAILURE,
      payload: { error }
    }
  }
}
