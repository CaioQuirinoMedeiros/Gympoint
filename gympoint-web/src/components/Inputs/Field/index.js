import React from 'react'
import { useField, useFormikContext } from 'formik'

import Input from '~/components/Inputs/Input'

function Field(props) {
  const [field, meta] = useField(props)
  const formik = useFormikContext()

  console.log('CONTEXT: ', formik)

  return (
    <Input
      error={meta.touched || formik.submitCount > 0 ? meta.error : undefined}
      {...props}
      {...field}
    />
  )
}

export default Field
