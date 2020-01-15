import React from 'react'
import { useField } from 'formik'

import Date from '~/components/Inputs/Date'

function DateInput(props) {
  const [field, meta, helpers] = useField(props)

  return (
    <Date
      error={meta.touched ? meta.error : undefined}
      placeholderText='Escolha a data'
      {...props}
      {...field}
      selected={field.value}
      onChange={value => helpers.setValue(value)}
    />
  )
}

export default DateInput
