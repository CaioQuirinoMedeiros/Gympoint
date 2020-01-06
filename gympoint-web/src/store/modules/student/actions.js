export const Types = {
  GET_REQUEST: '@student/GET_REQUEST',
  GET_SUCCESS: '@student/GET_SUCCESS',
  GET_FAILURE: '@student/GET_FAILURE',
  DELETE_REQUEST: '@student/DELETE_REQUEST',
  DELETE_SUCCESS: '@student/DELETE_SUCCESS',
  DELETE_FAILURE: '@student/DELETE_FAILURE'
}

export default {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getSuccess: students => ({
    type: Types.GET_SUCCESS,
    payload: { students }
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  deleteRequest: id => ({
    type: Types.DELETE_REQUEST,
    payload: { id }
  }),

  deleteSuccess: () => ({
    type: Types.DELETE_SUCCESS
  }),

  deleteFailure: error => ({
    type: Types.DELETE_FAILURE,
    payload: { error }
  })
}
