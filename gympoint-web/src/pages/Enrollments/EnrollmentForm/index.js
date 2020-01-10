/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import planSchema from '~/utils/validations/plan'

import { Form, Input, InputsWrapper } from './styles'

function EnrollmentForm(props) {
  return (
    <Form schema={planSchema} {...props}>
      <Input name='student' label='Aluno' />
      <InputsWrapper>
        <Input name='plan' label='Plano' />
        <Input name='start_date' label='Data de início' />
        <Input name='end_date' label='Data de término' />
        <Input name='total' label='Valor final' />
      </InputsWrapper>
    </Form>
  )
}

export default EnrollmentForm
