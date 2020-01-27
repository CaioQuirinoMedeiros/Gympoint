import React from 'react'
import { useField } from 'formik'

import Select from '~/components/Inputs/Select'

export default function ReactSelect (props) {
  const [field, meta, helpers] = useField(props)

  function getValue () {
    const selected = props.options.find(option => option.value === field.value)

    return selected || ''
  }

  return (
    <Select
      error={meta.touched ? meta.error : undefined}
      {...field}
      {...props}
      onChange={option => helpers.setValue(option?.value)}
      onBlur={() => helpers.setTouched(true)}
      value={getValue()}
    />
  )
}
