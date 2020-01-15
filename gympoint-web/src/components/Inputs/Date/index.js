import React from 'react'

import { Wrapper, DatePicker } from './styles'

function DateInput({ name, label, error, className, ...rest }) {
  return (
    <Wrapper className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <DatePicker name={name} {...rest} />
      {error && <span>{error}</span>}
    </Wrapper>
  )
}

export default DateInput
