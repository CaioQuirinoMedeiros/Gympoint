/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import planSchema from '~/utils/validations/plan'

import SelectStudent from '~/components/SelectStudent'
import SelectPlan from '~/components/SelectPlan'
import DateInput from '~/components/Inputs/DateInput'

import { Form, Input, InputsWrapper } from './styles'

function EnrollmentForm(props) {
  return (
    <Form {...props}>
      <SelectStudent />
      <SelectPlan />
      <InputsWrapper>
        <DateInput
          name='start_date'
          label='Data de início'
          placeholderText='Escolha a data'
        />
        <Input name='end_date' label='Data de término' />
        <Input name='total' label='Valor final' />
      </InputsWrapper>
    </Form>
  )
}

export default EnrollmentForm
