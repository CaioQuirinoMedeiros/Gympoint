import React from 'react'

import { Wrapper, Input, Label } from './styles'

function TextInput({ onChangeText, className, ...props }) {
  return (
    <Wrapper className={className}>
      {props.label && <Label htmlFor={props.name}>{props.label}</Label>}
      <Input
        onChange={e => onChangeText(e.target.value)}
        id={props.name}
        {...props}
      />
    </Wrapper>
  )
}

export default TextInput
