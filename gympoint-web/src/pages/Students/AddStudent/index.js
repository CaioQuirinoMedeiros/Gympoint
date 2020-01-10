/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import StudentsActions from '~/store/modules/students/actions'
import StudentForm from '../StudentForm'

import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  GoBack,
  SaveButton,
} from './styles'

function AddStudent({ history }) {
  const creating = useSelector(({ students }) => students.creating)

  const dispatch = useDispatch()

  function goBack() {
    history.goBack()
  }

  function transformDataToSend(data) {
    return {
      ...data,
      height: data.height ? parseInt(data.height * 100) : null,
      weight: data.weight ? parseInt(data.weight * 1000) : null
    }
  }

  function handleSubmit(data, { resetForm }) {
    const transformedData = transformDataToSend(data)
    dispatch(StudentsActions.createRequest(transformedData))

    resetForm()
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Cadastro de aluno</Title>
        <HeaderActions>
          {creating && <Loading size={30} />}
          <GoBack onClick={goBack}>Voltar</GoBack>
          <SaveButton
            type='submit'
            form='create-student-form'
            disabled={creating}
          >
            Salvar
          </SaveButton>
        </HeaderActions>
      </HeaderContainer>
      <StudentForm onSubmit={handleSubmit} id='create-student-form' />
    </Container>
  )
}

export default AddStudent
