export const Types = {
  GET_REQUEST: '@students/GET_REQUEST',
  GET_SUCCESS: '@students/GET_SUCCESS',
  GET_FAILURE: '@students/GET_FAILURE',
  CREATE_REQUEST: '@students/CREATE_REQUEST',
  CREATE_SUCCESS: '@students/CREATE_SUCCESS',
  CREATE_FAILURE: '@students/CREATE_FAILURE',
  DELETE_REQUEST: '@students/DELETE_REQUEST',
  DELETE_SUCCESS: '@students/DELETE_SUCCESS',
  DELETE_FAILURE: '@students/DELETE_FAILURE',
  EDIT_REQUEST: '@students/EDIT_REQUEST',
  EDIT_SUCCESS: '@students/EDIT_SUCCESS',
  EDIT_FAILURE: '@students/EDIT_FAILURE',
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

  createRequest: data => ({
    type: Types.CREATE_REQUEST,
    payload: { data }
  }),

  createSuccess: student => ({
    type: Types.CREATE_SUCCESS,
    payload: { student }
  }),

  createFailure: error => ({
    type: Types.CREATE_FAILURE,
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

  editRequest: (id, data) => ({
    type: Types.EDIT_REQUEST,
    payload: { id, data }
  }),

  editSuccess: student => ({
    type: Types.EDIT_SUCCESS,
    payload: { student }
  }),

  editFailure: error => ({
    type: Types.EDIT_FAILURE,
    payload: { error }
  }),

  showRequest: id => ({
    type: Types.SHOW_REQUEST,
    payload: { id }
  }),

  showSuccess: student => ({
    type: Types.SHOW_SUCCESS,
    payload: { student }
  }),

  showFailure: error => ({
    type: Types.SHOW_FAILURE,
    payload: { error }
  })
}
