/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Formik } from 'formik'

import Date from '~/components/Inputs/Date'
import DateField from '~/components/Inputs/DateField'

import { Form, Field, InputsWrapper } from './styles'

function EnrollmentForm({ onSubmit, initialValues, ...rest }) {
  function renderForm(formik) {
    return (
      <Form {...rest}>
        <Field label='Título' name='title' />
        <InputsWrapper>
          <Field label='Duração' name='duration' type='number' min={1} />
          <DateField label='Data de início' name='start_date' />
          <Date
            label='Data de término'
            name='end_date'
            disabled
            selected={formik.values.start_date}
          />
        </InputsWrapper>
      </Form>
    )
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues || {}}>
      {renderForm}
    </Formik>
  )
}

export default EnrollmentForm
