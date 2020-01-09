/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import StudentActions from '~/store/modules/students/actions'
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

function EditStudent({ history, ...rest }) {
  const { studentId } = useParams()

  const student = useSelector(({ students }) =>
    students.data.find(student => student.id === parseInt(studentId))
  )

  function goBack() {
    history.goBack()
  }

  function handleSubmit(data) {
    console.log(data)
  }

  if (!student) {
    return <Redirect to='students' />
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Edição de aluno</Title>
        <HeaderActions>
          <GoBack onClick={goBack}>Voltar</GoBack>
          <SaveStudent type='submit' form='edit-student'>
            Salvar
          </SaveStudent>
        </HeaderActions>
      </HeaderContainer>
        <Form
          initialData={student}
          onSubmit={handleSubmit}
          schema={studentSchema}
          id='edit-student'
        >
          <Input name='name' label='Nome' />
          <Input name='email' label='Email' type='email' />
          <InputsWrapper>
            <Input name='age' label='Idade' type='number' />
            <Input name='weight' label='Peso' type='number' />
            <Input name='height' label='Altura' type='number' />
          </InputsWrapper>
        </Form>
    </Container>
  )
}

export default EditStudent
