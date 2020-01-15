import React from 'react'
import { useField } from 'formik'

import Currency from '~/components/Inputs/Currency'

function CurrencyField(props) {
  const [field, meta, helpers] = useField(props)

  return (
    <Currency
      error={meta.touched ? meta.error : undefined}
      onChangeEvent={(_, __, floatValue) => helpers.setValue(floatValue)}
      {...props}
      {...field}
    />
  )
}

export default CurrencyField
