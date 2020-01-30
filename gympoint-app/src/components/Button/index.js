import React from 'react'

import { Wrapper, Text, Loading } from './styles'

function Button ({ children, disabled, onPress, loading, ...rest }) {
  return (
    <Wrapper onPress={disabled ? null : onPress} disabled={disabled} {...rest}>
      <Text>{children}</Text>
      {loading && <Loading size='small' color='#fff' />}
    </Wrapper>
  )
}

export default Button
