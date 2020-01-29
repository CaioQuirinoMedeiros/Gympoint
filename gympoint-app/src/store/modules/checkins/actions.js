export const Types = {
  GET_REQUEST: '@checkins/GET_REQUEST',
  GET_SUCCESS: '@checkins/GET_SUCCESS',
  GET_FAILURE: '@checkins/GET_FAILURE',
  CREATE_REQUEST: '@checkins/CREATE_REQUEST',
  CREATE_SUCCESS: '@checkins/CREATE_SUCCESS',
  CREATE_FAILURE: '@checkins/CREATE_FAILURE'
}

export default {
  getRequest: () => ({
    type: Types.GET_REQUEST
  }),

  getSuccess: checkins => ({
    type: Types.GET_SUCCESS,
    payload: { checkins }
  }),

  getFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

  createRequest: () => ({
    type: Types.CREATE_REQUEST
  }),

  createSuccess: checkin => ({
    type: Types.CREATE_SUCCESS,
    payload: { checkin }
  }),

  createFailure: error => ({
    type: Types.CREATE_FAILURE,
    payload: { error }
  })
}
