import React from 'react'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import { addMonths } from '~/utils/helpers/date'
import enrollmentSchema from '~/utils/validations/enrollment'

import Date from '~/components/Inputs/Date'
import DateField from '~/components/Inputs/DateField'
import Currency from '~/components/Inputs/Currency'

import { Form, SelectStudent, SelectPlan, InputsWrapper } from './styles'

function EnrollmentForm ({ onSubmit, initialValues, ...rest }) {
  const plans = useSelector(({ plans }) => plans.data)

  function renderForm ({ values }) {
    const getPlan = planId => plans.find(plan => plan.id === planId)

    const getEndDate = () => {
      const { start_date, plan_id } = values

      if (start_date && plan_id) {
        const plan = getPlan(plan_id)
        return addMonths(start_date, plan.duration)
      } else {
        return null
      }
    }

    const getTotalPrice = () => {
      const { plan_id } = values
      if (plan_id) {
        const plan = getPlan(plan_id)

        return (plan.price * plan.duration) / 100
      } else {
        return null
      }
    }

    return (
      <Form {...rest}>
        <SelectStudent />
        <SelectPlan />
        <InputsWrapper>
          <DateField label='Data de início' name='start_date' />
          <Date
            label='Data de término'
            name='end_date'
            disabled
            selected={getEndDate()}
          />
          <Currency
            label='Valor final'
            disabled
            name='final_price'
            value={getTotalPrice()}
          />
        </InputsWrapper>
      </Form>
    )
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues || {}}
      validationSchema={enrollmentSchema}
    >
      {renderForm}
    </Formik>
  )
}

export default EnrollmentForm
