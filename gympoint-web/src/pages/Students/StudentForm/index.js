/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import studentSchema from '~/validations/student'

import {
  Form,
  Input,
  InputsWrapper
} from './styles'

function StudentForm(props) {
  return (
    <Form schema={studentSchema} {...props}>
      <Input name='name' label='Nome completo' />
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
  )
}

export default StudentForm
