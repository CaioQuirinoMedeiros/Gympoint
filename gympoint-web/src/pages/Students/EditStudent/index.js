/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import StudentsActions from '~/store/modules/students/actions'
import studentSchema from '~/validations/student'

import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  GoBack,
  SaveStudent,
  Form,
  Input,
  InputsWrapper
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
      <Form
        initialData={transformReceivedData(student)}
        onSubmit={handleSubmit}
        schema={studentSchema}
        id='edit-student-form'
      >
        <Input name='name' label='Nome' />
        <Input name='email' label='Email' type='email' />
        <InputsWrapper>
          <Input name='age' label='Idade' type='number' />
          <Input
            name='weight'
            label='Peso'
            type='number'
            min={30}
            max={400}
            step={0.1}
            unit='kg'
          />
          <Input
            name='height'
            label='Altura'
            type='number'
            max={2.5}
            min={0.4}
            step={0.01}
            unit='m'
          />
        </InputsWrapper>
      </Form>
    </Container>
  )
}

export default EditStudent
