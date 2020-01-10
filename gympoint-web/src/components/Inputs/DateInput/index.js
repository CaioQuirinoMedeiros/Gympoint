import React, { useRef, useEffect, useState } from 'react'
import { useField } from '@rocketseat/unform'

import { formatDate } from '~/utils/helpers/date'

import { Wrapper, Label, DatePicker } from './styles'

function DateInput({ name, className, ...rest }) {
  const ref = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)
  const [selected, setSelected] = useState(defaultValue)

  function parseSelectValue(pickerRef) {
    return formatDate(pickerRef.props.selected)
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      // parseValue: parseSelectValue,
      clearValue: pickerRef => {
        pickerRef.clear()
      }
    })
  }, [ref.current, fieldName]) // eslint-disable-line

  return (
    <Wrapper className={className}>
      {rest.label && <Label htmlFor={name}>{rest.label}</Label>}
      <DatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Wrapper>
  )
}

export default DateInput
