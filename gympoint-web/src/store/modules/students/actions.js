export const Types = {
  GET_REQUEST: '@students/GET_REQUEST',
  GET_SUCCESS: '@students/GET_SUCCESS',
  GET_FAILURE: '@students/GET_FAILURE',
  DELETE_REQUEST: '@students/DELETE_REQUEST',
  DELETE_SUCCESS: '@students/DELETE_SUCCESS',
  DELETE_FAILURE: '@students/DELETE_FAILURE',
  SHOW_REQUEST: '@students/SHOW_REQUEST',
  SHOW_SUCCESS: '@students/SHOW_SUCCESS',
  SHOW_FAILURE: '@students/SHOW_FAILURE'
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
  }),

  showRequest: id => ({
    type: Types.SHOW_REQUEST,
    payload: { id }
  }),

  showSuccess: student => ({
    type: Types.SHOW_SUCCESS,
    payload: {student}
  }),

  showFailure: error => ({
    type: Types.SHOW_FAILURE,
    payload: { error }
  }),
}
