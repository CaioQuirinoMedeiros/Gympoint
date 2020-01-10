export const Types = {
  GET_REQUEST: '@plans/GET_REQUEST',
  GET_SUCCESS: '@plans/GET_SUCCESS',
  GET_FAILURE: '@plans/GET_FAILURE',
  CREATE_REQUEST: '@plans/CREATE_REQUEST',
  CREATE_SUCCESS: '@plans/CREATE_SUCCESS',
  CREATE_FAILURE: '@plans/CREATE_FAILURE',
  DELETE_REQUEST: '@plans/DELETE_REQUEST',
  DELETE_SUCCESS: '@plans/DELETE_SUCCESS',
  DELETE_FAILURE: '@plans/DELETE_FAILURE',
  EDIT_REQUEST: '@plans/EDIT_REQUEST',
  EDIT_SUCCESS: '@plans/EDIT_SUCCESS',
  EDIT_FAILURE: '@plans/EDIT_FAILURE',
  SHOW_REQUEST: '@plans/SHOW_REQUEST',
  SHOW_SUCCESS: '@plans/SHOW_SUCCESS',
  SHOW_FAILURE: '@plans/SHOW_FAILURE'
}

export default {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getSuccess: plans => ({
    type: Types.GET_SUCCESS,
    payload: { plans }
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  createRequest: data => ({
    type: Types.CREATE_REQUEST,
    payload: { data }
  }),

  createSuccess: plan => ({
    type: Types.CREATE_SUCCESS,
    payload: { plan }
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

  editSuccess: plan => ({
    type: Types.EDIT_SUCCESS,
    payload: { plan }
  }),

  editFailure: error => ({
    type: Types.EDIT_FAILURE,
    payload: { error }
  }),

  showRequest: id => ({
    type: Types.SHOW_REQUEST,
    payload: { id }
  }),

  showSuccess: plan => ({
    type: Types.SHOW_SUCCESS,
    payload: { plan }
  }),

  showFailure: error => ({
    type: Types.SHOW_FAILURE,
    payload: { error }
  })
}
