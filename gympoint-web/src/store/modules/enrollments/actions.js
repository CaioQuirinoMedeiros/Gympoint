export const Types = {
  GET_REQUEST: '@enrollments/GET_REQUEST',
  GET_SUCCESS: '@enrollments/GET_SUCCESS',
  GET_FAILURE: '@enrollments/GET_FAILURE',
  CREATE_REQUEST: '@enrollments/CREATE_REQUEST',
  CREATE_SUCCESS: '@enrollments/CREATE_SUCCESS',
  CREATE_FAILURE: '@enrollments/CREATE_FAILURE',
  DELETE_REQUEST: '@enrollments/DELETE_REQUEST',
  DELETE_SUCCESS: '@enrollments/DELETE_SUCCESS',
  DELETE_FAILURE: '@enrollments/DELETE_FAILURE',
  EDIT_REQUEST: '@enrollments/EDIT_REQUEST',
  EDIT_SUCCESS: '@enrollments/EDIT_SUCCESS',
  EDIT_FAILURE: '@enrollments/EDIT_FAILURE',
  SHOW_REQUEST: '@enrollments/SHOW_REQUEST',
  SHOW_SUCCESS: '@enrollments/SHOW_SUCCESS',
  SHOW_FAILURE: '@enrollments/SHOW_FAILURE'
}

export default {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),
  getSuccess: enrollments => ({
    type: Types.GET_SUCCESS,
    payload: { enrollments }
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  createRequest: data => ({
    type: Types.CREATE_REQUEST,
    payload: { data }
  }),

  createSuccess: enrollment => ({
    type: Types.CREATE_SUCCESS,
    payload: { enrollment }
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

  editSuccess: enrollment => ({
    type: Types.EDIT_SUCCESS,
    payload: { enrollment }
  }),

  editFailure: error => ({
    type: Types.EDIT_FAILURE,
    payload: { error }
  }),
}
