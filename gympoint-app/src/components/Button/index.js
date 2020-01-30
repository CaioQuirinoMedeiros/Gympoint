import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Text, Loading } from './styles'

function Button ({ children, disabled, onPress, loading, ...rest }) {
  function handlePress () {
    if (!disabled) {
      onPress()
    }
  }

  return (
    <Wrapper onPress={disabled ? null : onPress} disabled={disabled} {...rest}>
      <Text>{children}</Text>
      {loading && <Loading size='small' color='#fff' />}
    </Wrapper>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool
}

Button.defaultProps = {
  loading: false
}

export default Button
