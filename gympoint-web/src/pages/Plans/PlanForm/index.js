/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import planSchema from '~/utils/validations/plan'

import CurrencyInput from '~/components/Inputs/CurrencyInput'

import { Form, Input, InputsWrapper } from './styles'

function PlanForm(props) {
  return (
    <Form schema={planSchema} {...props}>
      <Input name='title' label='Título' />
      <InputsWrapper>
        <Input
          name='duration'
          label='Duração'
          type='number'
          max={360}
          min={1}
          unit='meses'
        />
        <CurrencyInput name='price' label='Preço mensal' />
      </InputsWrapper>
    </Form>
  )
}

export default PlanForm
