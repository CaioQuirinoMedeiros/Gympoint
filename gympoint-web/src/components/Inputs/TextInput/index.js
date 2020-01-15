import React from 'react'

import { Wrapper, Input, Label } from './styles'

function TextInput({ onChangeText, className, ...rest }) {
  return (
    <Wrapper className={className}>
      {rest.label && <Label htmlFor={rest.name}>{rest.label}</Label>}
      <Input
        onChange={e => onChangeText(e.target.value)}
        id={rest.name}
        {...rest}
      />
    </Wrapper>
  )
}

export default TextInput
