import React from 'react'
import { useField } from 'formik'

import Input from '~/components/Inputs/Input'

function Field(props) {
  const [field, meta] = useField(props)

  return (
    <Input
      error={meta.touched ? meta.error : undefined}
      {...props}
      {...field}
    />
  )
}

export default Field
