import { all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { Types as StudentsTypes } from '../students/actions'
import { Types as PlansTypes } from '../plans/actions'
import { Types as EnrollmentsTypes } from '../enrollments/actions'
import { Types as HelpOrdersTypes } from '../helpOrders/actions'

import messages from '~/utils/constants/messages'

export function createStudentSuccessMessage ({ payload }) {
  toast.success(messages.students.createSuccess(payload.student))
}

export function editStudentSuccessMessage ({ payload }) {
  toast.success(messages.students.editSuccess(payload.student))
}

export function deleteStudentSuccessMessage ({ payload }) {
  toast.success(messages.students.deleteSuccess(payload.id))
}

export function createPlanSuccessMessage ({ payload }) {
  toast.success(messages.plans.createSuccess(payload.plan))
}

export function editPlanSuccessMessage ({ payload }) {
  toast.success(messages.plans.editSuccess(payload.plan))
}

export function deletePlanSuccessMessage ({ payload }) {
  toast.success(messages.plans.deleteSuccess(payload.id))
}

export function createEnrollmentSuccessMessage ({ payload }) {
  toast.success(messages.enrollments.createSuccess(payload.enrollment))
}

export function editEnrollmentSuccessMessage ({ payload }) {
  toast.success(messages.enrollments.editSuccess(payload.enrollment))
}

export function deleteEnrollmentSuccessMessage ({ payload }) {
  toast.success(messages.enrollments.deleteSuccess(payload.id))
}

export function answerHelpOrderSuccessMessage ({ payload }) {
  toast.success(messages.helpOrders.answerSuccess(payload.id))
}

export function failureMessage ({ payload }) {
  toast.error(payload.error)
}

export default all([
  takeLatest(StudentsTypes.GET_FAILURE, failureMessage),
  takeLatest(StudentsTypes.CREATE_SUCCESS, createStudentSuccessMessage),
  takeLatest(StudentsTypes.CREATE_FAILURE, failureMessage),
  takeLatest(StudentsTypes.DELETE_SUCCESS, deleteStudentSuccessMessage),
  takeLatest(StudentsTypes.DELETE_FAILURE, failureMessage),
  takeLatest(StudentsTypes.EDIT_SUCCESS, editStudentSuccessMessage),
  takeLatest(StudentsTypes.EDIT_FAILURE, failureMessage),
  takeLatest(PlansTypes.GET_FAILURE, failureMessage),
  takeLatest(PlansTypes.CREATE_SUCCESS, createPlanSuccessMessage),
  takeLatest(PlansTypes.CREATE_FAILURE, failureMessage),
  takeLatest(PlansTypes.DELETE_SUCCESS, deletePlanSuccessMessage),
  takeLatest(PlansTypes.DELETE_FAILURE, failureMessage),
  takeLatest(PlansTypes.EDIT_SUCCESS, editPlanSuccessMessage),
  takeLatest(PlansTypes.EDIT_FAILURE, failureMessage),
  takeLatest(EnrollmentsTypes.GET_FAILURE, failureMessage),
  takeLatest(EnrollmentsTypes.CREATE_SUCCESS, createEnrollmentSuccessMessage),
  takeLatest(EnrollmentsTypes.CREATE_FAILURE, failureMessage),
  takeLatest(EnrollmentsTypes.DELETE_SUCCESS, deleteEnrollmentSuccessMessage),
  takeLatest(EnrollmentsTypes.DELETE_FAILURE, failureMessage),
  takeLatest(EnrollmentsTypes.EDIT_SUCCESS, editEnrollmentSuccessMessage),
  takeLatest(EnrollmentsTypes.EDIT_FAILURE, failureMessage),
  takeLatest(HelpOrdersTypes.GET_FAILURE, failureMessage),
  takeLatest(HelpOrdersTypes.ANSWER_SUCCESS, answerHelpOrderSuccessMessage),
  takeLatest(HelpOrdersTypes.ANSWER_FAILURE, failureMessage),
])
