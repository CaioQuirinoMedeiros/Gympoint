import axios from 'axios'

import apiConfig from '~/config/api-config'

console.log('API')
console.log(apiConfig)

const create = () => {
  const api = axios.create({ ...apiConfig })

  const setAuthToken = userAuth =>
    api.setHeader('Authorization', `Bearer ${userAuth}`)

  const removeAuthToken = () => api.deleteHeader('Authorization')

  // Authentication

  const login = userAuth => api.post('sessions', userAuth)

  return {
    setAuthToken,
    removeAuthToken,

    login
  }
}

export default create()
