import React from 'react'

import { Input, Wrapper } from './styles'

function TextInput({ className, ...props }) {
  return (
    <Wrapper className={className}>
      <Input {...props} />
    </Wrapper>
  )
}

export default TextInput
