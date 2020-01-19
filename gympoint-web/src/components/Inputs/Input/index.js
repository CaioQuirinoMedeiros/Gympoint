import React from 'react'

import { Wrapper } from './styles'

function Input({ name, label, error, onChangeText, className, ...rest }) {
  function handleChange(e) {
    onChangeText(e.target.value)
  }

  return (
    <Wrapper className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} name={name} onChange={handleChange} {...rest} />
      {error && <span>{error}</span>}
    </Wrapper>
  )
}

export default Input
