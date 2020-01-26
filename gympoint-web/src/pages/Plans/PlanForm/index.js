/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Formik } from 'formik'

import planSchema from '~/utils/validations/plan'

import { Form, Field, Currency, CurrencyField, InputsWrapper } from './styles'

function PlanForm ({ onSubmit, initialValues, ...rest }) {
  function renderForm (formik) {
    const totalPriceValue = formik.values.price * formik.values.duration

    return (
      <Form {...rest}>
        <Field label='Título' name='title' />
        <InputsWrapper>
          <Field
            label='Duração (meses)'
            name='duration'
            type='number'
            min={1}
          />
          <CurrencyField name='price' label='Preço mensal' />
          <Currency
            name='price_total'
            label='Preço total'
            disabled
            value={totalPriceValue}
          />
        </InputsWrapper>
      </Form>
    )
  }

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={planSchema}
      initialValues={initialValues || {}}
    >
      {renderForm}
    </Formik>
  )
}

export default PlanForm
