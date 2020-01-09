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
  const createStudent = data => api.post('students', data)
  const deleteStudent = id => api.delete(`students/${id}`)
  const editStudent = (id, data) => api.put(`students/${id}`, data)
  const showStudent = id => api.get(`students/${id}`)

  return {
    setAuthToken,
    removeAuthToken,

    login,

    getStudents,
    createStudent,
    deleteStudent,
    editStudent,
    showStudent
  }
}

export default create()
