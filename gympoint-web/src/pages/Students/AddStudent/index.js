/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
    console.log(transformedData)
    dispatch(StudentsActions.createRequest(transformedData))

    // resetForm()
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Cadastro de aluno</Title>
        <HeaderActions>
          {creating && <Loading size={30} />}
          <GoBack onClick={goBack}>Voltar</GoBack>
          <SaveStudent
            type='submit'
            form='create-student-form'
            disabled={creating}
          >
            Salvar
          </SaveStudent>
        </HeaderActions>
      </HeaderContainer>
      <Form
        onSubmit={handleSubmit}
        schema={studentSchema}
        id='create-student-form'
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

export default AddStudent
