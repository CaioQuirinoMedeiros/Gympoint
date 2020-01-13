import React from 'react'

import { Wrapper } from './styles'

function Input({ name, label, error, className, ...rest }) {
  return (
    <Wrapper className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} {...rest} />
      {error && <span>{error}</span>}
    </Wrapper>
  )
}

export default Input
