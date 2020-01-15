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

  // Plans
  const getPlans = () => api.get('plans')
  const createPlan = data => api.post('plans', data)
  const deletePlan = id => api.delete(`plans/${id}`)
  const editPlan = (id, data) => api.put(`plans/${id}`, data)
  const showPlan = id => api.get(`plans/${id}`)

  // Enrollments
  const getEnrollments = () => api.get('enrollments')
  const createEnrollment = data => api.post('enrollments', data)
  const deleteEnrollment = id => api.delete(`enrollments/${id}`)
  const editEnrollment = (id, data) => api.put(`enrollments/${id}`, data)
  const showEnrollment = id => api.get(`enrollments/${id}`)

  return {
    setAuthToken,
    removeAuthToken,

    login,

    getStudents,
    createStudent,
    deleteStudent,
    editStudent,
    showStudent,

    getPlans,
    createPlan,
    deletePlan,
    editPlan,
    showPlan,

    getEnrollments,
    createEnrollment,
    deleteEnrollment,
    editEnrollment,
    showEnrollment
  }
}

export default create()
