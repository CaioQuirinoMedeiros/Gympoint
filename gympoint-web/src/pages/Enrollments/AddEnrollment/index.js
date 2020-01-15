/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

function AddEnrollment({ history }) {
  const creating = useSelector(({ enrollments }) => enrollments.creating)

  const dispatch = useDispatch()

  function goBack() {
    history.goBack()
  }

  function handleSubmit(data, { resetForm }) {
    console.log('data: ', data)
    dispatch(EnrollmentsActions.createRequest(data))
    resetForm()
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Cadastro de matrícula</Title>
        <HeaderActions>
          {creating && <Loading size={30} />}
          <GoBack onClick={goBack}>Voltar</GoBack>
          <SaveButton
            type='submit'
            form='create-enrollment-form'
            disabled={creating}
          >
            Salvar
          </SaveButton>
        </HeaderActions>
      </HeaderContainer>
      <EnrollmentForm onSubmit={handleSubmit} id='create-enrollment-form' />
    </Container>
  )
}

export default AddEnrollment
