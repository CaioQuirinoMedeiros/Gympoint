import axios from 'axios'

import apiConfig from '../config/api-config'

const create = () => {
  const api = axios.create(apiConfig)

  // Authentication
  const login = id => api.get(`students/${id}`)

  // Checkins
  const getCheckins = id => api.get(`students/${id}/checkins`)
  const createCheckin = id => api.post(`students/${id}/checkins`)

  // Help Orders
  const getHelpOrders = id => api.get(`students/${id}/help-orders`)
  const createHelpOrder = (id, data) =>
    api.post(`students/${id}/help-orders`, data)

  return {
    login,

    getCheckins,
    createCheckin,

    getHelpOrders,
    createHelpOrder
  }
}

export default create()
