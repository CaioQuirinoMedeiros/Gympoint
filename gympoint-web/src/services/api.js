import axios from 'axios'

import apiConfig from '~/config/api-config'

const create = () => {
  const api = axios.create({ ...apiConfig })

  const setAuthToken = token => {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  const removeAuthToken = () => {
    api.defaults.headers.Authorization = ''
  }

  // Authentication

  const login = userAuth => api.post('sessions', userAuth)

  // Students

  const getStudents = () => api.get('students')
  const deleteStudent = id => api.delete(`students/${id}`)
  const showStudent = id => api.get(`students/${id}`)

  return {
    setAuthToken,
    removeAuthToken,

    login,

    getStudents,
    deleteStudent,
    showStudent
  }
}

export default create()
