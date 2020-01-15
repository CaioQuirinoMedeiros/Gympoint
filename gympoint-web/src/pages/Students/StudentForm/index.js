/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Formik } from 'formik'

import studentSchema from '~/utils/validations/student'

import { Form, Field, InputsWrapper } from './styles'

function StudentForm({ onSubmit, initialValues, ...rest }) {
  function renderForm(formik) {
    return (
      <Form {...rest}>
        <Field label='Nome completo' name='name' />
        <Field label='Email' name='email' />
        <InputsWrapper>
          <Field label='Idade' name='age' type='number' min={10} />
          <Field
            label='Peso (kg)'
            name='weight'
            type='number'
            min={30}
            max={400}
            step={0.1}
          />
          <Field
            label='Altura (m)'
            name='height'
            type='number'
            max={2.5}
            min={0.5}
            step={0.01}
          />
        </InputsWrapper>
      </Form>
    )
  }

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={studentSchema}
      initialValues={initialValues || {}}
    >
      {renderForm}
    </Formik>
  )
}

export default StudentForm
