export const Types = {
  GET_REQUEST: '@help-orders/GET_REQUEST',
  GET_SUCCESS: '@help-orders/GET_SUCCESS',
  GET_FAILURE: '@help-orders/GET_FAILURE',
  CREATE_REQUEST: '@help-orders/CREATE_REQUEST',
  CREATE_SUCCESS: '@help-orders/CREATE_SUCCESS',
  CREATE_FAILURE: '@help-orders/CREATE_FAILURE'
}

export default {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getSuccess: helpOrders => ({
    type: Types.GET_SUCCESS,
    payload: { helpOrders }
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  createRequest: (data) => ({
    type: Types.CREATE_REQUEST,
    payload: { data }
  }),

  createSuccess: helpOrder => ({
    type: Types.CREATE_SUCCESS,
    payload: { helpOrder }
  }),

  createFailure: error => ({
    type: Types.CREATE_FAILURE,
    payload: { error }
  })
}
