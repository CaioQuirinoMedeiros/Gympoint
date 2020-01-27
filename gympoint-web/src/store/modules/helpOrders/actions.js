export const Types = {
  GET_REQUEST: '@help-orders/GET_REQUEST',
  GET_SUCCESS: '@help-orders/GET_SUCCESS',
  GET_FAILURE: '@help-orders/GET_FAILURE',
  ANSWER_REQUEST: '@help-orders/ANSWER_REQUEST',
  ANSWER_SUCCESS: '@help-orders/ANSWER_SUCCESS',
  ANSWER_FAILURE: '@help-orders/ANSWER_FAILURE'
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

  answerRequest: (id, data) => ({
    type: Types.ANSWER_REQUEST,
    payload: { id, data }
  }),

  answerSuccess: () => ({
    type: Types.ANSWER_SUCCESS
  }),

  answerFailure: error => ({
    type: Types.ANSWER_FAILURE,
    payload: { error }
  })
}
