/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import EnrollmentsActions from '~/store/modules/enrollments/actions'
import EnrollmentForm from '../EnrollmentForm'

import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  GoBack,
  SaveButton
} from './styles'

function EditEnrollment({ history }) {
  const { enrollmentId } = useParams()

  const editing = useSelector(({ enrollments }) => enrollments.editing)
  const enrollment = useSelector(({ enrollments }) =>
    enrollments.data.find(
      enrollment => enrollment.id === parseInt(enrollmentId)
    )
  )

  const dispatch = useDispatch()

  function goBack() {
    history.goBack()
  }

  function handleSubmit(data) {
    dispatch(EnrollmentsActions.editRequest(enrollmentId, data))
  }

  if (!enrollment) {
    return <Redirect to='enrollments' />
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Edição de matrícula</Title>
        <HeaderActions>
          {editing && <Loading size={30} />}
          <GoBack onClick={goBack}>Voltar</GoBack>
          <SaveButton type='submit' form='edit-enrollment-form' disabled={editing}>
            Salvar
          </SaveButton>
        </HeaderActions>
      </HeaderContainer>
      <EnrollmentForm
        initialData={enrollment}
        onSubmit={handleSubmit}
        id='edit-enrollment-form'
      />
    </Container>
  )
}

export default EditEnrollment
