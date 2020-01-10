/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import StudentsActions from '~/store/modules/students/actions'
import StudentForm from '../StudentForm'

import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  GoBack,
  SaveStudent,
} from './styles'

function EditStudent({ history }) {
  const { studentId } = useParams()

  const editing = useSelector(({ students }) => students.editing)
  const student = useSelector(({ students }) =>
    students.data.find(student => student.id === parseInt(studentId))
  )

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

  function transformReceivedData(data) {
    return {
      ...data,
      height: data.height ? data.height / 100 : null,
      weight: data.weight ? data.weight / 1000 : null
    }
  }

  function handleSubmit(data) {
    const transformedData = transformDataToSend(data)
    dispatch(StudentsActions.editRequest(studentId, transformedData))
  }

  if (!student) {
    return <Redirect to='students' />
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Edição de aluno</Title>
        <HeaderActions>
          {editing && <Loading size={30} />}
          <GoBack onClick={goBack}>Voltar</GoBack>
          <SaveStudent
            type='submit'
            form='edit-student-form'
            disabled={editing}
          >
            Salvar
          </SaveStudent>
        </HeaderActions>
      </HeaderContainer>
      <StudentForm
        initialData={transformReceivedData(student)}
        onSubmit={handleSubmit}
        id='edit-student-form'
      />
    </Container>
  )
}

export default EditStudent
